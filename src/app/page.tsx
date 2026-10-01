import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Works } from "@/components/sections/Works";
import { Learning } from "@/components/sections/Learning";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
