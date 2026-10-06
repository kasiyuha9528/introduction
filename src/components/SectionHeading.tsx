type Props = {
  en: string;
  ja: string;
};

export function SectionHeading({ en, ja }: Props) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      <p className="inline-block -rotate-2 rounded-full border-[3px] border-line bg-sun px-4 py-1 text-xs font-black tracking-[0.2em] text-on-brand sm:text-sm">
        {en}
      </p>
      <h2 className="mt-4 text-3xl leading-tight font-black tracking-wide sm:text-4xl">
        {ja}
      </h2>
      {/* 見出し下の飾り */}
      <div aria-hidden className="mt-4 flex justify-center gap-1.5">
        <span className="h-2 w-8 rounded-full bg-brand" />
        <span className="h-2 w-2 rounded-full bg-sun" />
        <span className="h-2 w-2 rounded-full bg-mint" />
      </div>
    </div>
  );
}
