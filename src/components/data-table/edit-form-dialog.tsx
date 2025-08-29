import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog";
import TextInput from "@components/inputs/text-input";
import SelectInput from "@components/inputs/select-input";
import type { FieldDef } from "./add-form-dialog";

type Props<TForm> = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fields: FieldDef[];
  initialValues: Partial<TForm> | null;
  onSubmit: (values: Partial<TForm>) => void;
};

export default function EditFormDialog<TForm>({
  open,
  onOpenChange,
  fields,
  initialValues,
  onSubmit,
}: Props<TForm>) {
  const form = useForm<Partial<TForm>>({ defaultValues: {} as any });

  useEffect(() => {
    if (open) form.reset((initialValues || {}) as any);
  }, [open, initialValues, form]);

  const handleSubmit = () => {
    onSubmit(form.getValues());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Засварлах</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map((f) =>
              f.type === "select" ? (
                <SelectInput
                  key={f.name}
                  name={f.name}
                  placeholder={f.label}
                  data={f.options || []}
                  form={form}
                />
              ) : (
                <TextInput
                  key={f.name}
                  name={f.name}
                  label={f.label}
                  form={form}
                />
              )
            )}
          </form>
        </Form>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Болих
          </Button>
          <Button onClick={handleSubmit}>Хадгалах</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
