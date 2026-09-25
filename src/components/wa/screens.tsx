import { Pin, Plus, Phone, Pencil, Camera as CameraIcon } from "lucide-react";
import {
  CERTIFICATES,
  CHATS,
  CONTACTS,
  EXPERIENCES,
  type Category,
  type ChatMeta,
} from "@/data/portfolio";
import { ExtLink, LetterAvatar } from "./primitives";

import avatar from "@/assets/jiya-avatar.jpg";
import cvAvatar from "@/assets/CV.jpg";
import aboutAvatar from "@/assets/aboutme.jpg";
import projectsAvatar from "@/assets/projects.jpg";
import portfolioAvatar from "@/assets/sofar.jpg";
import caseAvatar from "@/assets/case.jpg";
import publicationAvatar from "@/assets/publication.jpg";
import educationAvatar from "@/assets/eduaction.jpg";
import enrichmentAvatar from "@/assets/doola.jpg";
import doodlesAvatar from "@/assets/doodles.jpg";

import { cn } from "@/lib/utils";

const CATEGORIES: Category[] = ["All", "Projects", "Case Study", "Edu"];

/* -------------------------------------------------------
   CHAT AVATARS
------------------------------------------------------- */

const CHAT_AVATARS: Record<string, string> = {
  cv: cvAvatar,
  about: aboutAvatar,
  projects: projectsAvatar,
  portfolio: portfolioAvatar,
  "case-studies": caseAvatar,
  publication: publicationAvatar,
  education: educationAvatar,
  enrichment: enrichmentAvatar,
  doodles: doodlesAvatar,
};

/* -------------------------------------------------------
   CHATS SCREEN
------------------------------------------------------- */

export function ChatsScreen({
  onOpen,
  activeId,
  category,
  setCategory,
  query,
  setQuery,
}: {
  onOpen: (chat: ChatMeta) => void;
  activeId?: string | undefined;
  category: Category;
  setCategory: (c: Category) => void;
  query: string;
  setQuery: (q: string) => void;
}) {
  const chats = CHATS.filter(
    (c) =>
      (category === "All" || c.categories.includes(category)) &&
      (c.name + c.preview).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-1">
        <label className="sr-only" htmlFor="chat-search">
          Search
        </label>

        <div className="flex items-center gap-2 rounded-full bg-foreground/[0.07] px-4 py-2.5">
          <span className="h-4 w-4 shrink-0 rounded-full border-[3px] border-wa-green" />

          <input
            id="chat-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask Jiya AI or search"
            className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
          />
        </div>

        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors",
                category === c
                  ? "bg-wa-green-soft text-foreground"
                  : "bg-foreground/[0.06] text-foreground/60",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ul className="flex-1 overflow-y-auto px-2 pb-4 pt-2">
        {chats.map((chat) => (
          <li key={chat.id}>
            <button
              type="button"
              onClick={() => onOpen(chat)}
              className={cn(
                "flex w-full items-center gap-3 rounded-2xl px-2 py-2.5 text-left transition-colors hover:bg-foreground/[0.04]",
                activeId === chat.id && "bg-foreground/[0.05]",
              )}
            >
              {/* CHAT PROFILE IMAGE */}
              {CHAT_AVATARS[chat.id] ? (
                <img
                  src={CHAT_AVATARS[chat.id]}
                  alt={chat.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
              ) : (
                <LetterAvatar name={chat.name} />
              )}

              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold">
                  {chat.name}
                </span>

                <span className="block truncate text-[13px] text-foreground/55">
                  {chat.preview}
                </span>
              </span>

              {chat.pinned && (
                <Pin className="h-4 w-4 shrink-0 rotate-45 fill-foreground text-foreground" />
              )}
            </button>
          </li>
        ))}

        {chats.length === 0 && (
          <li className="px-4 py-10 text-center text-sm text-foreground/50">
            No chats found.
          </li>
        )}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------
   UPDATES SCREEN
------------------------------------------------------- */

export function UpdatesScreen({
  onOpen,
  activeId,
  onCamera,
}: {
  onOpen: (id: string) => void;
  activeId?: string | undefined;
  onCamera: () => void;
}) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <h2 className="text-[15px] font-semibold">Status</h2>

        <div className="mt-3 flex items-center gap-3">
          <span className="relative">
            <img
              src={avatar}
              alt="Jiya Batra"
              loading="lazy"
              width={512}
              height={512}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-wa-green"
            />

            <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background bg-wa-green" />
          </span>

          <span>
            <span className="block text-[13.5px] font-semibold">
              My professional journey so far
            </span>

            <span className="block text-xs text-foreground/55">
              Tap to see my work
            </span>
          </span>
        </div>

        <p className="mt-3 text-[13.5px] text-foreground/80">
          Here&apos;s what I&apos;ve been up to professionally 👀
        </p>

        <ul className="mt-4 space-y-1">
          {EXPERIENCES.map((exp) => (
            <li key={exp.id}>
              <button
                type="button"
                onClick={() => onOpen(exp.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl px-1.5 py-2.5 text-left transition-colors hover:bg-foreground/[0.04]",
                  activeId === exp.id && "bg-foreground/[0.05]",
                )}
              >
                <span className="rounded-full p-[2px] ring-2 ring-wa-green">
                  <LetterAvatar name={exp.org} size={42} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13.5px] font-semibold">
                    {exp.org}
                  </span>

                  <span className="block truncate text-[11.5px] text-foreground/60">
                    {exp.role}
                  </span>

                  <span className="block truncate text-[11.5px] text-foreground/45">
                    {exp.preview}
                  </span>
                </span>

                <span className="shrink-0 text-[11px] text-foreground/40">
                  {exp.year}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 flex flex-col items-end gap-3">
        <span className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.06]">
          <Pencil className="h-4 w-4" />
        </span>

        <button
          type="button"
          onClick={onCamera}
          aria-label="Open camera"
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-wa-green text-wa-green-foreground shadow-lg"
        >
          <CameraIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   CERTIFICATES SCREEN
------------------------------------------------------- */

export function CertificatesScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 px-4 pb-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.08] text-lg">
          🎓
        </span>

        <h2 className="text-[17px] font-semibold">
          Certificates gallery
        </h2>
      </div>

      <div className="h-px bg-foreground/15" />

      <ul className="flex-1 overflow-y-auto px-3 py-3">
        {CERTIFICATES.map((c) => (
          <li key={c.title}>
            <a
              href={/^https?:/.test(c.url) ? c.url : undefined}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => {
                if (!/^https?:/.test(c.url)) {
                  e.preventDefault();
                }
              }}
              className="flex items-center gap-3 rounded-2xl px-2 py-2.5 transition-colors hover:bg-foreground/[0.04]"
            >
              <LetterAvatar
                name={c.org}
                size={44}
                className="!rounded-xl text-[11px]"
              />

              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium leading-snug">
                  {c.title}
                </span>

                <span className="block truncate text-[12px] text-foreground/50">
                  {c.org}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------
   CONTACT SCREEN
------------------------------------------------------- */

export function ContactScreen({ onHire }: { onHire: () => void }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wa-green text-lg">
            💚
          </span>

          <span className="text-[13px] font-semibold">
            Ping me via
          </span>
        </div>

        <ul className="mt-5 space-y-5">
          {CONTACTS.map((c) => (
            <li
              key={c.id}
              className="flex items-center gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-[11px] font-bold uppercase text-background">
                {c.id.slice(0, 2)}
              </span>

              <ExtLink
                href={c.href}
                variant="ghost"
                className="!px-0 text-[15px] underline underline-offset-4 hover:bg-transparent"
              >
                {c.label}
              </ExtLink>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onHire}
        aria-label="Hire me"
        className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-wa-green text-wa-green-foreground shadow-lg"
      >
        <span className="relative">
          <Phone className="h-6 w-6 fill-current" />
          <Plus className="absolute -right-2 -top-2 h-3.5 w-3.5" />
        </span>
      </button>
    </div>
  );
}
