import CrudTable, { CrudRow } from "@components/data-table/crud-table";

type CheckupRow = CrudRow & {
  date: string;
  type: string;
  doctor: string;
  org: string;
  findingIcd: string;
};

const mockC: CheckupRow[] = [
  {
    id: 1,
    date: "2025-08-01",
    type: "full",
    doctor: "Др. Энх",
    org: "Цэргийн эмнэлэг",
    findingIcd: "Z00",
  },
];

export function CheckupsPage() {
  return (
    <div className="w-full space-y-4">
      <CrudTable<CheckupRow>
        initialData={mockC}
        searchKeys={["doctor", "org", "findingIcd"]}
        filterDefs={[
          {
            name: "type",
            options: [
              { label: "Full", value: "full" },
              { label: "Partial", value: "partial" },
              { label: "Repeat", value: "repeat" },
            ],
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
