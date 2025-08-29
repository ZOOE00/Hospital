import CrudTable, { CrudRow } from "@components/data-table/crud-table";
import PageTitle from "@components/commons/page-title";

type ReportRow = CrudRow & {
  period: string;
  type: string;
  generatedAt: string;
};
const mockReports: ReportRow[] = [
  { id: 1, period: "2025-Q3", type: "disease", generatedAt: "2025-08-27" },
  { id: 2, period: "2025-Q2", type: "equipment", generatedAt: "2025-07-15" },
  { id: 3, period: "2025-Q1", type: "staff", generatedAt: "2025-04-20" },
];

export function ReportsPage() {
  return (
    <div className="w-full space-y-4">
      <PageTitle 
        title="Тайлан" 
        desc="Эмнэлгийн үйл ажиллагааны тайлан, статистик" 
      />
      
      <CrudTable<ReportRow>
        initialData={mockReports}
        searchKeys={["period", "type"]}
        columnsConfig={[
          { key: "id", title: "ID" },
          { key: "period", title: "Хугацаа" },
          { key: "type", title: "Төрөл" },
          { key: "generatedAt", title: "Үүссэн огноо" },
        ]}
        filterDefs={[
          { 
            name: "type", 
            options: [
              { label: "Өвчлөл", value: "disease" },
              { label: "Тоног төхөөрөмж", value: "equipment" },
              { label: "Ажилтан", value: "staff" },
            ] 
          },
        ]}
        onAdd={() => {
          /* trigger generate report flow */
        }}
        onEdit={() => {
          /* open details */
        }}
        onDelete={() => {
          /* remove report */
        }}
      />
    </div>
  );
}
