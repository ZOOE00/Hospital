import CrudTable, { CrudRow } from "@components/data-table/crud-table";
import PageTitle from "@components/commons/page-title";

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
      <PageTitle 
        title="Урьдчилан сэргийлэх үзлэг" 
        desc="Эрүүл мэндийн урьдчилан сэргийлэх үзлэгийн бүртгэл" 
      />
      
      <CrudTable<CheckupRow>
        initialData={mockC}
        searchKeys={["doctor", "org", "findingIcd"]}
        columnsConfig={[
          { key: "id", title: "ID" },
          { key: "date", title: "Огноо" },
          { key: "type", title: "Төрөл" },
          { key: "doctor", title: "Эмч" },
          { key: "org", title: "Байгууллага" },
          { key: "findingIcd", title: "Оношийн код" },
        ]}
        filterDefs={[
          {
            name: "type",
            options: [
              { label: "Бүрэн", value: "full" },
              { label: "Хэсэгчилсэн", value: "partial" },
              { label: "Давтан", value: "repeat" },
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
