import { learnings } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Learning() {
  return (
    <Section
      id="learning"
      en="LEARNING"
      ja="勉強中のもの"
      className="border-y-[3px] border-line bg-brand/15"
    >
      <ol className="space-y-6">
        {learnings.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 80}>
              <div className="card card-body flex items-start gap-4 sm:gap-5">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] border-line bg-mint font-black text-on-brand"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="flex flex-wrap items-center gap-2 text-xl leading-snug font-black">
                    {item.title}
                    <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-on-brand">
                      学習中
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
