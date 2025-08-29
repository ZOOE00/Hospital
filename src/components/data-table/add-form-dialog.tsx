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

export type FieldDef = {
  name: string;
  label: string;
  type: "text" | "select";
  options?: DataType[];
};

type Props<TForm> = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fields: FieldDef[];
  onSubmit: (values: Partial<TForm>) => void;
};

export default function AddFormDialog<TForm>({
  open,
  onOpenChange,
  fields,
  onSubmit,
}: Props<TForm>) {
  const form = useForm<Partial<TForm>>({ defaultValues: {} as any });

  useEffect(() => {
    if (open) form.reset({} as any);
  }, [open, form]);

  const handleSubmit = () => {
    onSubmit(form.getValues());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Нэмэх</DialogTitle>
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
          <Button onClick={handleSubmit}>Нэмэх</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
