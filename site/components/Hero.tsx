import Image from "next/image";

export function Hero() {
  return (
    <section className="h-screen w-screen relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#1b2a4b_0,#020617_55%,#000000_100%)]">
      {/* background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-[28rem] w-[28rem] -rotate-12 rounded-[3rem] border border-primary/20 bg-white/5" />
        <div className="absolute -right-40 top-40 h-72 w-72 rotate-12 rounded-[3rem] border border-primary/10 bg-white/5" />
        <div className="absolute right-40 bottom-[-10rem] h-[26rem] w-[26rem] -rotate-6 rounded-[3rem] border border-border/20 bg-white/5" />
      </div>

      {/* content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center lg:px-0">
        {/* floating badge */}
        <div className="relative z-10 mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-[#0b1220]/80 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
          <Image
            src="/logo/siggraph-logo.png"
            alt="SIGGRAPH"
            width={100}
            height={100}
          />
        </div>

        {/* heading */}
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
          Computer Graphics
          <br />
          <span className="text-slate-200/90">at UC Irvine</span>
        </h1>

        {/* subheading */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300/70 sm:text-base">
          A student-run community dedicated to the exploration of computer
          graphics, interactive techniques, and digital art.
        </p>

        {/* cta */}
        <div className="relative mt-12 flex flex-col items-center gap-4">
          {/* glow behind button */}
          <div className="pointer-events-none absolute inset-x-0 -top-4 flex justify-center">
            <div className="h-16 w-56 rounded-full bg-primary/40 blur-3xl" />
          </div>

          <a
            href="https://discord.gg/wGP3uAkz"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-full bg-primary px-12 py-3 text-sm font-semibold tracking-wide text-[#111827] shadow-[0_20px_45px_rgba(0,0,0,0.7)] transition hover:bg-[#fbbf24]"
          >
            JOIN US
          </a>
          <p className="text-xs text-slate-300/70">
            Open to all majors • No experience required
          </p>
        </div>
      </div>
    </section>
  );
}