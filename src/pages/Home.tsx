import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import WorkSection from "../components/sections/WorkSection";
import CtaSection from "../components/sections/CtaSection";
import ContactSection from "../components/sections/ContactSection";
import type { Content } from "../data/content";

export default function Home({ content }: { content: Content }) {
  return (
    <main className="container" style={{ paddingTop: 48 }}>
      <HeroSection {...content.hero} />
      <ServicesSection id="services" title={content.services.title} items={content.services.items} />
      <WorkSection id="work" title={content.work.title} items={content.work.items} />
      <CtaSection {...content.cta} />
      <ContactSection id="contact" {...content.contact} />
    </main>
  );
}
