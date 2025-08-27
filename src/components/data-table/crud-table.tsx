import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { ColumnDef } from "@tanstack/react-table";
import CrudToolbar from "./crud-toolbar";
import { DataTable } from "./data-table";
import { Checkbox } from "@components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { CrudRowActions } from "./row-actions";

export type CrudRow = Record<string, any> & { id: string | number };

interface CrudTableProps<T extends CrudRow> {
  title?: string;
  initialData: T[];
  searchKeys?: (keyof T)[];
  filterDefs?: { name: string; options: DataType[] }[];
  onAdd?: () => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

export default function CrudTable<T extends CrudRow>({
  initialData,
  searchKeys = ["id" as keyof T],
  filterDefs = [],
  onAdd,
  onEdit,
  onDelete,
}: CrudTableProps<T>) {
  const form = useForm<{ search: string } & Record<string, string>>({
    defaultValues: { search: "" },
  });

  const [page, setPage] = useState({ pageIndex: 0, pageSize: 10 });
  const [data, setData] = useState<T[]>(initialData);

  const filtered = useMemo(() => {
    const { search, ...filterVals } = form.getValues();
    const s = (search || "").toLowerCase();
    return data.filter((row) => {
      const matchesSearch = s
        ? searchKeys.some((k) => String(row[k] ?? "").toLowerCase().includes(s))
        : true;
      const matchesFilters = Object.entries(filterVals).every(([k, v]) => {
        if (!v) return true;
        return String((row as any)[k] ?? "") === v;
      });
      return matchesSearch && matchesFilters;
    });
  }, [data, form, searchKeys]);

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
  Object.keys(sample).forEach((key) => {
      base.push({
        accessorKey: key,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={String(key)} />
        ),
        cell: ({ row }) => <div>{String(row.getValue(key))}</div>,
      } as ColumnDef<T>);
    });

    // Actions
    base.push({
      id: "actions",
      cell: ({ row }) => (
        <CrudRowActions
          onEdit={() => onEdit?.(row.original)}
          onDelete={() => {
            onDelete?.(row.original);
            setData((prev) => prev.filter((r) => r.id !== row.original.id));
          }}
        />
      ),
    });
    return base;
  }, [data, onEdit, onDelete]);

  return (
    <div className="space-y-4">
      <CrudToolbar
        form={form}
        onAdd={() => onAdd?.()}
        searchPlaceholder="Search..."
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
    </div>
  );
}
