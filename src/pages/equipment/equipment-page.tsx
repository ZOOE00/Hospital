import CrudTable, { CrudRow } from "@components/data-table/crud-table";

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
      <CrudTable<EqRow>
        initialData={mockEq}
        searchKeys={["name", "model", "serial"]}
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
