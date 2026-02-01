import Hero from "../../components/sections/hero"
import About from "../../components/sections/about"
import Services from "../../components/sections/services"
import Methodology from "../../components/sections/methodology"
import Testimonials from "../../components/sections/testimonials"
import CTA from "../../components/sections/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Testimonials />
      <CTA />
    </>
  );
}
