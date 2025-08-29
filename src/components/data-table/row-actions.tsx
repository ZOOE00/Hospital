import { Button } from "@components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@components/ui/dialog";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

export function CrudRowActions({ onEdit, onDelete }: Props) {
  return (
    <div className="flex items-center gap-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
              onClick={onEdit}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Засварлах</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Засварлах</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/40 dark:text-rose-300 dark:hover:bg-rose-900/50"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Устгах</span>
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>Устгах</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Устгах уу?</DialogTitle>
            <DialogDescription>
              Энэ үйлдлийг буцаах боломжгүй. Мөр бүр мөсөн устгагдана.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Болих</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="destructive" onClick={onDelete}>
                Устгах
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
