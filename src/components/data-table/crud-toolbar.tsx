import Between from "@components/commons/between";
import TextInput from "@components/inputs/text-input";
import SelectInput from "@components/inputs/select-input";
import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import { Plus } from "lucide-react";
import clsx from "clsx";

type FilterConfig = {
  name: string;
  placeholder?: string;
  options: DataType[];
  className?: string;
};

interface Props {
  form: any;
  onAdd: () => void;
  searchPlaceholder?: string;
  filters?: FilterConfig[];
}

function CrudToolbar({ form, onAdd, searchPlaceholder = "Search...", filters = [] }: Props) {
  return (
    <Between className="items-end">
      <Form {...form}>
        <form className={clsx("flex flex-col sm:flex-row gap-4 w-full sm:w-auto")}> 
          <TextInput placeholder={searchPlaceholder} name="search" form={form} />

          {filters.map((f) => (
            <SelectInput
              key={f.name}
              placeholder={f.placeholder}
              name={f.name}
              data={f.options}
              className={clsx("min-w-[200px]", f.className)}
              form={form}
            />
          ))}
        </form>
      </Form>

      <div className="flex gap-2">
        <Button onClick={onAdd}>
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>
    </Between>
  );
}

export default CrudToolbar;
