import { skills } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-dots scroll-mt-16 border-y-[3px] border-line px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading en="SKILLS" ja="できること" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <li key={skill.category}>
              <Reveal delay={i * 80} className="h-full">
                <div className="h-full rounded-3xl border-[3px] border-line bg-surface p-6 shadow-pop transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] border-line bg-sun text-2xl"
                    >
                      {skill.icon}
                    </span>
                    <h3 className="text-xl font-black">{skill.category}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
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
      </div>
    </section>
  );
}
