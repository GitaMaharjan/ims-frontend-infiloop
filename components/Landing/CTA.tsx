"use client";
import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="py-24 text-center border-t border-white/10">
      <h2 className="text-4xl font-bold mb-6">
        Start Managing Inventory Today
      </h2>

      <p className="text-lg text-gray-400 mb-10">
        Join thousands of organizations using IMS.
      </p>

      <button
        onClick={() => router.push("/auth/register")}
        className="px-10 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg"
      >
        Start Your Free Trial →
      </button>
    </section>
  );
}
