export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#5b21b6_0%,#1e1b4b_30%,#0f172a_60%,#020617_100%)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.12),transparent_35%,rgba(168,85,247,0.18)_65%,transparent)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
      <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-300/40 bg-white/10 text-xl shadow-[0_0_30px_rgba(250,204,21,0.15)]">
            ⬆
          </div>
          <div>
            <p
              className="text-2xl italic tracking-wide text-yellow-300"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Elevate
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Credit Group
            </p>
          </div>
        </div>

        <div className="hidden gap-8 text-sm text-white/80 md:flex">
          <a href="#home" className="hover:text-cyan-300">
            Home
          </a>
          <a href="#intake" className="hover:text-cyan-300">
            Get Started
          </a>
          <a href="#rights" className="hover:text-cyan-300">
            Your Rights
          </a>
        </div>

        <a
          href="#intake"
          className="rounded-full border border-cyan-300/40 bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.18)] backdrop-blur-md transition hover:scale-105 hover:bg-cyan-300 hover:text-slate-950"
        >
          Book Consultation
        </a>
      </nav>

      <section
        id="home"
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-10 text-center md:px-12"
      >
        <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
          Premium Credit Restoration • Modern Luxury Experience
        </div>

        <h1
          className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Elevate Your Credit.
          <span className="block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
            Elevate Your Life.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/75 md:text-xl">
          High-end credit repair solutions designed to help ambitious clients remove inaccurate reporting,
          rebuild confidence, and move forward with power.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#intake"
            className="rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-7 py-3 font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:scale-105"
          >
            Schedule Free Consultation
          </a>

          <a
            href="https://buy.stripe.com/fZuaEQ42E8XudPvfIOcEw01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
          >
            Pay for Service
          </a>
        </div>

        <div className="mt-14 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          {[
            "Luxury client experience",
            "Strategic dispute support",
            "Designed to build trust fast",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white/85 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.06)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="intake"
        className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-[1.05fr_0.95fr] md:px-12"
      >
        <div className="rounded-[28px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.12)]">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Client Intake
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Start your credit transformation
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Complete our secure intake form so we can review your goals and create a strategic path forward.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-6 text-white/80">
            <p className="mb-4">Click below to fill out your secure client intake form.</p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScl6XoWE3JVTY6XME7OILkYkS-OiccHRb4k4r1y3buqs2oEeA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-7 py-3 font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:scale-[1.02]"
            >
              Open Client Intake Form
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-[28px] border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
              Brand Promise
            </p>
            <h3
              className="mt-3 text-2xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Modern luxury that earns trust
            </h3>
            <p className="mt-4 text-white/75">
              We position your business with a premium experience that feels polished, confident, and worth returning to.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">
              Success Stories
            </p>
            <div className="mt-5 grid gap-4">
              {[
                "“My score increased over 100 points.”",
                "“I finally got approved after years of trying.”",
                "“Professional, fast, and worth every dollar.”",
              ].map((quote) => (
                <div
                  key={quote}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-white/80"
                >
                  {quote}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="rights"
        className="relative z-10 border-t border-white/10 bg-slate-950/40 px-6 py-16 md:px-12"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Your Rights & Compliance
          </p>
          <h2
            className="mt-4 text-3xl md:text-4xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Federal laws that protect consumers
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-lg">
              <h3 className="text-lg font-semibold text-yellow-300">FCRA</h3>
              <p className="mt-2 text-white/75">
                The Fair Credit Reporting Act gives consumers the right to dispute inaccurate,
                incomplete, or unverifiable information on credit reports.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-lg">
              <h3 className="text-lg font-semibold text-yellow-300">FDCPA</h3>
              <p className="mt-2 text-white/75">
                The Fair Debt Collection Practices Act protects consumers from abusive,
                deceptive, and unfair debt collection conduct.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-lg">
              <h3 className="text-lg font-semibold text-yellow-300">CROA</h3>
              <p className="mt-2 text-white/75">
                The Credit Repair Organizations Act requires transparency, written contracts,
                and prohibits misleading claims about credit repair services.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-lg">
              <h3 className="text-lg font-semibold text-yellow-300">Disclaimer</h3>
              <p className="mt-2 text-white/75">
                Elevate Credit Group does not guarantee specific outcomes and works within
                applicable federal and state consumer protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-8 text-center text-sm text-white/55 md:px-12">
        © 2026 Elevate Credit Group • Privacy Policy • Terms & Conditions
      </footer>
    </main>
  );
}