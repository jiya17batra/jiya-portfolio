import { useState } from "react";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import {
  ABOUT,
  ACTIVITIES,
  CASE_STUDIES,
  EDUCATION,
  LINKS,
  PROJECTS,
  PUBLICATIONS,
  type ChatId,
} from "@/data/portfolio";
import { Bubble, ExtLink } from "./primitives";
import projectThumb from "@/assets/project-placeholder.jpg";
import doodlesPreview from "@/assets/doodles-preview.jpg";

function Section({ label, value }: { label: string; value: string }) {
  return (
    <p className="mt-1.5">
      <span className="font-semibold">{label}: </span>
      <span className="text-foreground/80">{value}</span>
    </p>
  );
}

function AboutThread() {
  const [asked, setAsked] = useState<string[]>([]);
  const remaining = ABOUT.quickReplies.filter((q) => !asked.includes(q.label));

  return (
    <>
      <Bubble side="out">Tell me about yourself.</Bubble>
      <Bubble>{ABOUT.intro}</Bubble>
      {asked.map((label) => {
        const q = ABOUT.quickReplies.find((r) => r.label === label)!;
        return (
          <div key={label} className="flex flex-col gap-2">
            <Bubble side="out">{q.question}</Bubble>
            <Bubble>
              <span className="whitespace-pre-line">{q.answer}</span>
            </Bubble>
          </div>
        );
      })}
      {remaining.length > 0 && (
        <div className="flex flex-wrap justify-end gap-2 pt-1">
          {remaining.map((q) => (
            <button
              key={q.label}
              type="button"
              onClick={() => setAsked((a) => [...a, q.label])}
              className="rounded-full border border-wa-green/50 bg-chat-bubble-in px-3.5 py-1.5 text-xs font-medium text-wa-green transition-colors hover:bg-wa-green/10"
            >
              {q.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export function ThreadBody({ id }: { id: ChatId }) {
  if (id === "about") return <AboutThread />;

  if (id === "projects") {
    return (
      <>
        <Bubble side="out">Show me what you've built.</Bubble>
        <Bubble>Here are 5 things I've built, broken & rebuilt 🚀</Bubble>
        {PROJECTS.map((p) => (
          <Bubble key={p.title} className="max-w-[92%] p-2 sm:max-w-[80%]">
            <img
              src={projectThumb}
              alt={`${p.title} thumbnail`}
              loading="lazy"
              width={768}
              height={512}
              className="mb-2 h-32 w-full rounded-xl object-cover sm:h-40"
            />
            <div className="px-1.5 pb-1">
              <p className="text-sm font-semibold">{p.title}</p>
              <p className="mt-0.5 text-[13px] text-foreground/70">
                {p.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-foreground/5 px-2 py-0.5 text-[11px] text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ExtLink href={p.github} className="mt-2.5">
                <Github className="h-3.5 w-3.5" /> GitHub Repository
              </ExtLink>
            </div>
          </Bubble>
        ))}
      </>
    );
  }

  if (id === "case-studies") {
    return (
      <>
        <Bubble side="out">How do you turn problems into experiences?</Bubble>
        <Bubble>Like this — three case studies, start to finish.</Bubble>
        {CASE_STUDIES.map((c) => (
          <Bubble key={c.title} className="max-w-[92%] sm:max-w-[80%]">
            <p className="text-sm font-semibold">{c.title}</p>
            <Section label="Problem" value={c.problem} />
            <Section label="Approach" value={c.approach} />
            <Section label="Design / process" value={c.process} />
            <Section label="Solution" value={c.solution} />
            <Section label="Outcome" value={c.outcome} />
            <ExtLink href={c.url} className="mt-2.5">
              View Case Study <ExternalLink className="h-3.5 w-3.5" />
            </ExtLink>
          </Bubble>
        ))}
      </>
    );
  }

  if (id === "publication") {
    return (
      <>
        <Bubble side="out">What have you written?</Bubble>
        <Bubble>Ideas worth putting into words 📝</Bubble>
        {PUBLICATIONS.map((p) => (
          <Bubble key={p.title} className="max-w-[92%] sm:max-w-[80%]">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold">{p.title}</p>
              <span className="shrink-0 text-[11px] text-foreground/50">
                {p.year}
              </span>
            </div>
            <p className="mt-1 text-[13px] text-foreground/70">
              {p.description}
            </p>
            <ExtLink href={p.url} className="mt-2.5">
              Read Publication →
            </ExtLink>
          </Bubble>
        ))}
      </>
    );
  }

  if (id === "education") {
    return (
      <>
        <Bubble side="out">Where did the journey start?</Bubble>
        {EDUCATION.map((e) => (
          <Bubble key={e.level} className="max-w-[92%] sm:max-w-[80%]">
            <span className="inline-block rounded-full bg-wa-green/15 px-2 py-0.5 text-[11px] font-medium text-wa-green">
              {e.level}
            </span>
            <p className="mt-1.5 text-sm font-semibold">{e.title}</p>
            <Section label="Institution" value={e.place} />
            <Section label="Year" value={e.year} />
            {e.detail && <Section label="Details" value={e.detail} />}
          </Bubble>
        ))}
      </>
    );
  }

  if (id === "enrichment") {
    return (
      <>
        <Bubble side="out">More than just code & design?</Bubble>
        {ACTIVITIES.map((a) => (
          <Bubble key={a.title} className="max-w-[92%] sm:max-w-[80%]">
            <p className="text-sm font-semibold">{a.title}</p>
            <p className="text-[12px] font-medium text-wa-green">{a.role}</p>
            <p className="mt-1.5 text-[13px] text-foreground/70">
              {a.description}
            </p>
            <ExtLink href={a.linkedin} className="mt-2.5">
              <Linkedin className="h-3.5 w-3.5" /> View LinkedIn Post →
            </ExtLink>
          </Bubble>
        ))}
      </>
    );
  }

  if (id === "doodles") {
    return (
      <>
        <Bubble side="out">Show me something not serious :)</Bubble>
        <Bubble className="max-w-[92%] p-2 sm:max-w-[80%]">
          <img
            src={doodlesPreview}
            alt="Preview of Jiya's doodles"
            loading="lazy"
            width={768}
            height={512}
            className="h-40 w-full rounded-xl object-cover sm:h-52"
          />
          <div className="px-1.5 pb-1 pt-2">
            <p className="text-sm font-semibold">Doodles</p>
            <p className="mt-0.5 text-[13px] text-foreground/70">
              Because not everything needs to be serious. The full board lives
              on Pinterest.
            </p>
            <ExtLink href={LINKS.pinterest} className="mt-2.5">
              View Doodles →
            </ExtLink>
          </div>
        </Bubble>
      </>
    );
  }

  return null;
}
