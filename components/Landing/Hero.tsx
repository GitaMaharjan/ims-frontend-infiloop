"use client";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="max-w-6xl mx-auto px-4 py-32 text-center">
      <span className="text-sm font-semibold text-cyan-400 bg-cyan-600/10 px-4 py-2 rounded-full border border-cyan-600/30">
        Enterprise Inventory Solution
      </span>

      <h1 className="text-6xl font-bold mt-6 mb-6">
        Manage Inventory
        <br />
        Like Never Before
      </h1>

      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
        A powerful multi-tenant inventory management system built for modern
        businesses.
      </p>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => router.push("/auth/register")}
          className="px-8 py-4 bg-cyan-600 rounded-lg hover:bg-cyan-700"
        >
          Get Started Free
        </button>

        <a
          href="#features"
          className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/10"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
