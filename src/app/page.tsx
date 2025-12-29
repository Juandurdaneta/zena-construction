import {
  Header,
  Hero,
  PainPoints,
  Trust,
  EvaluationPreview,
  Process,
  Guarantee,
  Testimonials,
  Portfolio,
  ContactCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Trust />
        <EvaluationPreview />
        <Process />
        <Guarantee />
        <Testimonials />
        <Portfolio />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
