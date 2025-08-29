import {
  CircleGauge,
  Stethoscope,
  HeartPulse,
  BedDouble,
  Wrench,
  Users,
  UserCheck,
  Settings,
  HelpCircle,
  BarChart3,
} from "lucide-react";

const menus = [
  {
    name: "Хянах самбар",
    icon: <CircleGauge className="h-[18px] w-[18px]" />,
    route: "/dashboard",
  },
  {
    name: "Хэрэглэгчид",
    icon: <Users className="h-[18px] w-[18px]" />,
    route: "/staff",
  },
  {
    name: "Ажилтнууд",
    icon: <UserCheck className="h-[18px] w-[18px]" />,
    route: "/employees",
  },
  {
    name: "Урьдчилан сэргийлэх",
    icon: <Stethoscope className="h-[18px] w-[18px]" />,
    route: "/checkups",
  },
  {
    name: "Өвчний бүртгэл",
    icon: <HeartPulse className="h-[18px] w-[18px]" />,
    route: "/diseases",
  },
  {
    name: "Хэвтэн эмчилгээ",
    icon: <BedDouble className="h-[18px] w-[18px]" />,
    route: "/hospitalizations",
  },
  {
    name: "Тоног төхөөрөмж",
    icon: <Wrench className="h-[18px] w-[18px]" />,
    route: "/equipment",
  },
  {
    name: "Тайлан",
    icon: <BarChart3 className="h-[18px] w-[18px]" />,
    route: "/reports",
  },
  {
    name: "Тохиргоо",
    icon: <Settings className="h-[18px] w-[18px]" />,
    route: "/settings",
  },
  {
    name: "Тусламж",
    icon: <HelpCircle className="h-[18px] w-[18px]" />,
    route: "/help",
  },
];

export default menus;
