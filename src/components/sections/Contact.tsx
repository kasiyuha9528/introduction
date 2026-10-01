import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading en="CONTACT" ja="お気軽にどうぞ" />
        <Reveal>
          <div className="rounded-3xl border-[3px] border-line bg-sun p-8 text-center text-on-brand shadow-pop sm:p-12">
            <p className="text-lg font-bold">
              お仕事のご相談・ご感想など、
              <br className="sm:hidden" />
              メールでお気軽にご連絡ください！
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border-[3px] border-[#2a1608] bg-white px-6 py-3 font-black break-all shadow-[4px_4px_0_0_#2a1608] transition-transform hover:-translate-y-1"
            >
              <span aria-hidden>✉️</span>
              {profile.email}
            </a>
            <p className="mt-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline decoration-[3px] underline-offset-4 hover:decoration-[#e56a00]"
              >
                GitHub もチェック ↗
                <span className="sr-only">（新しいタブで開きます）</span>
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
