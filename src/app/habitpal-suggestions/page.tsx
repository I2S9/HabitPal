"use client";

import { useState, useRef, useEffect } from "react";

type Submission = {
  id: number;
  username: string;
  category: "feature" | "bug" | "review";
  message: string;
  date: string;
  upvotes: number;
  rating?: number;
};

export default function HabitPalSuggestionsPage() {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [formUsername, setFormUsername] = useState("");
  const [formCategory, setFormCategory] = useState<
    "feature" | "bug" | "review"
  >("feature");
  const [formMessage, setFormMessage] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [searchQuery, setSearchQuery] = useState("");
  const [formRating, setFormRating] = useState(0);
  const [upvotedIds, setUpvotedIds] = useState<Set<number>>(new Set());
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFormCategoryOpen, setIsFormCategoryOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const formCategoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node))
        setIsFilterOpen(false);
      if (sortRef.current && !sortRef.current.contains(e.target as Node))
        setIsSortOpen(false);
      if (
        formCategoryRef.current &&
        !formCategoryRef.current.contains(e.target as Node)
      )
        setIsFormCategoryOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = () => {
    if (!formUsername.trim() || !formMessage.trim()) return;
    if (formCategory === "review" && formRating === 0) return;
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const newSubmission: Submission = {
      id: Date.now(),
      username: formUsername.trim(),
      category: formCategory,
      message: formMessage.trim(),
      date: dateStr,
      upvotes: 0,
      ...(formCategory === "review" ? { rating: formRating } : {}),
    };
    setSubmissions((prev) => [newSubmission, ...prev]);
    setFormUsername("");
    setFormMessage("");
    setFormCategory("feature");
    setFormRating(0);
    setIsFormOpen(false);
  };

  const handleSolved = (id: number) => {
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
  };

  const handleUpvote = (id: number) => {
    if (upvotedIds.has(id)) return;
    setUpvotedIds((prev) => new Set(prev).add(id));
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, upvotes: s.upvotes + 1 } : s))
    );
  };

  const categoryLabel = (cat: string) => {
    if (cat === "feature") return "Feature";
    if (cat === "bug") return "Bug";
    return "Review";
  };

  const categoryColor = (cat: string) => {
    if (cat === "feature") return "bg-[#4D1895] text-white";
    if (cat === "bug") return "bg-red-500 text-white";
    return "bg-amber-400 text-slate-900";
  };

  const filtered = submissions
    .filter((s) => {
      if (filterType !== "all" && s.category !== filterType) return false;
      if (
        searchQuery.trim() &&
        !s.message.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !s.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.upvotes - a.upvotes;
      if (sortBy === "alphabetical")
        return a.message.localeCompare(b.message);
      return b.id - a.id;
    });

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
      <main className="flex-1 px-4 pt-10 sm:px-6 lg:px-8">
        <section className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl font-semibold text-[#4D1895] sm:text-5xl">
            HabitPal suggestions
          </h1>
          <div className="mt-6 flex flex-col gap-6 text-sm leading-7 text-slate-700 sm:text-base">
            <p className="text-justify">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-black/10 bg-white px-11 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#4D1895] focus:ring-2 focus:ring-[#4D1895]/30"
                />
              </div>
              <div className="relative w-full sm:w-44" ref={filterRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsFilterOpen(!isFilterOpen);
                    setIsSortOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-full border bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition ${isFilterOpen ? "border-[#4D1895] ring-2 ring-[#4D1895]/30" : "border-black/10 hover:border-[#4D1895]/40"}`}
                >
                  <span>
                    {
                      { all: "All types", feature: "Features", bug: "Bugs", review: "Reviews" }[filterType]
                    }
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isFilterOpen ? "rotate-180" : ""}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
                  </svg>
                </button>
                {isFilterOpen && (
                  <div className="absolute left-0 z-50 mt-2 w-full overflow-hidden rounded-2xl border border-[#4D1895]/15 bg-white py-1 shadow-lg shadow-[#4D1895]/10">
                    {[
                      { value: "all", label: "All types" },
                      { value: "feature", label: "Features" },
                      { value: "bug", label: "Bugs" },
                      { value: "review", label: "Reviews" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setFilterType(opt.value);
                          setIsFilterOpen(false);
                        }}
                        className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors ${
                          filterType === opt.value
                            ? "bg-[#4D1895]/10 font-medium text-[#4D1895]"
                            : "text-slate-700 hover:bg-[#4D1895]/5 hover:text-[#4D1895]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative w-full sm:w-48" ref={sortRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsSortOpen(!isSortOpen);
                    setIsFilterOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-full border bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition ${isSortOpen ? "border-[#4D1895] ring-2 ring-[#4D1895]/30" : "border-black/10 hover:border-[#4D1895]/40"}`}
                >
                  <span>
                    {
                      { date: "Sort by date", rating: "Sort by rating", alphabetical: "Sort A to Z" }[sortBy]
                    }
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
                  </svg>
                </button>
                {isSortOpen && (
                  <div className="absolute left-0 z-50 mt-2 w-full overflow-hidden rounded-2xl border border-[#4D1895]/15 bg-white py-1 shadow-lg shadow-[#4D1895]/10">
                    {[
                      { value: "date", label: "Sort by date" },
                      { value: "rating", label: "Sort by rating" },
                      { value: "alphabetical", label: "Sort A to Z" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setSortBy(opt.value);
                          setIsSortOpen(false);
                        }}
                        className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors ${
                          sortBy === opt.value
                            ? "bg-[#4D1895]/10 font-medium text-[#4D1895]"
                            : "text-slate-700 hover:bg-[#4D1895]/5 hover:text-[#4D1895]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
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
            {filtered.length === 0 ? (
              <p className="py-28 text-center text-base text-[#4D1895]">
                No submissions yet. Be the first to share your thoughts.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {filtered.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-start gap-4 rounded-2xl bg-white px-5 py-4"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900">
                          {s.username}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColor(s.category)}`}
                        >
                          {categoryLabel(s.category)}
                        </span>
                        <span className="text-xs text-slate-400">{s.date}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {s.message}
                      </p>
                      {s.category === "review" && s.rating && (
                        <div className="mt-2 flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              viewBox="0 0 24 24"
                              className="h-4 w-4"
                              fill={star <= s.rating! ? "#FACC15" : "none"}
                              stroke={star <= s.rating! ? "#FACC15" : "#cbd5e1"}
                              strokeWidth="1.5"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
                              />
                            </svg>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleUpvote(s.id)}
                        className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                          upvotedIds.has(s.id)
                            ? "bg-[#4D1895] text-white"
                            : "cursor-pointer bg-[#DCCAE5] text-[#4D1895] hover:bg-[#cbb8d9]"
                        }`}
                        aria-label={`Upvote (${s.upvotes})`}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 5.83l-4.29 4.3a1 1 0 0 1-1.42-1.42l5-5a1 1 0 0 1 1.42 0l5 5a1 1 0 0 1-1.42 1.42L10 5.83z" />
                        </svg>
                        <span>{s.upvotes}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSolved(s.id)}
                        className="flex cursor-pointer flex-col items-center gap-0.5 rounded-xl bg-emerald-100 px-3 py-2 text-xs font-medium text-emerald-600 transition-colors hover:bg-emerald-200 hover:text-emerald-700"
                        aria-label="Mark as solved"
                        title="Mark as solved"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Solved</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <footer className="w-full px-4 pb-10 pt-6 sm:px-6 lg:px-8">
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
      {isFormOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="form-title"
        >
          <div className="relative w-full max-w-lg rounded-3xl bg-white px-8 py-10">
            <button
              type="button"
              className="absolute right-6 top-4 text-slate-500 transition-colors hover:text-slate-700"
              aria-label="Close"
              onClick={() => setIsFormOpen(false)}
            >
              <svg
                viewBox="0 0 20 20"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <p
              id="form-title"
              className="text-2xl font-semibold text-[#4D1895]"
            >
              New submission
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <div>
                <label
                  htmlFor="form-username"
                  className="text-sm font-medium text-slate-700"
                >
                  Username
                </label>
                <input
                  id="form-username"
                  type="text"
                  value={formUsername}
                  onChange={(e) => setFormUsername(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#4D1895] focus:ring-2 focus:ring-[#4D1895]/30"
                />
              </div>
              <div>
                <label
                  htmlFor="form-category"
                  className="text-sm font-medium text-slate-700"
                >
                  Category
                </label>
                <div className="relative mt-1" ref={formCategoryRef}>
                  <button
                    type="button"
                    onClick={() => setIsFormCategoryOpen(!isFormCategoryOpen)}
                    className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition ${isFormCategoryOpen ? "border-[#4D1895] ring-2 ring-[#4D1895]/30" : "border-black/10 hover:border-[#4D1895]/40"}`}
                  >
                    <span>
                      {
                        { feature: "Feature suggestion", bug: "Bug report", review: "Review" }[formCategory]
                      }
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isFormCategoryOpen ? "rotate-180" : ""}`}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
                    </svg>
                  </button>
                  {isFormCategoryOpen && (
                    <div className="absolute left-0 z-50 mt-2 w-full overflow-hidden rounded-2xl border border-[#4D1895]/15 bg-white py-1 shadow-lg shadow-[#4D1895]/10">
                      {[
                        { value: "feature" as const, label: "Feature suggestion" },
                        { value: "bug" as const, label: "Bug report" },
                        { value: "review" as const, label: "Review" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setFormCategory(opt.value);
                            setIsFormCategoryOpen(false);
                          }}
                          className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors ${
                            formCategory === opt.value
                              ? "bg-[#4D1895]/10 font-medium text-[#4D1895]"
                              : "text-slate-700 hover:bg-[#4D1895]/5 hover:text-[#4D1895]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {formCategory === "review" && (
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Rating
                  </label>
                  <div className="mt-1 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormRating(star)}
                        className="cursor-pointer p-0.5 transition-transform hover:scale-110"
                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7"
                          fill={star <= formRating ? "#FACC15" : "none"}
                          stroke={star <= formRating ? "#FACC15" : "#94a3b8"}
                          strokeWidth="1.5"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <label
                  htmlFor="form-message"
                  className="text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Describe your suggestion, review, or bug..."
                  className="mt-1 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#4D1895] focus:ring-2 focus:ring-[#4D1895]/30"
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-2 w-full cursor-pointer rounded-full bg-[#4D1895] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3C1374]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : null}
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
