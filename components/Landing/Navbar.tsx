// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const router = useRouter();

//   return (
//     <nav className="backdrop-blur-md bg-white/5 border-b border-white/10">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold">IMS</div>

//         <div className="flex gap-3">
//           <Link href="/auth/login" className="text-gray-300 hover:text-white">
//             Login
//           </Link>

//           <button
//             onClick={() => router.push("/auth/register")}
//             className="px-6 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-black text-white italic group-hover:scale-110 transition-transform">
            I
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">
            IMS<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-8">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Login
          </Link>

          <button
            onClick={() => router.push("/auth/register")}
            className="relative group px-6 py-2.5"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />

            {/* The Actual Button */}
            <div className="relative bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-cyan-50 transition-all active:scale-95 shadow-xl shadow-cyan-500/10">
              Get Started
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
