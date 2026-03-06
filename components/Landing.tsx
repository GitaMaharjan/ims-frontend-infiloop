"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background blur elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>

      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 relative z-50 animate-slideDown">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div
            style={{ fontSize: "24px", fontWeight: "bold" }}
            className="animate-fadeIn"
          >
            IMS
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="...">
              Login
            </Link>

            <button
              onClick={() => router.push("/auth/register")}
              className="px-6 py-2 backdrop-blur-md bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-300 font-medium shadow-lg shadow-cyan-600/40 transform hover:scale-105 active:scale-95 animate-fadeIn"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center mb-20 animate-fadeIn">
          <div className="mb-6 inline-block">
            <span className="text-sm font-semibold text-cyan-400 bg-cyan-600/10 px-4 py-2 rounded-full border border-cyan-600/30">
              Enterprise Inventory Solution
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Manage Inventory
            <br />
            Like Never Before
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            A powerful, multi-tenant inventory management platform built for
            modern businesses. Scale effortlessly with real-time tracking and
            intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/auth/register")}
              className="px-8 py-4 backdrop-blur-md bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-300 font-semibold text-lg shadow-lg shadow-cyan-600/40 transform hover:scale-105 active:scale-95 hover:shadow-xl"
            >
              Get Started Free
            </button>
            <a
              href="#features"
              className="px-8 py-4 backdrop-blur-md bg-white/5 border border-white/20 text-white rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-semibold text-lg transform hover:scale-105 active:scale-95"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-32 mt-24">
          <div className="text-center animate-slideUp">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
            <p className="text-gray-400">Organizations Worldwide</p>
          </div>
          <div
            className="text-center animate-slideUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <p className="text-gray-400">Uptime Guarantee</p>
          </div>
          <div
            className="text-center animate-slideUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <p className="text-gray-400">Premium Support</p>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeIn">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-xl hover:border-cyan-600/50 transition-all duration-300 hover:bg-white/10 animate-slideUp hover:shadow-lg hover:shadow-cyan-600/20 transform hover:scale-105 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📦
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Tracking</h3>
              <p className="text-gray-400">
                Monitor inventory levels across all locations with live updates
                and instant notifications.
              </p>
            </div>

            <div
              className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-xl hover:border-cyan-600/50 transition-all duration-300 hover:bg-white/10 animate-slideUp hover:shadow-lg hover:shadow-cyan-600/20 transform hover:scale-105 group"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Tenant Ready</h3>
              <p className="text-gray-400">
                Complete data isolation with role-based access for multiple
                organizations and teams.
              </p>
            </div>

            <div
              className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-xl hover:border-cyan-600/50 transition-all duration-300 hover:bg-white/10 animate-slideUp hover:shadow-lg hover:shadow-cyan-600/20 transform hover:scale-105 group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🔒
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-400">
                Bank-level encryption, compliance certifications, and advanced
                access controls.
              </p>
            </div>

            <div
              className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-xl hover:border-cyan-600/50 transition-all duration-300 hover:bg-white/10 animate-slideUp hover:shadow-lg hover:shadow-cyan-600/20 transform hover:scale-105 group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Automation</h3>
              <p className="text-gray-400">
                Automated workflows reduce manual tasks and minimize human
                errors significantly.
              </p>
            </div>

            <div
              className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-xl hover:border-cyan-600/50 transition-all duration-300 hover:bg-white/10 animate-slideUp hover:shadow-lg hover:shadow-cyan-600/20 transform hover:scale-105 group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-gray-400">
                Comprehensive reports and insights to make data-driven business
                decisions.
              </p>
            </div>

            <div
              className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-xl hover:border-cyan-600/50 transition-all duration-300 hover:bg-white/10 animate-slideUp hover:shadow-lg hover:shadow-cyan-600/20 transform hover:scale-105 group"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🔄
              </div>
              <h3 className="text-xl font-bold mb-3">Integrations</h3>
              <p className="text-gray-400">
                Seamless integration with your existing tools and systems via
                APIs.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-600/30 rounded-xl p-12 text-center mb-32 animate-slideUp">
          <p className="text-xl text-gray-300 mb-4 italic">
            IMS has transformed how we manage inventory. Its intuitive,
            reliable, and saved us hours every week
          </p>
          <p className="text-cyan-400 font-semibold">
            — Sarah Johnson, Operations Director
          </p>
          <p className="text-gray-500">TechCorp Industries</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center relative z-10 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-4 animate-slideUp">
          <h2 className="text-4xl font-bold mb-6">
            Start Managing Inventory Smarter Today
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Join 1000+ organizations that have transformed their inventory
            operations. Get started free—no credit card required.
          </p>
          <button
            onClick={() => router.push("/auth/register")}
            className="px-10 py-4 bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 font-semibold text-lg rounded-lg shadow-lg shadow-cyan-600/40 text-white transform hover:scale-105 active:scale-95 hover:shadow-xl"
          >
            Start Your Free Trial →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 relative z-10 backdrop-blur-md bg-slate-950/40">
        <p>&copy; 2024 Inventory Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}
