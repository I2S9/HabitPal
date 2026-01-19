export default function Home() {
  return (
    <div className="min-h-screen bg-[#DCCAE5] font-sans">
      <header className="w-full px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-8 rounded-3xl bg-white/80 px-8 py-5 text-center backdrop-blur">
          <div className="flex items-center gap-4 justify-self-start">
            <img
              src="/assets/habitpal-logo.png"
              alt="HabitPal logo"
              className="h-12 w-12 shrink-0"
            />
            <span className="text-xl font-semibold text-slate-900">
              HabitPal
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-lg font-medium text-slate-800 justify-self-center">
            <a className="transition-colors hover:text-slate-950" href="#">
              Features
            </a>
            <a className="transition-colors hover:text-slate-950" href="#">
              Rating
            </a>
            <a className="transition-colors hover:text-slate-950" href="#">
              Contact
            </a>
            <a className="transition-colors hover:text-slate-950" href="#">
              About Us
            </a>
          </div>
          <div className="flex items-center gap-3 justify-self-end">
            <a
              href="#"
              className="inline-flex items-center"
              aria-label="Download on the App Store"
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
            >
              <img
                src="/assets/google-play-store-logo-png.webp"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
