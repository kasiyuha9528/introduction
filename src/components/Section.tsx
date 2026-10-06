import { SectionHeading } from "@/components/SectionHeading";

const widths = {
  narrow: "max-w-3xl",
  wide: "max-w-5xl",
};

type Props = {
  id: string;
  en: string;
  ja: string;
  width?: keyof typeof widths;
  /** 背景色・境界線など、セクションごとの装飾 */
  className?: string;
  children: React.ReactNode;
};

/** 各セクション共通の外枠（余白・横幅・見出し） */
export function Section({
  id,
  en,
  ja,
  width = "narrow",
  className = "",
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24 ${className}`}
    >
      <div className={`mx-auto ${widths[width]}`}>
        <SectionHeading en={en} ja={ja} />
        {children}
      </div>
    </section>
  );
}
