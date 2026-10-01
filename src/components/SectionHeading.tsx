type Props = {
  en: string;
  ja: string;
};

export function SectionHeading({ en, ja }: Props) {
  return (
    <div className="mb-10 text-center">
      <p className="inline-block -rotate-2 rounded-full border-[3px] border-line bg-sun px-4 py-1 text-sm font-black tracking-widest text-on-brand">
        {en}
      </p>
      <h2 className="mt-3 text-3xl font-black sm:text-4xl">{ja}</h2>
    </div>
  );
}
