// src/app/page.js
import HeroSection from "../components/HeroSection";
import VisaLotteries from "@/components/VisaLotteries";
import VisaForm from "@/components/visaForm";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <VisaLotteries/>
      <VisaForm/>
    </main>
  );
}
