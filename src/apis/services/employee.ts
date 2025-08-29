// Employee API service functions
export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  phone: string;
  email: string;
  hireDate: string;
  status: "active" | "inactive";
}

// Mock employee data - in real implementation, this would fetch from backend
export const mockEmployees: Employee[] = [
  {
    id: "EMP001",
    firstName: "Бат-Эрдэнэ",
    lastName: "Д.",
    position: "Эмч",
    department: "Кардиологи",
    phone: "99123456",
    email: "baterdene@hospital.mn",
    hireDate: "2020-01-15",
    status: "active"
  },
  {
    id: "EMP002", 
    firstName: "Цэцэгмаа",
    lastName: "С.",
    position: "Сувилагч",
    department: "Хүүхдийн тасаг",
    phone: "99234567",
    email: "tsetsegmaa@hospital.mn",
    hireDate: "2019-06-10",
    status: "active"
  },
  {
    id: "EMP003",
    firstName: "Гантулга", 
    lastName: "Ж.",
    position: "Рентген техникч",
    department: "Оношилгоо",
    phone: "99345678",
    email: "gantulga@hospital.mn",
    hireDate: "2021-03-20",
    status: "active"
  },
  {
    id: "EMP004",
    firstName: "Оюунаа",
    lastName: "Б.",
    position: "Эмч",
    department: "Гадаад эмнэлэг",
    phone: "99456789", 
    email: "oyunaa@hospital.mn",
    hireDate: "2018-09-05",
    status: "active"
  }
];

// Function to get all employees (mock)
export const getAllEmployees = async (): Promise<Employee[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockEmployees;
};

// Function to get employee by ID (mock)
export const getEmployeeById = async (id: string): Promise<Employee | null> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockEmployees.find(emp => emp.id === id) || null;
};

// Function to format employee for dropdown selection
export const formatEmployeeForSelect = (employee: Employee) => ({
  value: employee.id,
  label: `${employee.id} - ${employee.firstName} ${employee.lastName}`
});

// Function to get employees formatted for select dropdown
export const getEmployeesForSelect = async () => {
  const employees = await getAllEmployees();
  return employees
    .filter(emp => emp.status === "active")
    .map(formatEmployeeForSelect);
};
