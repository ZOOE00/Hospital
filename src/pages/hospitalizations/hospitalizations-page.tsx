import CrudTable, { CrudRow } from "@components/data-table/crud-table";

type HospRow = CrudRow & {
  admit: string;
  discharge: string;
  hospital: string;
  ward: string;
  diagnosis: string;
  outcome: string;
  days: number;
  workAbility: string;
};

const mockH: HospRow[] = [
  {
    id: 1,
    admit: "2025-07-10",
    discharge: "2025-07-15",
    hospital: "ТТАХНЭ",
    ward: "Мэс засал",
    diagnosis: "K35",
    outcome: "recovered",
    days: 5,
    workAbility: "normal",
  },
];

export function HospitalizationsPage() {
  return (
    <div className="w-full space-y-4">
      <CrudTable<HospRow>
        initialData={mockH}
        searchKeys={["hospital", "ward", "diagnosis"]}
        filterDefs={[
          {
            name: "outcome",
            options: [{ label: "Recovered", value: "recovered" }],
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
