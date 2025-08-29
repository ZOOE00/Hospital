import CrudTable, { CrudRow } from "@components/data-table/crud-table";
import PageTitle from "@components/commons/page-title";

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
      <PageTitle
        title="Хэвтэн эмчилгээ"
        desc="Хэвтэн эмчилгээний бүртгэл болон мэдээлэл"
      />

      <CrudTable<HospRow>
        initialData={mockH}
        searchKeys={["hospital", "ward", "diagnosis"]}
        columnsConfig={[
          { key: "id", title: "ID" },
          { key: "admit", title: "Хүлээн авсан" },
          { key: "discharge", title: "Гарсан" },
          { key: "hospital", title: "Эмнэлэг" },
          { key: "ward", title: "Тасаг" },
          { key: "diagnosis", title: "Онош" },
          { key: "outcome", title: "Үр дүн" },
          { key: "days", title: "Хоног" },
          { key: "workAbility", title: "Ажлын чадвар" },
        ]}
        filterDefs={[
          {
            name: "outcome",
            options: [{ label: "Эдгэрсэн", value: "recovered" }],
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
