import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Contact() {
  return (
    <Section id="contact" en="CONTACT" ja="お気軽にどうぞ">
      <Reveal>
        <div className="card card-body bg-sun text-center text-on-brand sm:px-12 sm:py-12">
          <p className="text-lg leading-relaxed font-bold">
            お仕事のご相談・ご感想など、
            <br className="sm:hidden" />
            メールでお気軽にご連絡ください！
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex max-w-full items-center gap-2 rounded-full border-[3px] border-on-brand bg-white px-6 py-3 font-black break-all shadow-[4px_4px_0_0_var(--on-brand)] transition-transform hover:-translate-y-1"
          >
            <span aria-hidden>✉️</span>
            {profile.email}
          </a>
          <p className="mt-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline decoration-[3px] underline-offset-4 hover:decoration-brand-deep"
            >
              GitHub もチェック ↗
              <span className="sr-only">（新しいタブで開きます）</span>
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
