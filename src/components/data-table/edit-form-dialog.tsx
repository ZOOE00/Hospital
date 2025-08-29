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
import { Edit3, Save } from "lucide-react";
import { getEmployeesForSelect } from "@apis/services/employee";
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
  const [employeeOptions, setEmployeeOptions] = useState<{ value: string; label: string }[]>([]);

  // Load employee options when dialog opens and contains employee-select field
  useEffect(() => {
    const hasEmployeeSelect = fields.some(f => f.type === "employee-select");
    if (open && hasEmployeeSelect) {
      getEmployeesForSelect().then(setEmployeeOptions);
    }
  }, [open, fields]);

  useEffect(() => {
    if (open) form.reset((initialValues || {}) as any);
  }, [open, initialValues, form]);

  const handleSubmit = () => {
    onSubmit(form.getValues());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Edit3 className="h-4 w-4 text-blue-500" />
            </div>
            <DialogTitle className="text-xl">Бичлэг засварлах</DialogTitle>
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
            <Save className="h-4 w-4 mr-2" />
            Хадгалах
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
