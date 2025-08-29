import { useCallback, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ColumnDef } from "@tanstack/react-table";
import CrudToolbar from "./crud-toolbar";
import { DataTable } from "./data-table";
import { Checkbox } from "@components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { CrudRowActions } from "./row-actions";
import { Badge } from "@components/ui/badge";
import { cn } from "@lib/utils";
import AddFormDialog, { type FieldDef } from "./add-form-dialog";
import EditFormDialog from "./edit-form-dialog";

export type CrudRow = Record<string, any> & { id: string | number };

export type ColumnConfig = {
  key: string;
  title: string;
  width?: number;
};

interface CrudTableProps<T extends CrudRow> {
  title?: string;
  initialData: T[];
  searchKeys?: (keyof T)[];
  filterDefs?: { name: string; options: DataType[] }[];
  columnsConfig?: ColumnConfig[];
  onAdd?: () => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

export default function CrudTable<T extends CrudRow>({
  initialData,
  searchKeys = ["id" as keyof T],
  filterDefs = [],
  columnsConfig,
  onAdd,
  onEdit,
  onDelete,
}: CrudTableProps<T>) {
  const form = useForm<{ search: string } & Record<string, string>>({
    defaultValues: { search: "" },
  });

  const [page, setPage] = useState({ pageIndex: 0, pageSize: 10 });
  const [data, setData] = useState<T[]>(initialData);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const editingRef = useRef<T | null>(null);

  const fields = useMemo<FieldDef[]>(() => {
    const sample = (data[0] || {}) as T;
    const keys = Object.keys(sample).filter((k) => k !== "id");
    const selectSet = new Set((filterDefs || []).map((f) => f.name));
    return keys.map((k) => {
      const columnConfig = columnsConfig?.find((c) => c.key === k);
      const label = columnConfig?.title || humanize(k);
      return {
        name: k,
        label: label,
        type: selectSet.has(k) ? "select" : "text",
        options: filterDefs?.find((f) => f.name === k)?.options,
      };
    });
  }, [data, filterDefs, columnsConfig]);

  const filtered = useMemo(() => {
    const { search, ...filterVals } = form.getValues();
    const s = (search || "").toLowerCase();
    return data.filter((row) => {
      const matchesSearch = s
        ? searchKeys.some((k) =>
            String(row[k] ?? "")
              .toLowerCase()
              .includes(s)
          )
        : true;
      const matchesFilters = Object.entries(filterVals).every(([k, v]) => {
        if (!v) return true;
        return String((row as any)[k] ?? "") === v;
      });
      return matchesSearch && matchesFilters;
    });
  }, [data, form, searchKeys]);

  const openAdd = useCallback(() => {
    editingRef.current = null;
    setAddOpen(true);
  }, []);

  const openEdit = useCallback((row: T) => {
    editingRef.current = row;
    setEditOpen(true);
  }, []);

  const handleAdd = useCallback((values: Partial<T>) => {
    setData((prev) => {
      const isNum = typeof (prev[0]?.id ?? 0) === "number";
      const nextId = isNum
        ? ((Math.max(0, ...prev.map((r) => Number(r.id))) + 1) as any)
        : (String(Date.now()) as any);
      return [...prev, { ...(values as any), id: nextId } as T];
    });
    setAddOpen(false);
  }, []);

  const handleEdit = useCallback((values: Partial<T>) => {
    if (!editingRef.current) return;
    const id = editingRef.current.id;
    setData((prev) =>
      prev.map((r) => (r.id === id ? ({ ...r, ...values, id } as T) : r))
    );
    setEditOpen(false);
  }, []);

  const columns: ColumnDef<T, any>[] = useMemo(() => {
    const base: ColumnDef<T, any>[] = [];
    // Selection column
    base.push({
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
    });

    // Auto columns from keys (id, name, etc.) for demo; in real modules, define explicit columns.
    const sample = data[0] || ({} as T);
    const keysToShow = columnsConfig
      ? columnsConfig.map((c) => c.key)
      : Object.keys(sample);

    keysToShow.forEach((key) => {
      const columnConfig = columnsConfig?.find((c) => c.key === key);
      const title = columnConfig?.title || humanize(key);

      base.push({
        accessorKey: key,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={title} />
        ),
        cell: ({ row }) => {
          const val = row.getValue(key);
          // Render enums with colored badges for better readability
          if (typeof val === "string") {
            const rendered = renderEnumBadge(String(key), val);
            if (rendered) return rendered;
          }
          return <div className="font-medium">{String(val)}</div>;
        },
        size: columnConfig?.width,
      } as ColumnDef<T>);
    });

    // Actions
    base.push({
      id: "actions",
      cell: ({ row }) => (
        <CrudRowActions
          onEdit={() => {
            onEdit?.(row.original);
            openEdit(row.original);
          }}
          onDelete={() => {
            onDelete?.(row.original);
            setData((prev) => prev.filter((r) => r.id !== row.original.id));
          }}
        />
      ),
    });
    return base;
  }, [data, onEdit, onDelete, openEdit, columnsConfig]);

  // Handlers are memoized above

  return (
    <div className="space-y-4">
      <CrudToolbar
        form={form}
        onAdd={() => {
          onAdd?.();
          openAdd();
        }}
        filters={filterDefs.map((f) => ({ ...f, placeholder: f.name }))}
      />
      <DataTable
        columns={columns}
        data={filtered.slice(
          page.pageIndex * page.pageSize,
          page.pageIndex * page.pageSize + page.pageSize
        )}
        manualPagination
        paginationState={page}
        onPaginationChange={setPage as any}
        rowCount={filtered.length}
      />

      <AddFormDialog<T>
        open={addOpen}
        onOpenChange={setAddOpen}
        fields={fields}
        onSubmit={handleAdd}
      />
      <EditFormDialog<T>
        open={editOpen}
        onOpenChange={setEditOpen}
        fields={fields}
        initialValues={editingRef.current}
        onSubmit={handleEdit}
      />
    </div>
  );
}

// Helpers to render common enum-like fields as colored badges
type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

function enumVariantFor(field: string, value: string): BadgeVariant | null {
  const f = field.toLowerCase();
  const v = value.toLowerCase();

  // outcomes
  if (f.includes("outcome")) {
    if (["recovered", "normal", "ok", "stable"].includes(v)) return "secondary";
    if (["deceased", "death"].includes(v)) return "destructive";
    return "default";
  }

  // treatment type
  if (f.includes("treatment") || f.includes("type")) {
    if (["outpatient", "partial", "repeat"].includes(v)) return "secondary";
    if (["inpatient", "emergency"].includes(v)) return "default";
    return "outline";
  }

  // gender
  if (f.includes("gender")) {
    if (["m", "male"].includes(v)) return "default";
    if (["f", "female"].includes(v)) return "secondary";
    return "outline";
  }

  // status/generic
  if (f.includes("status")) {
    if (["active", "success", "ready"].includes(v)) return "secondary";
    if (["inactive", "error", "failed"].includes(v)) return "destructive";
    return "outline";
  }

  return null;
}

function renderEnumBadge(field: string, value: string) {
  const variant = enumVariantFor(field, value);
  if (!variant) return null;
  // Map variant to subtle bg/text pairs for better visibility
  const colorClass =
    variant === "secondary"
      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-900/60"
      : variant === "destructive"
      ? "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200/60 dark:border-rose-900/60"
      : variant === "default"
      ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200/60 dark:border-blue-900/60"
      : "bg-zinc-50 text-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-300 border-zinc-200/60 dark:border-zinc-700/60";

  return (
    <Badge variant="outline" className={cn("capitalize", colorClass)}>
      {value}
    </Badge>
  );
}

// Utilities
function humanize(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^./, (s) => s.toUpperCase());
}

// (end component)
