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
  Heading,
  Highlight,
  NumberBadge,
  Text,
  Typewriter,
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
              If you know, you know
            </span>
          </div>

          {/* Main Title - Graffiti style */}
          <Heading as="h1" variant="display" gradient glitch className="mb-8">
            LE SQUAT
          </Heading>

          {/* Tagline */}
          <div className="mb-8 text-lg md:text-xl min-h-[3.5rem] md:min-h-[2rem] flex items-center justify-center">
            <Typewriter
              sentences={[
                "the underground builders club",
                "bring code, bring beer, bring ideas",
                "location shared by word of mouth only",
                "no flyers, no linkedin, just vibes",
                "your worst idea? pitch it, we're in",
                "where side projects become the main event",
                "open bar, open source, open doors",
                "the after-party is a deploy",
                "we don't network, we just show up",
                "somewhere between a hackathon and a rave",
              ]}
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2500}
            />
          </div>

          {/* Description */}
          <Text variant="lead" muted className="mx-auto mb-12 max-w-2xl">
            An underground collective of builders. We meet, we code, we drink
            beers, we ship things nobody asked for.{" "}
            <Highlight color="secondary">The door&apos;s unlocked</Highlight>
            —just walk in.
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
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
            {"// House Rules"}
          </Heading>
          <Heading as="h3" variant="title" className="mb-12">
            The only rules of <Highlight>the squat</Highlight>
          </Heading>

          <div className="grid gap-6 md:grid-cols-2">
            <ManifestoCard
              number="01"
              title="BYOB — Bring Your Own Build"
              description="Show up with a half-baked idea and a six-pack. We'll figure out the rest. The best projects start on napkins and end at 4AM."
              icon={<SprayIcon size={24} />}
            />
            <ManifestoCard
              number="02"
              title="No Guest List"
              description="No invites needed. No cliques. You heard about us, you showed up, you're family. First round's on whoever shipped last."
              icon={<BoltIcon size={24} />}
            />
            <ManifestoCard
              number="03"
              title="Pass The Aux"
              description="Everyone gets a turn. Your stupid bot idea gets the same energy as someone's serious infra project. We don't rank, we riff."
              icon={<CodeIcon size={24} />}
            />
            <ManifestoCard
              number="04"
              title="Leave It Better"
              description="Fix a bug, share a trick, teach someone something. Take a beer from the fridge, leave one for the next person. That's the deal."
              icon={<GitHubIcon size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-zinc-800 px-6 py-24 spray-texture">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            <StatCard value="∞" label="Beers shared" />
            <StatCard value="0" label="Dress code" />
            <StatCard value="24/7" label="Doors open" highlight />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h2" variant="tag" className="mb-4">
            {"// Pull Up"}
          </Heading>
          <Heading as="h3" variant="title" className="mb-6">
            Follow the bass to the{" "}
            <span className="gradient-text glitch">source</span>
          </Heading>
          <Text variant="lead" muted className="mb-8">
            No application form. No interview. No secret handshake.
            <br />
            Just show up, grab a beer, and start building.
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
            No soundsystem was harmed <span className="text-accent">⌁</span>{" "}
            just a few kegs
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
