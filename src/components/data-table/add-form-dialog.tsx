import { useEffect, useState } from "react";
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
import { Separator } from "@components/ui/separator";
import TextInput from "@components/inputs/text-input";
import SelectInput from "@components/inputs/select-input";
import { Plus } from "lucide-react";
import { getEmployeesForSelect } from "@apis/services/employee";

export type FieldDef = {
  name: string;
  label: string;
  type: "text" | "select" | "password" | "email" | "employee-select";
  options?: DataType[];
  placeholder?: string;
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
  const [employeeOptions, setEmployeeOptions] = useState<DataType[]>([]);

  // Load employee options when dialog opens and contains employee-select field
  useEffect(() => {
    const hasEmployeeSelect = fields.some(f => f.type === "employee-select");
    if (open && hasEmployeeSelect) {
      getEmployeesForSelect().then(setEmployeeOptions);
    }
  }, [open, fields]);

  useEffect(() => {
    if (open) form.reset({} as any);
  }, [open, form]);

  const handleSubmit = () => {
    onSubmit(form.getValues());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Plus className="h-4 w-4 text-primary" />
            </div>
            <DialogTitle className="text-xl">Шинэ бичлэг нэмэх</DialogTitle>
          </div>
          <Separator />
        </DialogHeader>

        <div className="max-h-[60vh] overflow-y-auto pr-4">
          <Form {...form}>
            <form className="space-y-4">
              <div className="space-y-4">
                {fields.map((f) => {
                  if (f.type === "select") {
                    return (
                      <SelectInput
                        key={f.name}
                        name={f.name}
                        placeholder={f.label}
                        data={f.options || []}
                        form={form}
                      />
                    );
                  } else if (f.type === "password") {
                    return (
                      <TextInput
                        key={f.name}
                        name={f.name}
                        label={f.label}
                        type="password"
                        form={form}
                      />
                    );
                  } else if (f.type === "email") {
                    return (
                      <TextInput
                        key={f.name}
                        name={f.name}
                        label={f.label}
                        type="email"
                        form={form}
                      />
                    );
                  } else if (f.type === "employee-select") {
                    return (
                      <SelectInput
                        key={f.name}
                        name={f.name}
                        placeholder={f.placeholder || f.label}
                        data={employeeOptions}
                        form={form}
                      />
                    );
                  } else {
                    return (
                      <TextInput
                        key={f.name}
                        name={f.name}
                        label={f.label}
                        form={form}
                      />
                    );
                  }
                })}
              </div>
            </form>
          </Form>
        </div>

        <Separator />
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Болих
          </Button>
          <Button onClick={handleSubmit} className="min-w-[100px]">
            <Plus className="h-4 w-4 mr-2" />
            Нэмэх
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
