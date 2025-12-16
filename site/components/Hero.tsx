export function Hero() {
    return (
        <section className="relative overflow-hidden bg-linary-to-b from-background via-background to-[#020617] h-screen w-screen">
            {/* background shapes */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 top-20 h-96 w-96 -rotate-40 rounded-[3rem] border border-border/1 bg-white/3 blur-xs" />
                <div className="absolute -right-30 bottom-20 h-90 w-90 rotate-12 rounded-[3rem] border border-border/1 bg-white/3 blur-xs" />
                <div className="absolute right-100 top-40 h-60 w-60 -rotate-24 rounded-[3rem] border border-border/1 bg-white/3 blur-xs" />
            </div>
        </section>
    );
}