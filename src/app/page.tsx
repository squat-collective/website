import {
  ArrowDownIcon,
  BoltIcon,
  CodeIcon,
  GitHubIcon,
  SprayIcon,
} from "@/components/icons";
import {
  ButtonLink,
  Card,
  CardContent,
  CodeText,
  Heading,
  Highlight,
  NumberBadge,
  Text,
} from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 brick-texture opacity-50" />

        {/* Spray paint splatters */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-tertiary/10 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-5xl text-center">
          {/* Tag line above */}
          <div className="mb-6 inline-block">
            <span className="bg-accent/20 text-accent px-4 py-2 font-mono text-sm uppercase tracking-widest border-l-4 border-accent">
              Est. 2024 • Builders Only
            </span>
          </div>

          {/* Main Title - Graffiti style */}
          <Heading as="h1" variant="display" gradient glitch className="mb-8">
            LE SQUAT
          </Heading>

          {/* Tagline */}
          <div className="mb-8">
            <CodeText>builders collective</CodeText>
          </div>

          {/* Description */}
          <Text variant="lead" muted className="mx-auto mb-12 max-w-2xl">
            We&apos;re a band of engineers who live and breathe problem-solving.
            Building things together—like{" "}
            <Highlight color="secondary">street artists of code</Highlight>. No
            permission needed, just ship it.
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="https://github.com/squat-collective"
              variant="primary"
              size="lg"
              external
            >
              <GitHubIcon size={20} />
              View Our Work
            </ButtonLink>
            <ButtonLink href="#manifesto" variant="secondary" size="lg">
              Read Manifesto
              <ArrowDownIcon size={16} />
            </ButtonLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <span className="font-mono text-xs uppercase tracking-widest">
              Scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section
        id="manifesto"
        className="relative border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <Heading as="h2" variant="tag" className="mb-4">
            {"// Our Manifesto"}
          </Heading>
          <Heading as="h3" variant="title" className="mb-12">
            The rules we <Highlight>break</Highlight> and{" "}
            <Highlight color="secondary">make</Highlight>
          </Heading>

          <div className="grid gap-6 md:grid-cols-2">
            <ManifestoCard
              number="01"
              title="Build First, Ask Later"
              description="We don't wait for permission. If it can be built, we build it. Ideas are worthless without execution."
              icon={<BoltIcon size={24} />}
            />
            <ManifestoCard
              number="02"
              title="Open Source Everything"
              description="Our code lives in the open. We share, we learn, we grow together. No gatekeeping allowed."
              icon={<CodeIcon size={24} />}
            />
            <ManifestoCard
              number="03"
              title="Ship or GTFO"
              description="Perfect is the enemy of shipped. Launch it, break it, fix it, repeat. Move fast and make things."
              icon={<SprayIcon size={24} />}
            />
            <ManifestoCard
              number="04"
              title="No Hierarchy, Just Hustle"
              description="Everyone codes. Everyone ships. Your commit history is your resume. Contribute or step aside."
              icon={<GitHubIcon size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-zinc-800 px-6 py-24 spray-texture">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            <StatCard value="∞" label="Problems to solve" />
            <StatCard value="0" label="Gatekeeping" />
            <StatCard value="24/7" label="Building mode" highlight />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h2" variant="tag" className="mb-4">
            {"// Join The Crew"}
          </Heading>
          <Heading as="h3" variant="title" className="mb-6">
            Ready to <span className="gradient-text">squat</span>?
          </Heading>
          <Text variant="lead" muted className="mb-8">
            Bring your ideas, your skills, or just your curiosity.
            <br />
            No applications. Just start contributing.
          </Text>
          <ButtonLink
            href="https://github.com/squat-collective"
            variant="primary"
            size="lg"
            className="bg-accent-secondary border-accent-secondary hover:text-accent-secondary"
            external
          >
            <GitHubIcon size={20} />
            Join on GitHub
          </ButtonLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
          <Text variant="mono" muted>
            © {new Date().getFullYear()} Le Squat. All rights open.
          </Text>
          <Text variant="mono" className="text-zinc-600">
            Built with <span className="text-accent">♥</span> and too much
            caffeine
          </Text>
        </div>
      </footer>
    </div>
  );
}

// Manifesto Card Component
interface ManifestoCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ManifestoCard({
  number,
  title,
  description,
  icon,
}: ManifestoCardProps) {
  return (
    <Card variant="bordered" className="group">
      <CardContent>
        <div className="flex items-start justify-between mb-4">
          <NumberBadge number={number} />
          <div className="text-zinc-600 group-hover:text-accent transition-colors">
            {icon}
          </div>
        </div>
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {title}
        </h4>
        <p className="text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  );
}

// Stats Card Component
interface StatCardProps {
  value: string;
  label: string;
  highlight?: boolean;
}

function StatCard({ value, label, highlight = false }: StatCardProps) {
  return (
    <div className="text-center group">
      <div
        className={`mb-2 text-6xl font-black transition-all group-hover:scale-110 ${
          highlight ? "text-accent neon-glow" : "text-accent-secondary"
        }`}
      >
        {value}
      </div>
      <div className="font-mono text-sm uppercase tracking-widest text-zinc-500">
        {label}
      </div>
    </div>
  );
}
