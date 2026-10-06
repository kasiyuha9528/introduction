import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" en="ABOUT" ja="わたしについて">
      <Reveal>
        <div className="card card-body relative">
          {/* 吹き出しのしっぽ */}
          <span
            aria-hidden
            className="absolute -top-[15px] left-12 h-6 w-6 rotate-45 border-t-[3px] border-l-[3px] border-line bg-surface"
          />
          <div className="space-y-4 text-base leading-loose sm:text-lg">
            {profile.about.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
