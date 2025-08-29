import SidebarItem from "./sidebar-item";
import menus from "@configs/menus";
import SidebarHeader from "./sidebar-header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useUserPreference from "@stores/user-preference";
import clsx from "clsx";

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebar } = useUserPreference();

  return (
    <>
      <aside
        className={clsx(
          "transition-all duration-300 ease-in-out overflow-hidden fixed inset-y-0 left-0 z-50 flex flex-col border-r bg-background shadow-lg",
          "hidden sm:flex", // Hide on mobile, show on desktop
          sidebarCollapsed ? "w-[60px]" : "w-[250px]"
        )}
      >
        <div className="flex h-full flex-col">
          <SidebarHeader />

          <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
            {menus.map((m) => (
              <SidebarItem
                key={m.route}
                icon={m.icon}
                name={m.name}
                route={m.route}
                collapsible={!sidebarCollapsed}
              />
            ))}
          </nav>
        </div>
      </aside>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={clsx(
          "transition-all duration-300 ease-in-out fixed z-50 top-1/2 -translate-y-1/2",
          "h-6 w-6 cursor-pointer bg-primary hover:bg-primary/90",
          "hidden sm:flex items-center justify-center rounded-full text-primary-foreground",
          "shadow-md border border-border/50",
          sidebarCollapsed ? "left-[48px]" : "left-[238px]"
        )}
        aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {sidebarCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
    </>
  );
}
