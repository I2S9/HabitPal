"use client";

import { useState } from "react";

export default function AboutUsPage() {
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
      <main className="flex-1 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl font-semibold text-[#4D1895] sm:text-5xl">
            About Us
          </h1>
          <div className="mt-6 space-y-6 text-justify text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              HabitPal is built for people who want steady progress, clear
              priorities, and a simple way to turn long-term dreams into daily
              action. We believe lasting change happens through small, consistent
              steps, supported by tools that make reflection and planning easy.
            </p>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                Our Mission
              </h2>
              <p className="mt-2">
                Our mission is to help you build habits that stick and create a
                healthier, more intentional life. HabitPal focuses on clarity,
                motivation, and accountability without adding stress or noise to
                your day.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                What We Build
              </h2>
              <p className="mt-2">
                HabitPal brings together habit tracking, long-term goal planning,
                a calendar for daily schedules, progress analytics, private
                journaling, an AI companion for reflection, and a Cookie Jar to
                save positive memories and achievements. Everything is designed
                to keep your progress visible and your goals within reach.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                Our Values
              </h2>
              <p className="mt-2">
                We prioritize privacy, clarity, and consistency. We design
                features that respect your time, help you focus on what matters,
                and support meaningful growth over quick fixes.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                Get in Touch
              </h2>
              <p className="mt-2">
                For questions, partnerships, or feedback, email us at{" "}
                contact@tryhabitpal.com.
              </p>
            </div>
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
            <div className="grid gap-8 sm:grid-cols-2">
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
