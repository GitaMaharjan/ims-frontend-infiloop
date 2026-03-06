import {
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Users,
  AlertCircle,
} from "lucide-react";
import AdminDashboard from "./layout";

export default function DashboardHome() {
  return (
    <AdminDashboard>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          System Overview
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Real-time status of your organizations assets.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Items"
          value="1,284"
          icon={<Package size={20} />}
          trend="+12%"
          up
        />
        <StatCard
          title="Active Staff"
          value="24"
          icon={<Users size={20} />}
          trend="0%"
        />
        <StatCard
          title="Low Stock"
          value="9"
          icon={<AlertCircle size={20} />}
          trend="-2"
          down
          color="text-red-400"
        />
        <StatCard
          title="Total Value"
          value="$42,500"
          icon={<span className="text-xs">$</span>}
          trend="+5%"
          up
        />
      </div>

      {/* Recent Activity Table */}
      <div className="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-white font-semibold">Recent Transactions</h3>
          <button className="text-xs text-indigo-400 hover:underline">
            View All
          </button>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900/50 text-slate-500 uppercase text-[10px] tracking-widest">
            <tr>
              <th className="px-6 py-4">Item</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            <TableRow
              name="MacBook Pro M3"
              user="John Doe"
              status="Out"
              date="2 mins ago"
            />
            <TableRow
              name="Dell UltraSharp"
              user="Sarah Smith"
              status="In"
              date="1 hour ago"
            />
            <TableRow
              name="Logitech MX Master"
              user="Mike Ross"
              status="Out"
              date="3 hours ago"
            />
          </tbody>
        </table>
      </div>
    </AdminDashboard>
  );
}

function StatCard({
  title,
  value,
  icon,
  trend,
  up,
  down,
  color = "text-indigo-400",
}: any) {
  return (
    <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-2 rounded-lg bg-slate-900 border border-slate-800 ${color}`}
        >
          {icon}
        </div>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
            up
              ? "bg-green-500/10 text-green-400"
              : down
              ? "bg-red-500/10 text-red-400"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          {up && <ArrowUpRight size={10} />}
          {down && <ArrowDownRight size={10} />}
          {trend}
        </span>
      </div>
      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
        {title}
      </p>
      <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
    </div>
  );
}

function TableRow({ name, user, status, date }: any) {
  return (
    <tr className="hover:bg-slate-800/20 transition-colors">
      <td className="px-6 py-4 text-white font-medium">{name}</td>
      <td className="px-6 py-4 text-slate-400">{user}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 rounded-md text-[10px] font-bold ${
            status === "In"
              ? "bg-green-500/10 text-green-400"
              : "bg-orange-500/10 text-orange-400"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-right text-slate-500 text-xs">{date}</td>
    </tr>
  );
}
