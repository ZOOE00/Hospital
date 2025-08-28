import {
  CircleGauge,
  Stethoscope,
  HeartPulse,
  BedDouble,
  Wrench,
  Users,
  Settings,
  HelpCircle,
  BarChart3,
} from "lucide-react";

const menus = [
  {
    name: "sidebar.dashboard",
    icon: <CircleGauge className="h-[18px] w-[18px]" />,
    route: "/dashboard",
  },
  {
    name: "sidebar.staff",
    icon: <Users className="h-[18px] w-[18px]" />,
    route: "/staff",
  },
  {
    name: "sidebar.checkups",
    icon: <Stethoscope className="h-[18px] w-[18px]" />,
    route: "/checkups",
  },
  {
    name: "sidebar.diseases",
    icon: <HeartPulse className="h-[18px] w-[18px]" />,
    route: "/diseases",
  },
  {
    name: "sidebar.hospitalizations",
    icon: <BedDouble className="h-[18px] w-[18px]" />,
    route: "/hospitalizations",
  },
  {
    name: "sidebar.equipment",
    icon: <Wrench className="h-[18px] w-[18px]" />,
    route: "/equipment",
  },
  {
    name: "sidebar.reports",
    icon: <BarChart3 className="h-[18px] w-[18px]" />,
    route: "/reports",
  },
  {
    name: "sidebar.settings",
    icon: <Settings className="h-[18px] w-[18px]" />,
    route: "/settings",
  },
  {
    name: "sidebar.help",
    icon: <HelpCircle className="h-[18px] w-[18px]" />,
    route: "/help",
  },
];

export default menus;
