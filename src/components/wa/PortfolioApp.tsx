import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Camera as CameraIcon,
  Github,
  Linkedin,
  MessageSquare,
  MessagesSquare,
  MoreVertical,
  Phone,
  Users,
  CircleDashed,
  FileText,
  Mail,
  Download,
} from "lucide-react";
import {
  CHATS,
  EXPERIENCES,
  LINKS,
  type Category,
  type ChatId,
  type ChatMeta,
} from "@/data/portfolio";
import { Bubble, ExtLink, LetterAvatar, openExternal } from "./primitives";
import { ThreadBody } from "./threads";
import {
  CertificatesScreen,
  ChatsScreen,
  ContactScreen,
  UpdatesScreen,
} from "./screens";
import { CameraEasterEgg } from "./camera";
import { cn } from "@/lib/utils";

type Tab = "chats" | "updates" | "certificates" | "contact";
type Detail =
  | { kind: "chat"; id: ChatId; title: string }
  | { kind: "experience"; id: string }
  | { kind: "hire" }
  | { kind: "camera" }
  | null;

const TABS: { id: Tab; label: string; icon: typeof MessageSquare }[] = [
  { id: "chats", label: "Chats", icon: MessagesSquare },
  { id: "updates", label: "Updates", icon: CircleDashed },
  { id: "certificates", label: "Certificates", icon: Users },
  { id: "contact", label: "Contact", icon: Phone },
];

const TITLES: Record<Tab, string> = {
  chats: "WhatsApp",
  updates: "Updates",
  certificates: "Certificates gallery",
  contact: "Contact",
};

export function PortfolioApp() {
  const [tab, setTab] = useState<Tab>("chats");
  const [detail, setDetail] = useState<Detail>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  useEffect(() => setDetail(null), [tab]);

  const openChat = (chat: ChatMeta) => {
    if (chat.externalUrl) {
      openExternal(chat.externalUrl);
      return;
    }
    setDetail({ kind: "chat", id: chat.id, title: chat.name });
  };

  const list = (
    <div className="flex h-full flex-col">
      {/* header */}
      <header className="flex items-center justify-between px-4 pb-3 pt-5">
        <h1
          className={cn(
            "text-[26px] font-bold tracking-tight sm:text-[28px]",
            tab === "chats" && "text-wa-green",
          )}
        >
          {TITLES[tab]}
        </h1>
        <div className="relative flex items-center gap-3">
          <button
            type="button"
            aria-label="Open camera"
            onClick={() => setDetail({ kind: "camera" })}
            className="rounded-full p-1 transition-colors hover:bg-foreground/5"
          >
            <CameraIcon className="h-[22px] w-[22px]" />
          </button>
          <button
            type="button"
            aria-label="More options"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-full p-1 transition-colors hover:bg-foreground/5"
          >
            <MoreVertical className="h-[22px] w-[22px]" />
          </button>
          {menuOpen && (
            <>
              <button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-30 cursor-default"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute right-0 top-9 z-40 w-48 animate-wa-rise overflow-hidden rounded-2xl bg-card py-1.5 shadow-xl ring-1 ring-foreground/10">
                {[
                  {
                    label: "About Jiya",
                    action: () => {
                      setTab("chats");
                      setDetail({
                        kind: "chat",
                        id: "about",
                        title: "About me",
                      });
                    },
                  },
                  { label: "View CV", action: () => openExternal(LINKS.cv) },
                  { label: "Contact", action: () => setTab("contact") },
                  {
                    label: "LinkedIn",
                    action: () => openExternal(LINKS.linkedin),
                  },
                  { label: "GitHub", action: () => openExternal(LINKS.github) },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      item.action();
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-foreground/5"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <div className="min-h-0 flex-1">
        {tab === "chats" && (
          <ChatsScreen
            onOpen={openChat}
            activeId={detail?.kind === "chat" ? detail.id : undefined}
            category={category}
            setCategory={setCategory}
            query={query}
            setQuery={setQuery}
          />
        )}
        {tab === "updates" && (
          <UpdatesScreen
            onOpen={(id) => setDetail({ kind: "experience", id })}
            activeId={detail?.kind === "experience" ? detail.id : undefined}
            onCamera={() => setDetail({ kind: "camera" })}
          />
        )}
        {tab === "certificates" && <CertificatesScreen />}
        {tab === "contact" && (
          <ContactScreen onHire={() => setDetail({ kind: "hire" })} />
        )}
      </div>

      <BottomNav tab={tab} setTab={setTab} />
    </div>
  );

  const detailPane = (
    <DetailPane detail={detail} onClose={() => setDetail(null)} />
  );


  return (
    <div className="h-dvh w-full overflow-hidden bg-chat-surface">
      {/* Mobile / tablet: full-viewport single surface */}
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-chat-surface min-[1200px]:hidden">
        <div className="mx-auto flex h-full w-full max-w-3xl flex-col overflow-hidden md:max-w-none">
          {list}
        </div>
        {detail && (
          <div className="absolute inset-0 z-50 flex flex-col bg-chat-surface">
            <div className="mx-auto flex h-full w-full max-w-3xl flex-col overflow-hidden md:max-w-none">
              {detailPane}
            </div>
          </div>
        )}
      </div>

      {/* Desktop: WhatsApp Web-style two-pane layout */}
      <div className="hidden h-full w-full overflow-hidden bg-chat-surface min-[1200px]:grid min-[1200px]:grid-cols-[minmax(340px,26%)_1fr]">
        <div className="min-h-0 min-w-0 border-r border-foreground/10">{list}</div>
        <div className="min-h-0 min-w-0">{detailPane}</div>
      </div>
    </div>
  );
}

function BottomNav({
  tab,
  setTab,
}: {
  tab: Tab;
  setTab: (t: Tab) => void;
}) {
  return (
    <nav className="flex items-center justify-around border-t border-foreground/10 bg-background px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
      {TABS.map(({ id, label, icon: Icon }) => {
        const active = tab === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            aria-current={active ? "page" : undefined}
            className="flex flex-1 flex-col items-center gap-1 py-1"
          >
            <span
              className={cn(
                "rounded-full px-5 py-1 transition-colors",
                active && "bg-wa-green-soft",
              )}
            >
              <Icon className="h-[22px] w-[22px]" />
            </span>
            <span
              className={cn(
                "text-[10px]",
                active ? "font-semibold" : "text-foreground/60",
              )}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

function DetailPane({
  detail,
  onClose,
}: {
  detail: Detail;
  onClose: () => void;
}) {
  if (!detail) {
    return (
      <div className="hidden h-full flex-col items-center justify-center gap-2 px-10 text-center min-[1200px]:flex">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-wa-green/15 text-2xl">
          💬
        </span>
        <p className="text-lg font-semibold">Jiya&apos;s Portfolio</p>
        <p className="max-w-sm text-sm text-foreground/55">
          Pick a chat on the left to explore projects, case studies, education
          and more.
        </p>
      </div>
    );
  }

  const title =
    detail.kind === "chat"
      ? detail.title
      : detail.kind === "experience"
        ? (EXPERIENCES.find((e) => e.id === detail.id)?.org ?? "Experience")
        : detail.kind === "hire"
          ? "Hire Me"
          : "Camera";

  const subtitle =
    detail.kind === "chat"
      ? (CHATS.find((c) => c.id === detail.id)?.preview ?? "")
      : detail.kind === "experience"
        ? (EXPERIENCES.find((e) => e.id === detail.id)?.role ?? "")
        : detail.kind === "hire"
          ? "Start a new conversation"
          : "Easter egg";

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-3 border-b border-foreground/10 bg-background px-3 py-3">
        <button
          type="button"
          onClick={onClose}
          aria-label="Back"
          className="rounded-full p-1.5 transition-colors hover:bg-foreground/5"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <LetterAvatar name={title} size={38} />
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold">{title}</p>
          <p className="truncate text-[11.5px] text-foreground/50">
            {subtitle}
          </p>
        </div>
      </header>

      <div className="mx-auto flex min-h-0 w-full max-w-4xl flex-1 flex-col gap-2.5 overflow-y-auto bg-chat-surface px-3 py-4 sm:px-5 min-[1200px]:px-8 min-[1200px]:py-6">
        {detail.kind === "chat" && <ThreadBody id={detail.id} />}
        {detail.kind === "experience" && <ExperienceBody id={detail.id} />}
        {detail.kind === "hire" && <HireBody />}
        {detail.kind === "camera" && <CameraEasterEgg />}
      </div>
    </div>
  );
}

function ExperienceBody({ id }: { id: string }) {
  const exp = EXPERIENCES.find((e) => e.id === id);
  if (!exp) return null;
  return (
    <>
      <Bubble side="out">Tell me about your time at {exp.org}.</Bubble>
      <Bubble className="max-w-[92%] sm:max-w-[80%]">
        <p className="text-sm font-semibold">{exp.org}</p>
        <p className="text-[12px] font-medium text-wa-green">{exp.role}</p>
        <p className="mt-0.5 text-[12px] text-foreground/50">{exp.duration}</p>

        <p className="mt-2.5 text-[13px] font-semibold">Responsibilities</p>
        <ul className="mt-1 list-disc pl-4 text-[13px] text-foreground/75">
          {exp.responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>

        <p className="mt-2.5 text-[13px] font-semibold">Skills</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {exp.skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-foreground/5 px-2 py-0.5 text-[11px] text-foreground/70"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mt-2.5 text-[13px] font-semibold">Achievements</p>
        <ul className="mt-1 list-disc pl-4 text-[13px] text-foreground/75">
          {exp.achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Bubble>
      <Bubble className="max-w-[92%] sm:max-w-[80%]">
        <p className="text-[13px] font-semibold">Proof of work</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {exp.proof.map((p) => (
            <ExtLink key={p.label} href={p.url} variant="outline">
              {p.label.includes("GitHub") && <Github className="h-3.5 w-3.5" />}
              {p.label.includes("LinkedIn") && (
                <Linkedin className="h-3.5 w-3.5" />
              )}
              {p.label}
            </ExtLink>
          ))}
        </div>
      </Bubble>
    </>
  );
}

function HireBody() {
  return (
    <>
      <Bubble>Hey! 👋 Want to build something together?</Bubble>
      <Bubble>
        Tell me about the role or the idea — I&apos;ll get back to you quickly.
      </Bubble>
      <Bubble className="max-w-[92%] sm:max-w-[80%]">
        <div className="flex flex-col gap-2">
          <ExtLink href={`mailto:${LINKS.email}?subject=Let's build something`}>
            <MessageSquare className="h-3.5 w-3.5" /> Send Message
          </ExtLink>
          <ExtLink href={`mailto:${LINKS.email}`} variant="outline">
            <Mail className="h-3.5 w-3.5" /> Send Email
          </ExtLink>
          <ExtLink href={LINKS.cv} variant="outline">
            <Download className="h-3.5 w-3.5" /> Download CV
          </ExtLink>
          <ExtLink href={LINKS.cv} variant="ghost">
            <FileText className="h-3.5 w-3.5" /> Open CV in Google Docs
          </ExtLink>
        </div>
      </Bubble>
    </>
  );
}
