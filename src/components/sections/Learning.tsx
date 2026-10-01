import { learnings } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Learning() {
  return (
    <section
      id="learning"
      className="scroll-mt-16 border-y-[3px] border-line bg-brand/15 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading en="LEARNING" ja="勉強中のもの" />
        <ol className="space-y-5">
          {learnings.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 80}>
                <div className="flex items-start gap-4 rounded-3xl border-[3px] border-line bg-surface p-5 shadow-pop-sm sm:p-6">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] border-line bg-mint font-black text-on-brand"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="flex flex-wrap items-center gap-2 text-lg font-black">
                      {item.title}
                      <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-on-brand">
                        学習中
                      </span>
                    </h3>
                    <p className="mt-1 text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
