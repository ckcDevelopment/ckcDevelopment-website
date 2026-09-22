import { Approach } from "@/components/Approach";
import { CapabilityStrip } from "@/components/CapabilityStrip";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyCkc } from "@/components/WhyCkc";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <CapabilityStrip />
      <Services />
      <Approach />
      <WhyCkc />
      <Contact />
    </main>
  );
}
