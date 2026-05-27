export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Know Before You Breach a Contract
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track project milestones against contract deadlines, calculate risk scores using progress velocity, and get visual alerts before it&apos;s too late.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $14/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>

        {/* Risk score preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4">Live Risk Dashboard Preview</p>
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              { label: 'Milestones On Track', value: '4 / 7', color: 'text-[#3fb950]' },
              { label: 'Days Remaining', value: '12', color: 'text-[#f0883e]' },
              { label: 'Breach Risk Score', value: '74%', color: 'text-[#f85149]' }
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0d1117] rounded-lg p-4 text-center">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-[#8b949e] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="w-full bg-[#21262d] rounded-full h-3">
            <div className="bg-[#f85149] h-3 rounded-full" style={{width: '74%'}}></div>
          </div>
          <p className="text-xs text-[#f85149] mt-2 font-semibold">High Risk — Immediate action recommended</p>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '📊', title: 'Velocity Tracking', desc: 'Measures actual progress speed vs required pace to hit each milestone.' },
            { icon: '🔔', title: 'Breach Alerts', desc: 'Get notified when risk crosses thresholds before deadlines are missed.' },
            { icon: '📄', title: 'Contract Mapping', desc: 'Map deliverables directly to contract clauses for clear accountability.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited projects & milestones',
              'Real-time risk score calculation',
              'Email breach alerts',
              'Contract clause mapping',
              'Progress velocity analytics',
              'Export reports as PDF'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How is the breach risk score calculated?',
              a: 'We analyze your completed milestones, remaining deliverables, days left, and historical velocity to produce a 0–100% risk score. Higher scores mean higher likelihood of missing a deadline.'
            },
            {
              q: 'Can I track multiple contracts at once?',
              a: 'Yes. Your Pro subscription includes unlimited projects and contracts, each with their own milestone timelines and risk dashboards.'
            },
            {
              q: 'What happens if I cancel my subscription?',
              a: 'You keep access until the end of your billing period. After that, your data is retained for 30 days so you can export it before it is removed.'
            }
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Contract Deadline Risk Calculator. All rights reserved.
      </footer>
    </main>
  )
}
