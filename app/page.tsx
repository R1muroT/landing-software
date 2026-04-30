import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { Audience } from "@/components/sections/audience";
import { TechStack } from "@/components/sections/tech-stack";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Audience />
        <TechStack />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
