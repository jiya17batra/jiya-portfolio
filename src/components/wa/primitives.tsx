import type { ReactNode } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function isLive(url: string | undefined) {
  return !!url && /^(https?:|mailto:)/.test(url);
}

/** Anchor that always behaves correctly, and never becomes a dead button. */
export function ExtLink({
  href,
  children,
  className,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors";
  const styles = {
    solid: "bg-wa-green text-wa-green-foreground hover:opacity-90",
    outline:
      "border border-wa-green/50 text-wa-green hover:bg-wa-green/10 bg-transparent",
    ghost: "text-foreground/70 hover:bg-foreground/5",
  }[variant];

  if (!isLive(href)) {
    return (
      <button
        type="button"
        className={cn(base, styles, "opacity-70", className)}
        onClick={() =>
          toast("Link coming soon", {
            description: "Jiya hasn't added this link yet.",
          })
        }
      >
        {children}
      </button>
    );
  }

  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer noopener"}
      className={cn(base, styles, className)}
    >
      {children}
    </a>
  );
}

export function openExternal(url: string) {
  if (!isLive(url)) {
    toast("Link coming soon", {
      description: "Jiya hasn't added this link yet.",
    });
    return;
  }
  if (url.startsWith("mailto:")) {
    window.location.href = url;
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

const AVATAR_TINTS = [
  "oklch(0.88 0.09 25)",
  "oklch(0.88 0.09 150)",
  "oklch(0.88 0.08 250)",
  "oklch(0.9 0.1 90)",
  "oklch(0.88 0.09 320)",
];

export function LetterAvatar({
  name,
  size = 44,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .replace(/[^\p{L}\s]/gu, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
  let hash = 0;
  for (const ch of name) hash = (hash + ch.charCodeAt(0)) % 997;
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-semibold text-foreground/70",
        className,
      )}
      style={{
        width: size,
        height: size,
        background: AVATAR_TINTS[hash % AVATAR_TINTS.length],
        fontSize: size * 0.36,
      }}
      aria-hidden
    >
      {initials || "•"}
    </span>
  );
}

/** WhatsApp-style message bubble. */
export function Bubble({
  side = "in",
  children,
  className,
}: {
  side?: "in" | "out";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full animate-wa-rise",
        side === "out" ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed shadow-sm sm:text-sm",
          side === "out"
            ? "rounded-br-md bg-chat-bubble-out text-chat-bubble-out-foreground"
            : "rounded-bl-md bg-chat-bubble-in text-foreground",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
