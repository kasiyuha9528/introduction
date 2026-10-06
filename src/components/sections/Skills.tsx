import { skills } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      en="SKILLS"
      ja="できること"
      width="wide"
      className="bg-dots border-y-[3px] border-line"
    >
      <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <li key={skill.category}>
            <Reveal delay={i * 80} className="h-full">
              <div className="card card-body card-hover h-full">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-[3px] border-line bg-sun text-2xl"
                  >
                    {skill.icon}
                  </span>
                  <h3 className="text-xl leading-snug font-black">
                    {skill.category}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5 border-t-2 border-dashed border-line/30 pt-5 text-sm leading-relaxed sm:text-base">
                  {skill.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="font-black text-brand">
                        ●
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
