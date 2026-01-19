export default function Home() {
  return (
    <div className="min-h-screen bg-[#DCCAE5] font-sans">
      <header className="w-full px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-8 rounded-3xl bg-white/80 px-8 py-5 text-center backdrop-blur">
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
          <div className="h-12 w-12 justify-self-end" aria-hidden="true" />
        </nav>
      </header>
    </div>
  );
}
