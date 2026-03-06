// components/Login/RolePill.tsx
import { UserRole } from "@/types/loginTypes";

export default function RolePill({
  role,
  active,
  onClick,
}: {
  role: UserRole;
  active: boolean;
  onClick: () => void;
}) {
  const labels: Record<UserRole, string> = {
    ORG_ADMIN: "Org Admin",
    STAFF: "Staff",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-2 text-xs font-semibold tracking-widest uppercase rounded-lg transition-all duration-200 ${
        active
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
          : "bg-slate-900 text-slate-500 hover:text-slate-300"
      }`}
    >
      {labels[role]}
    </button>
  );
}
