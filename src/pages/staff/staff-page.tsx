import CrudTable, { CrudRow } from "@components/data-table/crud-table";

type StaffRow = CrudRow & {
  name: string;
  reg: string;
  age: number;
  gender: string;
  position: string;
  unit: string;
  phone: string;
  doctor: string;
};

const mockStaff: StaffRow[] = [
  {
    id: 1,
    name: "Бат Э.",
    reg: "УБ99112233",
    age: 34,
    gender: "M",
    position: "Ахлах эмч",
    unit: "1-р анги",
    phone: "99112233",
    doctor: "Др. Саран",
  },
];

export function StaffPage() {
  return (
    <div className="w-full space-y-4">
      <CrudTable<StaffRow>
        initialData={mockStaff}
        searchKeys={["name", "reg", "phone"]}
        filterDefs={[
          {
            name: "gender",
            options: [
              { label: "M", value: "M" },
              { label: "F", value: "F" },
            ],
          },
          { name: "unit", options: [{ label: "1-р анги", value: "1-р анги" }] },
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
