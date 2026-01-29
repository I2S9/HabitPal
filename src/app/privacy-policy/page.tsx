"use client";

import { useState } from "react";

export default function PrivacyPolicyPage() {
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
                href="#"
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
        <section className="mx-auto w-full max-w-4xl">
          <h1 className="text-4xl font-semibold text-[#4D1895] sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-6 space-y-6 text-justify text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              This Privacy Policy explains how HabitPal collects, uses, and
              protects information when you use the HabitPal mobile application
              and related services. It is designed to be clear, complete, and
              compliant with Apple App Store requirements as well as applicable
              privacy laws.
            </p>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                1. App Overview
              </h2>
              <p className="mt-2">
                HabitPal is a habit-building and personal development app for
                iOS (built with React Native / Expo). It helps users create and
                track habits, define long-term goals, plan daily schedules in a
                calendar, view analytics and insights, write journal entries,
                chat with an AI companion for reflection, and store positive
                memories in a Cookie Jar. The app focuses on well-being,
                productivity, self-improvement, and reflection.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                2. Information We Collect
              </h2>
              <p className="mt-2">
                We collect only the information necessary to provide and improve
                HabitPal. Depending on how you use the app, we may collect:
              </p>
              <p className="mt-2">
                Account information such as email address and username, user
                content you create (habits, goals, journal entries, calendar
                events, reflections, and Cookie Jar items), AI chat messages
                submitted to generate responses, usage data about interactions
                with features, device data such as OS version and app version,
                and analytics, crash, and performance data to improve stability.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                3. How We Use Information
              </h2>
              <p className="mt-2">
                We use information to provide app functionality, personalize
                your experience, maintain your account, sync your data across
                devices, provide AI chat responses, improve features, monitor
                reliability, and comply with legal obligations. We do not use
                your personal data for advertising profiling or marketing
                without consent.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                4. Sensitive and Personal Data
              </h2>
              <p className="mt-2">
                Journal entries, reflections, and AI chat conversations are
                treated as private content. We do not sell personal data. We do
                not track you across apps or websites, and we do not use your
                data for targeted advertising.
              </p>
              <p className="mt-2">
                If you use AI features, your messages may be processed by an AI
                service to generate responses. These messages are used only to
                provide the feature, not to sell or advertise. AI responses are
                informational and do not replace medical, psychological, or
                professional advice.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                5. Data Sharing and Third-Party Services
              </h2>
              <p className="mt-2">
                We may use third-party services to operate HabitPal, such as
                analytics providers (for example, Firebase or Amplitude), cloud
                hosting or databases, AI service providers for generating
                responses, and crash reporting tools. Information shared is
                limited to what is required for these services to function and
                improve the app. These providers are governed by their own
                privacy policies.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                6. Legal Bases and Your Rights
              </h2>
              <p className="mt-2">
                For users in the European Economic Area and the United Kingdom,
                we process personal data based on consent, contract performance,
                legitimate interests in improving the app, and legal obligations
                (as applicable). You have rights to access, correct, delete, or
                export your data, and to withdraw consent at any time.
              </p>
              <p className="mt-2">
                For California residents, we comply with the CCPA/CPRA. You have
                the right to know what personal information we collect, to
                request deletion, to correct inaccurate information, to opt out
                of the sale or sharing of personal information (we do not sell
                or share for advertising), and to receive data in a portable
                format.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                7. Apple App Store Requirements
              </h2>
              <p className="mt-2">
                HabitPal collects only data necessary for app functionality and
                improvement. We do not engage in tracking without your consent,
                and we will request App Tracking Transparency permission if
                tracking is ever introduced. HabitPal is not directed to
                children under 13, and we do not knowingly collect data from
                children.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                8. Data Retention and Security
              </h2>
              <p className="mt-2">
                We retain personal data only as long as necessary to provide the
                service and meet legal requirements. We use reasonable security
                measures, including encryption in transit and access controls,
                to protect your data. If you delete your account, we will delete
                or de-identify your personal data within a reasonable timeframe,
                unless retention is required by law.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                9. Changes to This Policy
              </h2>
              <p className="mt-2">
                We may update this Privacy Policy from time to time. If we make
                material changes, we will notify you through the app or by other
                reasonable means. The updated policy will be effective when
                posted.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                10. Contact Information
              </h2>
              <p className="mt-2">Company/Publisher: HabitPal</p>
              <p className="mt-2">
                Contact Email: privacy@habitpal.app
              </p>
              <p className="mt-2">Country/Jurisdiction: France</p>
              <p className="mt-2">
                You can contact us to exercise your privacy rights or ask
                questions about this policy.
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
