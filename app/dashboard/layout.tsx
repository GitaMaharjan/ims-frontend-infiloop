"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  Users,
  History,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

export default function AdminDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#080b12] text-slate-300 font-mono flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-950/50 backdrop-blur-md hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <Link
            href="/dashboard"
            className="text-white font-bold text-xl tracking-tighter"
          >
            IMS <span className="text-indigo-500">.</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            label="Overview"
            active
          />
          <SidebarItem icon={<Package size={18} />} label="Inventory" />
          <SidebarItem icon={<Users size={18} />} label="Staff Management" />
          <SidebarItem icon={<History size={18} />} label="Audit Logs" />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
          <button className="w-full mt-2 flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        {/* Grid Background */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-950/30 backdrop-blur-sm flex items-center justify-between px-8 relative z-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Admin Console
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              AD
            </div>
          </div>
        </header>

        {/* Content Area */}
        <section className="p-8 relative z-10">{children}</section>
      </main>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all ${
        active
          ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
          : "hover:bg-slate-800/50 text-slate-400 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
