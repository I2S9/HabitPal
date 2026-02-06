"use client";

import { useState } from "react";

export default function TermsOfUsePage() {
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
            Terms of Use
          </h1>
          <div className="mt-6 space-y-6 text-justify text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              These Terms of Use govern your access to and use of the HabitPal
              mobile application and related services. By using HabitPal, you
              agree to be bound by these Terms. If you do not accept them,
              please do not use the app. These Terms are intended to be
              compatible with Apple&apos;s Standard End User License Agreement
              (EULA), and any additional terms do not conflict with Apple&apos;s
              EULA.
            </p>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                1. App Identification
              </h2>
              <p className="mt-2">App name: HabitPal</p>
              <p className="mt-2">Publisher/Company: HabitPal</p>
              <p className="mt-2">Contact email: contact@tryhabitpal.com</p>
              <p className="mt-2">Platform: iOS</p>
              <p className="mt-2">Governing law: France</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                2. Acceptance of Terms
              </h2>
              <p className="mt-2">
                By downloading, accessing, or using HabitPal, you agree to these
                Terms. If you do not agree, you must not use the app. You must
                be at least 13 years old (or the legal age in your country) to
                use the app.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                3. Use of the Application
              </h2>
              <p className="mt-2">
                You agree to use HabitPal only for lawful purposes and in
                accordance with these Terms. You must not use the app in a way
                that could damage, disable, or interfere with the app or its
                services. HabitPal is a habit-building and personal development
                app that helps users track habits and goals, define long-term
                goals (Dreams), plan schedules with a calendar, view analytics
                and insights, write journal entries, chat with an AI companion
                for reflection, and store positive memories in a Cookie Jar. The
                app is a self-improvement and productivity tool and does not
                provide medical, psychological, or professional advice.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                4. User Content
              </h2>
              <p className="mt-2">
                You retain all rights to your content, including habits, goals,
                journal entries, and AI chat messages. You grant HabitPal a
                worldwide, non-exclusive, royalty-free license to use, process,
                and display this content solely to operate and improve the app.
                We do not sell your content and do not share it publicly unless
                you explicitly choose to do so.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                5. Accounts
              </h2>
              <p className="mt-2">
                If you create an account, you are responsible for maintaining
                the confidentiality of your account information and for all
                activities that occur under your account. You agree to provide
                accurate information and keep it updated. HabitPal may suspend
                or terminate accounts that violate these Terms or misuse the
                app.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                6. AI Features Disclaimer
              </h2>
              <p className="mt-2">
                AI responses are generated automatically for reflection and
                productivity support. AI is not a therapist, doctor, or
                professional advisor. You should seek qualified professionals
                when needed. HabitPal is not responsible for decisions made
                based on AI responses.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                7. In-App Purchases
              </h2>
              <p className="mt-2">
                If the app offers in-app purchases or subscriptions, payments
                are processed by Apple In-App Purchases and are subject to
                Apple&apos;s terms and conditions. Apple manages billing and
                refunds according to its policies. Subscriptions may auto-renew
                unless canceled in your Apple ID settings. Any free trial, if
                offered, will be subject to the terms shown at the time of
                enrollment.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                8. Acceptable Use
              </h2>
              <p className="mt-2">
                You agree not to use the app for illegal activities, harassment,
                abuse, or hate speech, and not to attempt to reverse engineer
                the app. You must not misuse AI features or upload harmful or
                unlawful content. HabitPal may suspend or terminate access for
                violations.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                9. Intellectual Property
              </h2>
              <p className="mt-2">
                The app, design, mascots, branding, and code are the property of
                HabitPal or its licensors. You may not copy, modify, distribute,
                or create derivative works without permission.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                10. Privacy Policy
              </h2>
              <p className="mt-2">
                Your use of HabitPal is also governed by the Privacy Policy. You
                can review it at: https://habitpal.com/privacy-policy
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                11. Limitation of Liability and Warranties
              </h2>
              <p className="mt-2">
                The app is provided &quot;as is&quot; and &quot;as available&quot;
                without warranty of any kind. We do not guarantee that the app
                will be error-free or continuously available. To the maximum
                extent permitted by law, HabitPal is not liable for indirect or
                consequential damages, including loss of data, emotional
                distress, or business losses.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                12. Changes to the Terms
              </h2>
              <p className="mt-2">
                We reserve the right to modify these Terms at any time. Changes
                take effect when published in the app or on our website.
                Continued use of the app means acceptance of the updated Terms.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                13. Termination
              </h2>
              <p className="mt-2">
                You may stop using the app at any time. HabitPal may suspend or
                terminate access for violations of these Terms. For how we
                handle your data after termination, please refer to the Privacy
                Policy.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                14. Governing Law and Jurisdiction
              </h2>
              <p className="mt-2">
                These Terms are governed by the laws of France, and disputes are
                subject to the jurisdiction of the competent courts in that
                jurisdiction.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#4D1895]">
                15. Apple-Specific Terms
              </h2>
              <p className="mt-2">
                Apple is not a party to these Terms and is not responsible for
                the HabitPal app or its content. Apple has no obligation to
                provide support services. Apple is a third-party beneficiary of
                these Terms and may enforce them against you.
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
