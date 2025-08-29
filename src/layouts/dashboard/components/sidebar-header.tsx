import { Heart } from "lucide-react";
import Text from "@components/commons/text";
import useUserPreference from "@stores/user-preference";
import clsx from "clsx";

function SidebarHeader() {
  const { sidebarCollapsed } = useUserPreference();

  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-3 border-b border-border/50",
        sidebarCollapsed ? "justify-center px-2" : "justify-start"
      )}
    >
      <div
        className={clsx(
          "h-8 w-8 flex items-center justify-center rounded-lg bg-primary font-semibold text-primary-foreground shadow-sm",
          "transition-all duration-200 hover:scale-105"
        )}
      >
        <Heart className="h-4 w-4 text-primary-foreground" />
      </div>

      {!sidebarCollapsed && (
        <div className="flex-1 overflow-hidden">
          <Text size="lg" className="font-semibold text-foreground">
            Hospital 2025
          </Text>
          <Text size="sm" className="text-muted-foreground">
            Эрүүл мэндийн систем
          </Text>
        </div>
      )}
    </div>
  );
}

export default SidebarHeader;
