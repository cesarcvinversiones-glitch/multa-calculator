import { AdSlot } from "@/components/fines/AdSlot";
import { Calculator } from "@/components/fines/Calculator";
import { Faq } from "@/components/fines/Faq";
import { Footer } from "@/components/fines/Footer";
import { Hero } from "@/components/fines/Hero";
import { NewsCards } from "@/components/fines/NewsCards";
import { PenalBlock } from "@/components/fines/PenalBlock";
import { SanctionsTable } from "@/components/fines/SanctionsTable";
import { SeoLinks } from "@/components/fines/SeoLinks";
import { SpeedLimitsDGT } from "@/components/fines/SpeedLimitsDGT";

export default function App() {
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
