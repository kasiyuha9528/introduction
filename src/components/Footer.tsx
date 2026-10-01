import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-line bg-brand py-6 text-center text-sm font-bold text-on-brand">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
