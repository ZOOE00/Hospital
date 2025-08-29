import CrudTable, { CrudRow } from "@components/data-table/crud-table";
import PageTitle from "@components/commons/page-title";

type UserRow = CrudRow & { username: string; role: string; status: string };
const mockUsers: UserRow[] = [
  { id: 1, username: "admin", role: "admin", status: "active" },
];

export function UsersPage() {
  return (
    <div className="w-full space-y-4">
      <PageTitle 
        title="Хэрэглэгчид" 
        desc="Системийн хэрэглэгчдийн эрх болон мэдээлэл" 
      />
      
      <CrudTable<UserRow>
        initialData={mockUsers}
        searchKeys={["username"]}
        columnsConfig={[
          { key: "id", title: "ID" },
          { key: "username", title: "Хэрэглэгчийн нэр" },
          { key: "role", title: "Эрх" },
          { key: "status", title: "Төлөв" },
        ]}
        filterDefs={[
          { name: "role", options: [{ label: "Админ", value: "admin" }] },
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
