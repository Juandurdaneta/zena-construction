import {
  Header,
  Hero,
  PainPoints,
  Trust,
  EvaluationPreview,
  Process,
  Guarantee,
  Testimonials,
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
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
