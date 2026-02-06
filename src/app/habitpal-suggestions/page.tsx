"use client";

import { useState } from "react";

export default function HabitPalSuggestionsPage() {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen flex-col bg-[#DCCAE5] font-sans"
      id="top"
    >
      <header className="sticky top-0 z-40 w-full px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-3xl bg-white/80 px-5 py-4 backdrop-blur md:grid md:grid-cols-[auto_1fr_auto] md:gap-8 md:px-8 md:py-5 md:text-center">
          <a
            href="/#top"
            className="flex items-center gap-2 md:gap-4 md:justify-self-start"
            aria-label="Back to home"
          >
            <img
              src="/assets/habitpal-logo.png"
              alt="HabitPal logo"
              className="h-9 w-9 shrink-0 md:h-12 md:w-12"
            />
            <span className="text-base font-semibold text-slate-900 md:text-xl">
              HabitPal
            </span>
          </a>
          <div className="hidden flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-800 md:flex md:gap-6 md:text-lg md:justify-self-center">
            <a
              className="transition-colors hover:text-slate-950"
              href="/#achieve-goals"
            >
              Features
            </a>
            <a
              className="transition-colors hover:text-slate-950"
              href="/#success-stories"
            >
              Rating
            </a>
            <a
              className="transition-colors hover:text-slate-950"
              href="mailto:contact@tryhabitpal.com"
            >
              Contact
            </a>
            <a
              className="transition-colors hover:text-slate-950"
              href="/about-us"
            >
              About Us
            </a>
          </div>
          <div className="hidden items-center justify-center gap-2 md:flex md:gap-3 md:justify-self-end">
            <a
              href="#"
              className="inline-flex items-center"
              aria-label="Download on the App Store"
              onClick={(event) => {
                event.preventDefault();
                setIsComingSoonOpen(true);
              }}
            >
              <img
                src="/assets/get-it-on-apple.png"
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center"
              aria-label="Get it on Google Play"
              onClick={(event) => {
                event.preventDefault();
                setIsComingSoonOpen(true);
              }}
            >
              <img
                src="/assets/google-play-store-logo-png.webp"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-white"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              <span>Menu</span>
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
        {isMobileMenuOpen ? (
          <div
            id="mobile-nav"
            className="mx-auto mt-3 w-full max-w-6xl rounded-3xl bg-white/90 px-5 py-4 text-center backdrop-blur md:hidden"
          >
            <div className="flex flex-col items-center gap-3 text-sm font-medium text-slate-800">
              <a
                className="transition-colors hover:text-slate-950"
                href="/#achieve-goals"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                className="transition-colors hover:text-slate-950"
                href="/#success-stories"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rating
              </a>
              <a
                className="transition-colors hover:text-slate-950"
                href="mailto:contact@tryhabitpal.com"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                className="transition-colors hover:text-slate-950"
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                <a
                  href="#"
                  className="inline-flex items-center"
                  aria-label="Download on the App Store"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsComingSoonOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <img
                    src="/assets/get-it-on-apple.png"
                    alt="Download on the App Store"
                    className="h-8 w-auto"
                  />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center"
                  aria-label="Get it on Google Play"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsComingSoonOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <img
                    src="/assets/google-play-store-logo-png.webp"
                    alt="Get it on Google Play"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <main className="flex flex-1 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
          <h1 className="text-4xl font-semibold text-[#4D1895] sm:text-5xl">
            HabitPal suggestions
          </h1>
          <div className="mt-6 space-y-6 text-justify text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              We welcome feature ideas, improvement suggestions, and bug reports
              to make HabitPal better for everyone.
            </p>
            <div className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center">
              <div className="relative w-full min-w-0 sm:flex-1">
                <label className="sr-only" htmlFor="suggestions-search">
                  Search suggestions
                </label>
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.9 14.32a7.5 7.5 0 1 1 1.41-1.41l3.39 3.38a1 1 0 0 1-1.42 1.42l-3.38-3.39zM8.5 14.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </span>
                <input
                  id="suggestions-search"
                  type="text"
                  placeholder="Search suggestions"
                  className="w-full rounded-full border border-black/10 bg-white px-11 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#4D1895] focus:ring-2 focus:ring-[#4D1895]/30"
                />
              </div>
              <div className="relative w-full sm:w-44">
                <label className="sr-only" htmlFor="suggestions-type">
                  Filter type
                </label>
                <select
                  id="suggestions-type"
                  className="w-full appearance-none rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#4D1895] focus:ring-2 focus:ring-[#4D1895]/30"
                  defaultValue="all"
                >
                  <option value="all">All types</option>
                  <option value="feature">Features</option>
                  <option value="bug">Bugs</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
                  </svg>
                </span>
              </div>
              <div className="relative w-full sm:w-48">
                <label className="sr-only" htmlFor="suggestions-sort">
                  Sort suggestions
                </label>
                <select
                  id="suggestions-sort"
                  className="w-full appearance-none rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#4D1895] focus:ring-2 focus:ring-[#4D1895]/30"
                  defaultValue="date"
                >
                  <option value="date">Sort by date</option>
                  <option value="rating">Sort by rating</option>
                  <option value="alphabetical">Sort A to Z</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
                  </svg>
                </span>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#4D1895] text-white transition-colors hover:bg-[#3C1374]"
                aria-label="Add a suggestion"
                title="Add a suggestion"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z" />
                </svg>
              </button>
            </div>
            <div
              className="flex-1 rounded-3xl bg-white"
              aria-hidden="true"
            />
          </div>
        </section>
      </main>
      <footer className="w-full px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl rounded-3xl bg-[#4D1895] px-8 py-10 text-white">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/habitpal-logo.png"
                  alt="HabitPal logo"
                  className="h-10 w-10 shrink-0"
                />
                <span className="text-xl font-semibold">HabitPal</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center"
                  aria-label="Download on the App Store"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsComingSoonOpen(true);
                  }}
                >
                  <img
                    src="/assets/get-it-on-apple.png"
                    alt="Download on the App Store"
                    className="h-10 w-auto"
                  />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center"
                  aria-label="Get it on Google Play"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsComingSoonOpen(true);
                  }}
                >
                  <img
                    src="/assets/google-play-store-logo-png.webp"
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
              <p className="text-sm text-white/80">
                Copyright 2026, All rights reserved
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
                  Legal
                </p>
                <a
                  className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                  href="/terms-of-use"
                >
                  Terms of use
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
                  Feedback
                </p>
                <a
                  className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                  href="/habitpal-suggestions"
                >
                  Suggest a feature
                </a>
                <a
                  className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                  href="/habitpal-suggestions"
                >
                  Report a bug
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
                  Company
                </p>
                <a
                  className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                  href="mailto:contact@tryhabitpal.com"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {isComingSoonOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          <div className="relative w-full max-w-md rounded-3xl bg-white px-10 py-12 text-center shadow-lg">
            <button
              type="button"
              className="absolute right-6 top-4 text-slate-500 transition-colors hover:text-slate-700"
              aria-label="Close"
              onClick={() => setIsComingSoonOpen(false)}
            >
              x
            </button>
            <p
              id="coming-soon-title"
              className="text-3xl font-semibold tracking-tight text-[#4D1895]"
            >
              Coming Soon
            </p>
            <div className="mt-8 flex flex-col items-center gap-5">
              <img
                src="/assets/habitpal-logo.png"
                alt="HabitPal logo"
                className="h-24 w-24"
              />
              <p className="text-2xl font-semibold text-slate-900">HabitPal</p>
              <p className="text-base leading-7 text-slate-600">
                We&apos;re working on something amazing! Stay tuned for updates.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
