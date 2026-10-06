import { works, type Work } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const thumbColor: Record<Work["color"], string> = {
  brand: "bg-brand",
  sun: "bg-sun",
  mint: "bg-mint",
};

export function Works() {
  return (
    <Section id="works" en="WORKS" ja="作ったもの" width="wide">
      <ul className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2">
        {works.map((work, i) => (
          <li key={work.title}>
            <Reveal delay={i * 80} className="h-full">
              <article className="card card-hover flex h-full flex-col overflow-hidden">
                <div
                  aria-hidden
                  className={`bg-dots flex h-40 items-center justify-center border-b-[3px] border-line text-7xl ${thumbColor[work.color]}`}
                >
                  {work.icon}
                </div>
                <div className="card-body flex flex-1 flex-col">
                  <h3 className="text-xl leading-snug font-black">
                    {work.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {work.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border-2 border-line px-3 py-0.5 text-xs font-bold"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {work.link && (
                    <a
                      href={work.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1 self-start rounded-full border-[3px] border-line bg-sun px-4 py-1.5 text-sm font-black text-on-brand shadow-pop-sm transition-transform hover:-translate-y-0.5"
                    >
                      {work.link.label}
                      <span aria-hidden>↗</span>
                      <span className="sr-only">（新しいタブで開きます）</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
