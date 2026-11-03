// components/AboutSection.tsx
import Image from "next/image";
import { Brain, Eye } from "lucide-react";

const techLeft = ["Python", "React.js", "JavaScript (ES6+)", "Java", "Git / GitHub"];
const techRight = ["TypeScript", "Next.js / Node.js", "PostgreSQL", "Docker", "AWS"];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
        {/* LEFT */}
        <div className="lg:pr-6">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Profile image */}
            <div className="relative h-40 w-40 sm:h-44 sm:w-44 lg:h-56 lg:w-56">
              <Image
                src="/aparna-lifestyle.jpeg"
                alt="Aparna Sobhirala"
                fill
                className="rounded-full object-cover ring-1 ring-[rgb(var(--border))]"
                priority
              />
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Aparna Sobhirala
            </h2>

            <p className="mt-3 max-w-xl text-[15px] sm:text-base lg:text-lg leading-7 text-[rgb(var(--muted))]">
              Software Engineer
            </p>

            {/* Interests (replaces tech stack chips) */}
            <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start lg:max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                  <span className="font-mono text-[rgb(var(--fg))] opacity-80">⌘</span>
                  Programming
                </span>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <Brain className="h-4 w-4 text-[rgb(var(--fg))] opacity-80" />
                Machine Learning
              </span>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <Eye className="h-4 w-4 text-[rgb(var(--fg))] opacity-80" />
                Computer Vision
              </span>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-[rgb(var(--fg))] opacity-80">⚙</span>
                CI/CD
              </span>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-[rgb(var(--fg))] opacity-80">✦</span>
                UX / UI
              </span>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start text-sm text-[rgb(var(--muted))]">
              {['Reading', 'Coffee', 'Robotics'].map((interest) => (
                <span key={interest} className="rounded-xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] px-3 py-2">{interest}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:pl-4">
          {/* Header */}
          <div className="flex items-center gap-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              <span className="font-mono text-[rgb(var(--muted))]">/</span> about me
            </h3>
            <div className="h-px flex-1 bg-[rgb(var(--border))]" />
          </div>

          {/* Content */}
          <div className="mt-6 space-y-6">
            <p className="text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              Hi, Aparna here! I’m a <span className="text-[rgb(var(--fg))] font-semibold">Software Engineer</span> who enjoys turning real problems into useful software. I work across backend automation, full-stack applications, and AI evaluation — from talking with users to shipping a solution and measuring how well it works.
            </p>
            <p className="text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              I graduated from the <span className="text-[rgb(var(--fg))] font-semibold">University of Texas at Arlington</span> with a B.S. in Computer Science in May 2026. At <span className="text-[rgb(var(--fg))] font-semibold">PlayStation</span>, I built production release automation. As an ACM research fellow, I studied gender bias in language models and built reproducible evaluation pipelines.
            </p>
            <p className="text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              Outside engineering, I love reading. I’ve also worked in Montessori schools and as a part-time barista — experiences that strengthened my patience, communication, and love of working with people.
            </p>

            <p className="pt-2 text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              Here are some of the technologies I’ve been working with:
            </p>

            {/* Tech list */}
            <div className="mt-2 grid gap-6 sm:grid-cols-2">
              <TechList items={techLeft} />
              <TechList items={techRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-[rgb(var(--muted))]">
          <span className="font-mono text-[rgb(var(--fg))] opacity-70">▸</span>
          <span className="text-[15px] sm:text-base lg:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  );
}
