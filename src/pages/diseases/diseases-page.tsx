import CrudTable, { CrudRow } from "@components/data-table/crud-table";

type DiseaseRow = CrudRow & {
  icd10: string;
  nameMn: string;
  category: string;
  treatmentType: string;
  outcome: string;
  date: string;
};

const mock: DiseaseRow[] = [
  {
    id: 1,
    icd10: "J45",
    nameMn: "Амьсгалын замын архаг үрэвсэл (астма)",
    category: "respiratory",
    treatmentType: "outpatient",
    outcome: "recovered",
    date: "2025-08-01",
  },
];

export function DiseasesPage() {
  return (
    <div className="w-full space-y-4">
      <CrudTable<DiseaseRow>
        initialData={mock}
        searchKeys={["icd10", "nameMn"]}
        filterDefs={[
          {
            name: "category",
            options: [
              { label: "Respiratory", value: "respiratory" },
              { label: "Cardio", value: "cardio" },
            ],
          },
          {
            name: "treatmentType",
            options: [
              { label: "Outpatient", value: "outpatient" },
              { label: "Inpatient", value: "inpatient" },
            ],
          },
        ]}
        onAdd={() => {/* open create modal */}}
        onEdit={() => {/* open edit modal */}}
        onDelete={() => {/* confirm delete */}}
      />
    </div>
  );
}
