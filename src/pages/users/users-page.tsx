import CrudTable, { CrudRow } from "@components/data-table/crud-table";

type UserRow = CrudRow & { username: string; role: string; status: string };
const mockUsers: UserRow[] = [
  { id: 1, username: "admin", role: "admin", status: "active" },
];

export function UsersPage() {
  return (
    <div className="w-full space-y-4">
      <CrudTable<UserRow>
        initialData={mockUsers}
        searchKeys={["username"]}
        filterDefs={[
          { name: "role", options: [{ label: "Admin", value: "admin" }] },
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
