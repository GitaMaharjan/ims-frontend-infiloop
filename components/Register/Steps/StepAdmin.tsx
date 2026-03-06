// components/steps/StepAdmin.tsx
import Label from "../Label";
import Input from "../Input";
import { FormData } from "@/types/registerTypes";

interface Props {
  form: FormData;
  errors: Partial<FormData>;
  set: (field: keyof FormData, value: string) => void;
}

export default function StepAdmin({ form, errors, set }: Props) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white mb-5">
        Admin (Contact Person) Details
      </h2>
      <Label>Full Name *</Label>
      <Input
        placeholder="Jane Smith"
        value={form.contactName}
        onChange={(e) => set("contactName", e.target.value)}
        error={errors.contactName}
      />
      <Label>Email *</Label>
      <Input
        type="email"
        placeholder="jane@acmecorp.com"
        value={form.email}
        onChange={(e) => set("email", e.target.value)}
        error={errors.email}
      />
      <Label>Phone *</Label>
      <Input
        placeholder="+977 98XXXXXXXX"
        value={form.phone}
        onChange={(e) => set("phone", e.target.value)}
        error={errors.phone}
      />
      <Label>Designation *</Label>
      <Input
        placeholder="Operations Manager"
        value={form.designation}
        onChange={(e) => set("designation", e.target.value)}
        error={errors.designation}
      />
    </div>
  );
}
