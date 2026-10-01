import { profile } from "@/data/profile";
import { StudyIllustration } from "@/components/StudyIllustration";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-dots relative overflow-hidden border-b-[3px] border-line"
    >
      {/* 背景のまる */}
      <div
        aria-hidden
        className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-sun opacity-70 sm:h-80 sm:w-80"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-mint opacity-60"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:justify-between lg:py-28">
        <div className="text-center lg:text-left">
          <p className="inline-block rounded-full border-[3px] border-line bg-surface px-4 py-1 text-sm font-bold">
            👋 はじめまして！
          </p>
          <h1 className="mt-6 text-4xl leading-tight font-black sm:text-5xl lg:text-6xl">
            {profile.catchcopy[0]}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">{profile.catchcopy[1]}</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-4 -rotate-1 rounded-full bg-brand/70 sm:h-5"
              />
            </span>
          </h1>
          <p className="mt-6 text-lg font-bold">
            <span className="text-brand-deep">{profile.name}</span>
            <span className="mx-2 text-muted">/</span>
            {profile.role}
          </p>
          <a
            href="#works"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-line bg-brand px-7 py-3 text-lg font-black text-on-brand shadow-pop transition-transform hover:-translate-y-1 active:translate-y-0"
          >
            作ったものを見る
            <span aria-hidden>→</span>
          </a>
        </div>

        <StudyIllustration className="h-auto w-64 shrink-0 sm:w-80 lg:w-[22rem] xl:w-96" />
      </div>
    </section>
  );
}
