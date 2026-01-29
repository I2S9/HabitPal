"use client";

import { useState } from "react";

export default function Home() {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const testimonialColumns = [
    [
      {
        name: "David Chen",
        initials: "DC",
        accent: "light",
        result: "Completed 4 goals this quarter",
        quote:
          "The planning flow is simple and keeps me focused on the habits that matter. I can see progress at a glance and stay motivated.",
      },
      {
        name: "Emily Rogers",
        initials: "ER",
        accent: "dark",
        result: "Built a daily routine in 8 weeks",
        quote:
          "HabitPal helped me stick to my morning routine and stay consistent without stress. The reminders are gentle and actually work.",
      },
      {
        name: "Sophia Martin",
        initials: "SM",
        accent: "lighter",
        result: "Tracked 120 days in a row",
        quote:
          "Seeing my streaks grow every day keeps me motivated and proud of my progress. It feels rewarding to check in daily.",
      },
    ],
    [
      {
        name: "Noah Patel",
        initials: "NP",
        accent: "dark",
        result: "Reached a long-term fitness goal",
        quote:
          "Small check-ins and progress charts make long goals feel achievable. It breaks everything into steps I can handle.",
      },
      {
        name: "Amira Hassan",
        initials: "AH",
        accent: "lighter",
        result: "Balanced work and wellness",
        quote:
          "The daily planner makes my priorities clear and keeps my energy steady. I finally know what to focus on each day.",
      },
      {
        name: "Julia Santos",
        initials: "JS",
        accent: "light",
        result: "Stayed consistent for 6 months",
        quote:
          "I finally have a system that works. HabitPal keeps everything in one place, so I do not lose track anymore.",
      },
    ],
    [
      {
        name: "Lucas Meyer",
        initials: "LM",
        accent: "dark",
        result: "Improved focus and clarity",
        quote:
          "The reminders are subtle but effective. I feel more in control every day and I waste less time deciding.",
      },
      {
        name: "Priya Sharma",
        initials: "PS",
        accent: "lighter",
        result: "Built a reading habit",
        quote:
          "HabitPal made it easy to track my progress and celebrate small wins. It keeps me consistent without pressure.",
      },
      {
        name: "Ethan Cole",
        initials: "EC",
        accent: "light",
        result: "Completed 30 days of journaling",
        quote:
          "The layout is clean and helps me stay consistent without feeling overwhelmed. I actually look forward to checking in.",
      },
    ],
    [
      {
        name: "Marcus Lee",
        initials: "ML",
        accent: "dark",
        result: "Built healthier daily habits",
        quote:
          "The tracking is smooth and I can see my momentum building over time. It makes me want to keep going.",
      },
      {
        name: "Olivia Novak",
        initials: "ON",
        accent: "lighter",
        result: "Hit weekly goals consistently",
        quote:
          "I love how simple it is to set goals and review my progress each week. The summaries make it easy to reflect.",
      },
      {
        name: "Isabella Torres",
        initials: "IT",
        accent: "light",
        result: "Stayed on track with planning",
        quote:
          "HabitPal keeps me aligned with my priorities without adding extra work. It fits into my routine perfectly.",
      },
    ],
  ];
  return (
    <div
      className="flex min-h-screen flex-col bg-[#DCCAE5] font-sans"
      id="top"
    >
      <header className="sticky top-0 z-40 w-full px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-3xl bg-white/80 px-5 py-4 backdrop-blur md:grid md:grid-cols-[auto_1fr_auto] md:gap-8 md:px-8 md:py-5 md:text-center">
          <a
            href="#top"
            className="flex items-center gap-2 md:gap-4 md:justify-self-start"
            aria-label="Back to top"
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
            <a className="transition-colors hover:text-slate-950" href="#">
              Features
            </a>
            <a
              className="transition-colors hover:text-slate-950"
              href="#success-stories"
            >
              Rating
            </a>
            <a
              className="transition-colors hover:text-slate-950"
              href="mailto:contact@tryhabitpal.com"
            >
              Contact
            </a>
            <a className="transition-colors hover:text-slate-950" href="#">
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
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
               <a
                 className="transition-colors hover:text-slate-950"
                 href="#success-stories"
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
                href="#"
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
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-slate-700">
              <span className="font-medium">Loved by 5M users</span>
              <span className="text-slate-500">with 4.9 rating</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-[#4D1895] sm:text-5xl">
                Meet HabitPal
          </h1>
              <p className="text-3xl font-semibold leading-snug text-slate-900 sm:text-4xl">
                Track your habits and goals with daily focus and clarity
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-700">
              Meet HabitPal, the app that helps you build lasting habits, plan
              your days, and stay accountable to your long-term goals with
              clear progress tracking.
            </p>
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
                  className="h-11 w-auto"
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
                  className="h-11 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/astronaut.png"
              alt="HabitPal mascot floating in space"
              className="h-auto w-full max-w-md"
            />
          </div>
        </section>
        <div
          className="mx-auto mt-12 max-w-3xl text-center"
          id="achieve-goals"
        >
          <p className="text-3xl font-semibold leading-tight text-[#4D1895] sm:text-4xl">
            Achieve your goals
          </p>
          <p className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
            <span className="bg-linear-to-r from-[#E6B3F7] via-[#B55AF5] to-[#4D1895] bg-clip-text text-transparent">
              <span className="text-4xl font-semibold sm:text-5xl">4.2x</span>{" "}
              Faster
            </span>
          </p>
        </div>
      </main>
      <div className="w-full px-4 pb-2 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl justify-center">
          <a
            href="#"
            className="rounded-full bg-[#4D1895] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3C1374] sm:px-8 sm:text-base"
          >
            Turn big dreams into action
          </a>
        </div>
      </div>
      <section
        className="w-full px-4 pb-10 pt-4 sm:px-6 lg:px-8"
        id="why-choose"
      >
        <div className="mx-auto w-full max-w-6xl text-center">
          <h2 className="text-3xl font-semibold text-[#4D1895] sm:text-4xl">
            Why choose HabitPal
          </h2>
          <p className="mt-2 text-base text-slate-700">
            Practical tools that keep your goals clear and your habits on track.
          </p>
        </div>
        <div className="mx-auto mt-10 w-full max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6">
              <img
                src="/assets/dumbbell.png"
                alt="Dumbbell icon"
                className="h-20 w-20"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Build lasting habits
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Create routines that stick with reminders, streaks, and progress
                insights designed for long-term consistency.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6">
              <img
                src="/assets/clock.png"
                alt="Clock icon"
                className="h-20 w-20"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Plan your days
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Keep priorities visible with a focused daily planner that turns
                big goals into clear, manageable steps.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6">
              <img
                src="/assets/progress.png"
                alt="Progress icon"
                className="h-20 w-20"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Track real progress
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Visualize growth over time with simple metrics that keep you
                motivated and accountable.
              </p>
            </div>
          </div>
        </div>
      </section>
       <section
         className="w-full scroll-mt-28 px-4 pb-16 pt-4 sm:px-6 lg:px-8"
         id="success-stories"
       >
        <div className="mx-auto w-full max-w-6xl text-center">
          <h2 className="text-3xl font-semibold text-[#4D1895] sm:text-4xl">
            Success stories
          </h2>
          <p className="mt-2 text-base text-slate-700">
            From real people, with real results.
          </p>
        </div>
        <div className="mx-auto mt-10 w-full max-w-6xl rounded-3xl bg-white/70 p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonialColumns.map((column, columnIndex) => (
              <div
                key={`column-${columnIndex}`}
                className={`overflow-hidden rounded-3xl p-2 ${
                  columnIndex === 0 ? "block" : "hidden"
                } h-[420px] sm:block sm:h-[520px]`}
              >
                <div
                  className={`testimonial-track flex flex-col gap-4 ${
                    columnIndex % 2 === 0
                      ? "testimonial-track--slow"
                      : "testimonial-track--fast testimonial-track--offset"
                  }`}
                >
                  {[...column, ...column].map((testimonial, index) => (
                    <div
                      key={`${testimonial.name}-${index}`}
                      aria-hidden={index >= column.length}
                      className="rounded-2xl bg-white px-5 py-4 text-left shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                            testimonial.accent === "light"
                              ? "bg-[#B88AF4] text-white"
                              : testimonial.accent === "lighter"
                              ? "bg-[#D7C4F9] text-[#4D1895]"
                              : "bg-[#4D1895] text-white"
                          }`}
                        >
                          {testimonial.initials}
                        </div>
                        <p
                          className={`text-sm font-semibold ${
                            testimonial.accent === "light"
                              ? "text-[#B88AF4]"
                              : testimonial.accent === "lighter"
                              ? "text-[#9D7BEA]"
                              : "text-[#4D1895]"
                          }`}
                        >
                          {testimonial.name}
                        </p>
                      </div>
                      <p className="mt-3 text-sm font-semibold text-slate-900">
                        {testimonial.result}
                      </p>
                      <div
                        className="mt-2 flex items-center gap-0.5 text-amber-400"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            key={`${testimonial.name}-star-${starIndex}`}
                            viewBox="0 0 20 20"
                            className="h-5 w-5"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.998 1.667c.35 0 .7.2.858.6l1.87 4.63 4.98.36c.86.06 1.22 1.14.57 1.7l-3.83 3.28 1.16 4.84c.2.83-.68 1.5-1.4 1.05l-4.21-2.6-4.21 2.6c-.72.45-1.6-.22-1.4-1.05l1.16-4.84-3.83-3.28c-.65-.56-.29-1.64.57-1.7l4.98-.36 1.87-4.63c.16-.4.51-.6.86-.6z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {testimonial.quote}
          </p>
        </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
                  href="#"
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
