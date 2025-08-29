import CrudTable, { CrudRow } from "@components/data-table/crud-table";
import PageTitle from "@components/commons/page-title";

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
      <PageTitle 
        title="Өвчний бүртгэл" 
        desc="Өвчлөлийн мэдээлэл болон эмчилгээний үр дүн" 
      />
      
      <CrudTable<DiseaseRow>
        initialData={mock}
        searchKeys={["icd10", "nameMn"]}
        columnsConfig={[
          { key: "id", title: "ID" },
          { key: "icd10", title: "ICD-10" },
          { key: "nameMn", title: "Өвчний нэр" },
          { key: "category", title: "Ангилал" },
          { key: "treatmentType", title: "Эмчлэх төрөл" },
          { key: "outcome", title: "Үр дүн" },
          { key: "date", title: "Огноо" },
        ]}
        filterDefs={[
          {
            name: "category",
            options: [
              { label: "Амьсгалын замын", value: "respiratory" },
              { label: "Зүрхний", value: "cardiac" },
            ],
          },
          {
            name: "treatmentType",
            options: [
              { label: "Амбулатори", value: "outpatient" },
              { label: "Хэвтэн эмчлэх", value: "inpatient" },
            ],
          },
          {
            name: "outcome",
            options: [
              { label: "Эдгэрсэн", value: "recovered" },
              { label: "Эмчлэгдэж байгаа", value: "treating" },
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
