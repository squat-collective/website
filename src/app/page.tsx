export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,62,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,62,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-4xl text-center">
          {/* Logo/Title */}
          <h1 className="glitch mb-6 text-7xl font-black tracking-tighter md:text-9xl">
            <span className="gradient-text">LE SQUAT</span>
          </h1>

          {/* Tagline */}
          <p className="mb-8 font-mono text-xl text-zinc-400 md:text-2xl">
            <span className="text-[#ff3e00]">&gt;</span> builders collective
            <span className="animate-pulse">_</span>
          </p>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-zinc-300">
            A band of engineers who live and breathe problem-solving. We build
            things together or on our own—like{" "}
            <span className="text-[#00ff88]">street artists of code</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/squat-collective"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-none border-2 border-[#ff3e00] bg-[#ff3e00] px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-[#ff3e00]"
            >
              <GitHubIcon className="h-5 w-5" />
              View Projects
            </a>
            <a
              href="#manifesto"
              className="group flex items-center gap-2 rounded-none border-2 border-zinc-700 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-zinc-300 transition-all hover:border-[#00ff88] hover:text-[#00ff88]"
            >
              Read Manifesto
              <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-5 rounded-full border-2 border-zinc-600">
            <div className="mx-auto mt-2 h-2 w-1 animate-pulse rounded-full bg-[#ff3e00]" />
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section
        id="manifesto"
        className="relative border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 font-mono text-sm uppercase tracking-widest text-[#ff3e00]">
            {"// Our Manifesto"}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <ManifestoCard
              number="01"
              title="Build First"
              description="We don't talk about building—we build. Ideas are cheap, execution is everything."
            />
            <ManifestoCard
              number="02"
              title="Open by Default"
              description="Our code lives in the open. We learn from each other and share with everyone."
            />
            <ManifestoCard
              number="03"
              title="No Gatekeeping"
              description="If you want to build, you're in. Experience is earned, not required."
            />
            <ManifestoCard
              number="04"
              title="Ship & Iterate"
              description="Perfect is the enemy of done. Ship it, learn from it, make it better."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          <StatCard value="∞" label="Problems to solve" />
          <StatCard value="0" label="Gatekeeping" />
          <StatCard value="24/7" label="Building mode" />
        </div>
      </section>

      {/* Join Section */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to <span className="gradient-text">squat</span>?
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Join the collective. Bring your ideas, your skills, or just your
            curiosity.
          </p>
          <a
            href="https://github.com/squat-collective"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-none border-2 border-[#00ff88] bg-[#00ff88] px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-[#00ff88]"
          >
            <GitHubIcon className="h-5 w-5" />
            Join on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Le Squat. All rights open.
          </p>
          <p className="font-mono text-sm text-zinc-600">
            Built with <span className="text-[#ff3e00]">♥</span> and caffeine
          </p>
        </div>
      </footer>
    </div>
  );
}

function ManifestoCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group border border-zinc-800 p-6 transition-all hover:border-[#ff3e00]">
      <span className="font-mono text-sm text-[#ff3e00]">{number}</span>
      <h3 className="mb-2 mt-4 text-xl font-bold">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="mb-2 text-5xl font-black text-[#00ff88]">{value}</div>
      <div className="font-mono text-sm uppercase tracking-wider text-zinc-500">
        {label}
      </div>
    </div>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      aria-label="GitHub"
    >
      <title>GitHub</title>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      role="img"
      aria-label="Arrow down"
    >
      <title>Arrow down</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}
