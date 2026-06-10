import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/fines/Hero";
import { Calculator } from "@/components/fines/Calculator";
import { SanctionsTable } from "@/components/fines/SanctionsTable";
import { SpeedLimitsDGT } from "@/components/fines/SpeedLimitsDGT";
import { NewsCards } from "@/components/fines/NewsCards";
import { SeoLinks } from "@/components/fines/SeoLinks";
import { Faq, FAQ_ITEMS } from "@/components/fines/Faq";
import { PenalBlock } from "@/components/fines/PenalBlock";
import { AdSlot } from "@/components/fines/AdSlot";
import { Footer } from "@/components/fines/Footer";

const TITLE = "Calculadora de Multas por Exceso de Velocidad en España";
const DESCRIPTION =
  "Calcula tu multa por exceso de velocidad en España. Consulta sanción económica, descuento por pronto pago, pérdida de puntos y posible delito penal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Calculator />
      <AdSlot />
      <SanctionsTable />
      <SpeedLimitsDGT />
      <NewsCards />
      <AdSlot />
      <SeoLinks />
      <PenalBlock />
      <Faq />
      <AdSlot />
      <Footer />
    </main>
  );
}
