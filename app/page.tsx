// app/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Link from "next/link";

type Project = {
  title: string;
  meta: string;
  desc: string;
  longDesc: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "worldMap",
    meta: "2026",
    desc: "Personalized travel share links with interactive map visualization",
    longDesc:
      "A full-stack application that lets you create personalized share links showcasing all the places you've visited. Interactive map visualization powered by Mapbox displays your travel locations, while PostgreSQL stores your travel data securely. Upload and manage travel memories with AWS S3 bucket integration.",
    tags: ["Next.js", "TypeScript", "Mapbox", "PostgreSQL", "AWS S3"],
  },
  {
    title: "Sports Injury Insight & Prevention",
    meta: "2025",
    desc: "A full-stack injury-prevention platform",
    longDesc:
      "Built a full-stack web platform that analyzes soccer injury patterns to support ACL/MCL tear prevention, using Next.js, Node.js, Express, and PostgreSQL. The platform applies predictive analytics with TensorFlow.js and OpenCV to evaluate over 500 annotated movement samples, identify high-risk motions, and recommend targeted warm-ups and training drills to help reduce injury risk.",
    tags: ["Next.js", "Node", "Postgres", "OpenCV"],
  },
  {
    title: "RoboRooks",
    meta: "Senior Design Capstone",
    desc: "An autonomous chess-playing robot",
    longDesc:
      "Built with a five-person team, RoboRooks combines computer vision, chess logic, and a robotic arm to play against a human on a physical board. I contributed to OpenCV board-state detection, Stockfish integration over UCI, ROS message passing, and the React Native mobile client. I also helped define the ROS topic interface so the team could develop subsystems independently. We demonstrated the system at Senior Design Demo Day, where visitors played full games against the robot.",
    tags: ["Python", "ROS", "OpenCV", "Stockfish", "React Native"],
  },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* About */}
        <AboutSection />

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Experience */}
        <section id="experience">
          <h2 className="text-xl font-semibold">Experience</h2>

          <div className="mt-6 space-y-5">
            <ExperienceCard
              role="Software Engineering Intern"
              org="Sony Interactive Entertainment / PlayStation"
              date="May — Aug 2025"
              bullets={[
                "Designed and shipped a webhook-driven Python service that combined change history across four repositories with Jira records and delivered release documentation in Slack.",
                "Integrated the OpenAI API where human-authored records were missing, validated output against historical production data, and reduced manual effort by roughly 95%, saving an estimated 10–15 engineering hours monthly.",
                "Monitored the service after launch, investigated production issues, and documented it for other engineers. Worked with Jenkins, Docker, Kubernetes, and AWS Secrets Manager.",
              ]}
              tags={["Python", "OpenAI API", "Jira", "Slack", "CI/CD"]}
            />
            <ExperienceCard
              role="Research Engineering Fellow"
              org="ACM, UT Arlington"
              date="Jan — Apr 2025"
              bullets={[
                "Built a reproducible Python evaluation pipeline to investigate gender bias in machine translation across seven language models and 4,900 outputs.",
                "Developed a Pronoun Bias Index to compare results across model families and presented findings to 130+ attendees at the UTA STEM Symposium.",
              ]}
              tags={["Python", "LLM Evaluation", "Bias Analysis", "Research"]}
            />
            <ExperienceCard
              role="Corporate Officer & Sponsorship Lead"
              org="HackUTA"
              date="Jan — Oct 2025"
              bullets={[
                "Led a 15-member team and managed sponsorship outreach for a 500+ participant hackathon, pitching 10+ technology companies and securing $15,000+ in sponsorship.",
              ]}
              tags={["Leadership", "Partnerships", "Community"]}
            />
          </div>
        </section>

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Projects */}
        <section id="projects">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">Projects</h2>

            {/* View all -> navigate to projects page */}
            <Link
              href="/projects"
              className="text-sm rounded-full px-3 py-1.5 ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--card))] hover:opacity-90 transition"
            >
              View all →
            </Link>
          </div>

          <div className="mt-6 space-y-5">
            {projects.map((p) => (
              <ProjectRow
                key={p.title}
                title={p.title}
                meta={p.meta}
                desc={p.desc}
                longDesc={p.longDesc}
                tags={p.tags}
                href={p.href}
              />
            ))}
          </div>
        </section>

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Contact */}
        <section id="contact">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-4 text-[15px] leading-7 text-[rgb(var(--muted))]">
            Reach me at <a className="underline underline-offset-4" href="mailto:aparnasobhirala7@gmail.com">aparnasobhirala7@gmail.com</a>, or find me on <a className="underline underline-offset-4" href="https://github.com/ass9529" target="_blank" rel="noreferrer">GitHub</a> and <a className="underline underline-offset-4" href="https://www.linkedin.com/in/aparna-sobhirala/" target="_blank" rel="noreferrer">LinkedIn</a>.
          </p>
        </section>

        <footer className="mt-14 text-center text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} Aparna Sobhirala
        </footer>
      </div>
    </main>
  );
}

function ProjectRow({
  title,
  meta,
  desc,
  longDesc,
  tags,
  href,
}: {
  title: string;
  meta: string;
  desc: string;
  longDesc: string;
  tags: string[];
  href?: string;
}) {
  const Title = <div className="font-medium">{title}</div>;

  return (
    <div className="rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-5">
      <div className="flex items-baseline justify-between gap-3">
        {href ? (
          <a
            href={href}
            className="hover:opacity-90 transition"
            target="_blank"
            rel="noreferrer"
          >
            {Title}
          </a>
        ) : (
          Title
        )}
        <div className="text-sm text-[rgb(var(--muted))]">{meta}</div>
      </div>

      <p className="mt-2 text-[15px] leading-7 text-[rgb(var(--muted))]">
        {desc}
      </p>

      <p className="mt-3 text-[15px] leading-7 text-[rgb(var(--muted))]">
        {longDesc}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full px-2.5 py-1 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  role,
  org,
  date,
  bullets,
  tags,
}: {
  role: string;
  org: string;
  date: string;
  bullets: string[];
  tags?: string[];
}) {
  return (
    <div className="rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-5">
      <div className="flex items-baseline justify-between gap-3">
        <div className="font-medium">
          {role} <span className="text-[rgb(var(--muted))]">@ {org}</span>
        </div>
        <div className="text-sm text-[rgb(var(--muted))]">{date}</div>
      </div>

      <ul className="mt-3 list-disc pl-5 text-[15px] leading-7 text-[rgb(var(--muted))]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full px-2.5 py-1 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))]"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
