import CrudTable, { CrudRow } from "@components/data-table/crud-table";
import PageTitle from "@components/commons/page-title";

type EmployeeRow = CrudRow & {
  employeeId: string;
  name: string;
  reg: string;
  age: number;
  gender: string;
  position: string;
  department: string;
  phone: string;
  email: string;
  hireDate: string;
  status: string;
};

const mockEmployees: EmployeeRow[] = [
  {
    id: 1,
    employeeId: "EMP001",
    name: "Бат-Эрдэнэ Д.",
    reg: "УБ99112233",
    age: 34,
    gender: "M",
    position: "Ахлах эмч",
    department: "Дотоод эмнэлэг",
    phone: "99112233",
    email: "baterdene.d@hospital.mn",
    hireDate: "2020-01-15",
    status: "active",
  },
  {
    id: 2,
    employeeId: "EMP002",
    name: "Цэцэгмаа С.",
    reg: "УБ88223344",
    age: 29,
    gender: "F",
    position: "Сувилагч",
    department: "Хагалгааны тасаг",
    phone: "88223344",
    email: "tsetsegmaa.s@hospital.mn",
    hireDate: "2021-02-10",
    status: "active",
  },
  {
    id: 3,
    employeeId: "EMP003",
    name: "Гантулга Ж.",
    reg: "УБ77334455",
    age: 41,
    gender: "M",
    position: "Эмч",
    department: "Удирдлага",
    phone: "77334455",
    email: "gantulga.j@hospital.mn",
    hireDate: "2019-03-20",
    status: "active",
  },
  {
    id: 4,
    employeeId: "EMP004",
    name: "Оюунаа Б.",
    reg: "УБ66445566",
    age: 27,
    gender: "F",
    position: "Техникч",
    department: "Лабораторийн тасаг",
    phone: "66445566",
    email: "oyunaa.b@hospital.mn",
    hireDate: "2022-03-05",
    status: "inactive",
  },
];

export function EmployeesPage() {
  return (
    <div className="w-full space-y-4">
      <PageTitle
        title="Ажилтнууд"
        desc="Эмнэлгийн ажилтнуудын хувийн мэдээлэл болон удирдлага"
      />

      <CrudTable<EmployeeRow>
        initialData={mockEmployees}
        searchKeys={["name", "employeeId", "phone", "email"]}
        columnsConfig={[
          { key: "employeeId", title: "Ажилтны код" },
          { key: "name", title: "Нэр" },
          { key: "reg", title: "Регистр" },
          { key: "position", title: "Албан тушаал" },
          { key: "department", title: "Хэлтэс" },
          { key: "phone", title: "Утас" },
          { key: "email", title: "И-мэйл" },
          { key: "status", title: "Төлөв" },
        ]}
        filterDefs={[
          {
            name: "gender",
            options: [
              { label: "Эрэгтэй", value: "M" },
              { label: "Эмэгтэй", value: "F" },
            ],
          },
          {
            name: "department",
            options: [
              { label: "Дотоод эмнэлэг", value: "Дотоод эмнэлэг" },
              { label: "Хагалгааны тасаг", value: "Хагалгааны тасаг" },
              { label: "Удирдлага", value: "Удирдлага" },
              { label: "Лабораторийн тасаг", value: "Лабораторийн тасаг" },
            ],
          },
          {
            name: "position",
            options: [
              { label: "Ахлах эмч", value: "Ахлах эмч" },
              { label: "Эмч", value: "Эмч" },
              { label: "Сувилагч", value: "Сувилагч" },
              { label: "Техникч", value: "Техникч" },
            ],
          },
          {
            name: "status",
            options: [
              { label: "Идэвхтэй", value: "active" },
              { label: "Идэвхгүй", value: "inactive" },
            ],
          },
        ]}
        onAdd={() => {
          /* open create employee modal */
        }}
        onEdit={() => {
          /* open edit employee modal */
        }}
        onDelete={() => {
          /* confirm delete employee */
        }}
      />
    </div>
  );
}
