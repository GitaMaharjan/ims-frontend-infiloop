// components/steps/StepReview.tsx
import ReviewRow from "../ReviewRow";
import { FormData } from "@/types/registerTypes";

interface Props {
  form: FormData;
}

export default function StepReview({ form }: Props) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white mb-5">
        Review & Confirm
      </h2>

      <div className="mb-4">
        <p className="text-[10px] tracking-widest uppercase text-indigo-400 mb-2">
          Organization
        </p>
        <div className="bg-slate-900 rounded-xl p-4">
          <ReviewRow label="Name" value={form.name} />
          <ReviewRow label="Address" value={form.address || "—"} />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[10px] tracking-widest uppercase text-indigo-400 mb-2">
          Admin
        </p>
        <div className="bg-slate-900 rounded-xl p-4">
          <ReviewRow label="Name" value={form.contactName} />
          <ReviewRow label="Email" value={form.email} />
          <ReviewRow label="Phone" value={form.phone} />
          <ReviewRow label="Designation" value={form.designation} />
        </div>
      </div>

      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400/80 text-xs leading-relaxed">
        After submission, a system administrator will review and approve your
        organization. You will receive access upon approval.
      </div>
    </div>
  );
}
