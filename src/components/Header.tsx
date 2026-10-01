"use client";

import { useState } from "react";
import { navItems, profile } from "@/data/profile";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="rounded-full border-[3px] border-line bg-brand px-4 py-1 text-sm font-black text-on-brand shadow-pop-sm transition-transform hover:-translate-y-0.5"
        >
          {profile.name}
        </a>

        <nav className="hidden md:block" aria-label="メインメニュー">
          <ul className="flex gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 font-bold transition-colors hover:bg-sun hover:text-on-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border-[3px] border-line bg-surface md:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[3px] w-5 rounded bg-ink transition-transform ${open ? "translate-y-[4.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[3px] w-5 rounded bg-ink transition-transform ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t-[3px] border-line bg-cream md:hidden"
          aria-label="メインメニュー"
        >
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-lg font-bold hover:bg-sun hover:text-on-brand"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
