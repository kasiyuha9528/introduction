import { careers, type Career as CareerItem } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const kindStyle: Record<
  CareerItem["kind"],
  { icon: string; label: string; dot: string; badge: string }
> = {
  work: { icon: "💼", label: "仕事", dot: "bg-sun", badge: "bg-sun" },
  study: { icon: "📚", label: "学習", dot: "bg-mint", badge: "bg-mint" },
};

export function Career() {
  return (
    <Section id="career" en="CAREER" ja="これまでの歩み">
      <ol className="relative space-y-6">
        {/* 年表の縦線 */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[22px] w-[3px] bg-line"
        />
        {careers.map((item, i) => {
          const style = kindStyle[item.kind];
          return (
            <li key={item.title} className="relative flex gap-4 sm:gap-5">
              <span
                aria-hidden
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-line text-xl ${style.dot}`}
              >
                {style.icon}
              </span>
              <Reveal delay={i * 60} className="flex-1">
                <div className="card card-body">
                  <p className="flex flex-wrap items-center gap-2 text-sm font-black text-brand-deep">
                    {item.period}
                    <span
                      className={`rounded-full border-2 border-line px-2.5 py-0.5 text-xs font-bold text-on-brand ${style.badge}`}
                    >
                      {style.label}
                    </span>
                  </p>
                  <h3 className="mt-2 text-xl leading-snug font-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
