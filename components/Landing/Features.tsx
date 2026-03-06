export default function Features() {
  return (
    <div id="features" className="max-w-6xl mx-auto mb-32 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <Feature
          icon="📦"
          title="Real-Time Tracking"
          desc="Monitor inventory levels across all locations."
        />

        <Feature
          icon="👥"
          title="Multi-Tenant Ready"
          desc="Role based access for multiple organizations."
        />

        <Feature
          icon="🔒"
          title="Enterprise Security"
          desc="Advanced access control and secure data."
        />

        <Feature
          icon="⚡"
          title="Smart Automation"
          desc="Reduce manual work with automated workflows."
        />

        <Feature
          icon="📊"
          title="Analytics"
          desc="Detailed reports and insights."
        />

        <Feature
          icon="🔄"
          title="Integrations"
          desc="Connect easily with other systems."
        />
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-cyan-600/50">
      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
