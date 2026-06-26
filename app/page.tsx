import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstallmentSection } from "@/components/sections/InstallmentSection";
import { PackageSection } from "@/components/sections/PackageSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { WhySection } from "@/components/sections/WhySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <PackageSection />
        <DoctorsSection />
        <ResultsSection />
        <WhySection />
        <StepsSection />
        <InstallmentSection />
        <ReviewsSection />
        <FaqSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
}
