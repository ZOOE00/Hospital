import AuthLayout from "@layouts/auth/auth-layout";
import { DashboardLayout } from "@layouts/dashboard/dashboard-layout";
import RootLayout from "@layouts/root/root-layout";
import { Dashboard, Login } from "@pages/index";
// New module pages (import directly)
import { StaffPage } from "@pages/staff/staff-page";
import { EmployeesPage } from "@pages/staff/employees-page";
import { CheckupsPage } from "@pages/checkups/checkups-page";
import { DiseasesPage } from "@pages/diseases/diseases-page";
import { HospitalizationsPage } from "@pages/hospitalizations/hospitalizations-page";
import { EquipmentPage } from "@pages/equipment/equipment-page";
import { ReportsPage } from "@pages/reports/reports-page";
import { UsersPage } from "@pages/users/users-page";
import { SettingsPage } from "@pages/settings/settings-page";
import { HelpPage } from "@pages/help/help-page";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: "staff",
            element: <StaffPage />,
          },
          {
            path: "employees",
            element: <EmployeesPage />,
          },
          {
            path: "checkups",
            element: <CheckupsPage />,
          },
          {
            path: "diseases",
            element: <DiseasesPage />,
          },
          {
            path: "hospitalizations",
            element: <HospitalizationsPage />,
          },
          {
            path: "equipment",
            element: <EquipmentPage />,
          },
          {
            path: "reports",
            element: <ReportsPage />,
          },
          {
            path: "users",
            element: <UsersPage />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
          {
            path: "help",
            element: <HelpPage />,
          },
          {
            index: true,
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <div>Page not found</div>,
  },
]);
