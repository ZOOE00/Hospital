import CrudTable, { CrudRow } from "@components/data-table/crud-table";
import PageTitle from "@components/commons/page-title";

type UserRow = CrudRow & {
  username: string;
  email: string;
  role: string;
  status: string;
  employeeId: string;
  employeeName: string;
  department: string;
  lastLogin: string;
  createdAt: string;
};

const mockUsers: UserRow[] = [
  {
    id: 1,
    username: "baterdene.d",
    email: "baterdene.d@hospital.mn",
    role: "doctor",
    status: "active",
    employeeId: "EMP001",
    employeeName: "Бат-Эрдэнэ Д.",
    department: "Дотоод эмнэлэг",
    lastLogin: "2025-08-29 09:30",
    createdAt: "2025-01-15",
  },
  {
    id: 2,
    username: "tsetsegmaa.s",
    email: "tsetsegmaa.s@hospital.mn",
    role: "nurse",
    status: "active",
    employeeId: "EMP002",
    employeeName: "Цэцэгмаа С.",
    department: "Хагалгааны тасаг",
    lastLogin: "2025-08-29 08:15",
    createdAt: "2025-02-10",
  },
  {
    id: 3,
    username: "gantulga.j",
    email: "gantulga.j@hospital.mn",
    role: "admin",
    status: "active",
    employeeId: "EMP003",
    employeeName: "Гантулга Ж.",
    department: "Удирдлага",
    lastLogin: "2025-08-28 17:45",
    createdAt: "2025-01-01",
  },
  {
    id: 4,
    username: "oyunaa.b",
    email: "oyunaa.b@hospital.mn",
    role: "technician",
    status: "inactive",
    employeeId: "EMP004",
    employeeName: "Оюунаа Б.",
    department: "Лабораторийн тасаг",
    lastLogin: "2025-08-20 14:20",
    createdAt: "2025-03-05",
  },
];

export function StaffPage() {
  return (
    <div className="w-full space-y-4">
      <PageTitle
        title="Хэрэглэгчид"
        desc="Системийн хэрэглэгчдийн эрх болон ажилтанд холбогдсон мэдээлэл"
      />

      <CrudTable<UserRow>
        initialData={mockUsers}
        searchKeys={["username", "email", "employeeName"]}
        columnsConfig={[
          { key: "id", title: "ID" },
          { key: "username", title: "Хэрэглэгчийн нэр" },
          { key: "email", title: "И-мэйл" },
          { key: "role", title: "Эрх" },
          { key: "status", title: "Төлөв" },
          { key: "employeeName", title: "Ажилтны нэр" },
          { key: "department", title: "Хэлтэс" },
          { key: "lastLogin", title: "Сүүлд нэвтэрсэн" },
        ]}
        filterDefs={[
          {
            name: "role",
            options: [
              { label: "Эмч", value: "doctor" },
              { label: "Сувилагч", value: "nurse" },
              { label: "Админ", value: "admin" },
              { label: "Техникч", value: "technician" },
            ],
          },
          {
            name: "status",
            options: [
              { label: "Идэвхтэй", value: "active" },
              { label: "Идэвхгүй", value: "inactive" },
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
        ]}
        onAdd={() => {
          /* open create user modal with employee selection */
        }}
        onEdit={() => {
          /* open edit user modal */
        }}
        onDelete={() => {
          /* confirm delete user */
        }}
      />
    </div>
  );
}
