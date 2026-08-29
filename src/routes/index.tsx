import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PortfolioApp } from "@/components/wa/PortfolioApp";
import { Splash } from "@/components/wa/Splash";

const TITLE = "Jiya Batra — Portfolio in a chat";
const DESCRIPTION =
  "Jiya Batra's interactive messaging-style portfolio: projects, case studies, publications, education, work experience, certificates and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      <h1 className="sr-only">Jiya Batra — interactive portfolio</h1>
      {showSplash && <Splash />}
      <PortfolioApp />
    </main>
  );
}
