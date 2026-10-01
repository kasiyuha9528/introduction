export const profile = {
  name: "kasiyuha9528",
  role: "Web制作・業務アプリ設計を学ぶ駆け出しクリエイター",
  catchcopy: ["「つくりたい」を、", "カタチにする。"],
  about: [
    "AIアシスタント（Claude Code）と一緒に、要件を整理するところからWebサイトの制作・公開までを一通り経験しています。",
    "「誰が使うのか」「何が必要か」を最初に整理してから作り始めるのが得意です。",
    "いまは Next.js と Tailwind CSS を使った開発に挑戦中。このサイトもその練習を兼ねて作りました。",
  ],
  email: "yuzuyuzu020221@gmail.com",
  github: "https://github.com/kasiyuha9528",
};

export type Skill = {
  category: string;
  icon: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "企画・設計",
    icon: "📝",
    items: [
      "ヒアリングからの要件定義",
      "業務フロー・ステータス・権限の整理",
      "要件定義書（Markdown）の作成",
    ],
  },
  {
    category: "Web制作",
    icon: "💻",
    items: [
      "HTML／CSS／JavaScript でのLP制作",
      "スマートフォン対応（レスポンシブ）",
      "ダークモード対応",
    ],
  },
  {
    category: "デザイン",
    icon: "🎨",
    items: [
      "ターゲットに合わせた配色・フォント選び",
      "セクション構成の設計",
    ],
  },
  {
    category: "開発環境",
    icon: "🛠️",
    items: [
      "Git／GitHub でのコミット・プッシュ",
      "リモートとの履歴の食い違いへの対処",
      "Live Server でのローカル確認",
    ],
  },
  {
    category: "AI活用",
    icon: "🤖",
    items: ["Claude Code での要件整理・コーディング・動作確認"],
  },
];

export type Work = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  color: "brand" | "sun" | "mint";
  link?: { label: string; href: string };
};

export const works: Work[] = [
  {
    title: "美容室「凪 -nagi-」ランディングページ",
    description:
      "20〜40代女性向けの個人経営美容室の1ページサイト。ベージュ×ブラウンの落ち着いたデザインで、スタイリスト紹介・メニュー・ギャラリー・アクセス・予約フォーム（見た目のみ）を掲載。スマホ表示とダークモードに対応。",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "💇",
    color: "sun",
    link: { label: "GitHub", href: "https://github.com/kasiyuha9528/test2" },
  },
  {
    title: "サンプル発送依頼システム 要件定義",
    description:
      "取引先へ商品サンプルを発送するための社内申請Webアプリの要件定義。申請→部門長→受付→二次承認→総務部長→手配待ちの多段承認フロー、差し戻し、ロール兼任、マスタ管理などを整理。",
    tags: ["要件定義", "Markdown"],
    icon: "📦",
    color: "mint",
    link: { label: "GitHub", href: "https://github.com/kasiyuha9528/test" },
  },
  {
    title: "自己紹介サイト（このサイト）",
    description:
      "自分のできること・作ったもの・勉強中のことを紹介するポートフォリオサイト。オレンジを基調にしたポップなデザイン。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: "🍊",
    color: "brand",
  },
];

export type Learning = {
  title: string;
  description: string;
};

export const learnings: Learning[] = [
  {
    title: "Next.js（App Router）",
    description: "このサイトの制作を通して、ページ構成やコンポーネント設計を学習中。",
  },
  {
    title: "Tailwind CSS",
    description: "ユーティリティクラスを使ったスタイリング。",
  },
  {
    title: "TypeScript",
    description: "型を使った安全なコードの書き方。",
  },
  {
    title: "Git／GitHub",
    description: "ブランチ運用やリポジトリ管理。",
  },
  {
    title: "業務アプリ開発",
    description:
      "サンプル発送依頼システムを、要件定義の次の段階（画面設計・DB設計）へ進める予定。",
  },
];

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#works", label: "Works" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];
