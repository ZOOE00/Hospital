import CrudTable, { CrudRow } from "@components/data-table/crud-table";
import PageTitle from "@components/commons/page-title";

type EqRow = CrudRow & {
  name: string;
  model: string;
  serial: string;
  startDate: string;
  location: string;
  owner: string;
};

const mockEq: EqRow[] = [
  {
    id: 1,
    name: "ЭКГ аппарат",
    model: "ECG-2000",
    serial: "SN-123456",
    startDate: "2023-03-12",
    location: "Диагностикийн өрөө",
    owner: "Техникч А.",
  },
];

export function EquipmentPage() {
  return (
    <div className="w-full space-y-4">
      <PageTitle 
        title="Тоног төхөөрөмж" 
        desc="Эмнэлгийн тоног төхөөрөмжийн бүртгэл болон удирдлага" 
      />
      
      <CrudTable<EqRow>
        initialData={mockEq}
        searchKeys={["name", "model", "serial"]}
        columnsConfig={[
          { key: "id", title: "ID" },
          { key: "name", title: "Нэр" },
          { key: "model", title: "Загвар" },
          { key: "serial", title: "Серийн дугаар" },
          { key: "startDate", title: "Ашиглалтын огноо" },
          { key: "location", title: "Байршил" },
          { key: "owner", title: "Хариуцагч" },
        ]}
        filterDefs={[
          {
            name: "location",
            options: [{ label: "Диагностик", value: "Диагностикийн өрөө" }],
          },
        ]}
        onAdd={() => {
          /* open create modal */
        }}
        onEdit={() => {
          /* open edit modal */
        }}
        onDelete={() => {
          /* confirm delete */
        }}
      />
    </div>
  );
}
