import CrudTable, { CrudRow } from "@components/data-table/crud-table";

type ReportRow = CrudRow & { period: string; type: string; generatedAt: string };
const mockReports: ReportRow[] = [
  { id: 1, period: "2025-Q3", type: "disease", generatedAt: "2025-08-27" },
];

export function ReportsPage() {
  return (
    <div className="w-full space-y-4">
      <CrudTable<ReportRow>
        initialData={mockReports}
        searchKeys={["period", "type"]}
        filterDefs={[{ name: "type", options: [{ label: "Disease", value: "disease" }] }]}
        onAdd={() => {/* trigger generate report flow */}}
        onEdit={() => {/* open details */}}
        onDelete={() => {/* remove report */}}
      />
    </div>
  );
}
