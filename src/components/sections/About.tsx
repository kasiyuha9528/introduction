import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading en="ABOUT" ja="わたしについて" />
        <Reveal>
          <div className="relative rounded-3xl border-[3px] border-line bg-surface p-6 shadow-pop sm:p-10">
            {/* 吹き出しのしっぽ */}
            <span
              aria-hidden
              className="absolute -top-[15px] left-12 h-6 w-6 rotate-45 border-t-[3px] border-l-[3px] border-line bg-surface"
            />
            <div className="space-y-4 text-lg leading-relaxed">
              {profile.about.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
