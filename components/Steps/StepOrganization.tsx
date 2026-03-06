// components/steps/StepOrganization.tsx
import Label from "../Register/Label";
import Input from "../Register/Input";
import { FormData } from "@/types/registerTypes";

interface Props {
  form: FormData;
  errors: Partial<FormData>;
  set: (field: keyof FormData, value: string) => void;
}

export default function StepOrganization({ form, errors, set }: Props) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white mb-5">
        Organization Details
      </h2>
      <Label>Organization Name *</Label>
      <Input
        placeholder="Acme Corp"
        value={form.name}
        onChange={(e) => set("name", e.target.value)}
        error={errors.name}
      />
      <Label>Address</Label>
      <Input
        placeholder="123 Main St, City, Country"
        value={form.address}
        onChange={(e) => set("address", e.target.value)}
        error={errors.address}
      />
    </div>
  );
}
