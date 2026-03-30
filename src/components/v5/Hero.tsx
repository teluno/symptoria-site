export default function V5_Hero() {
  return (
    <section class="min-h-[90dvh] pt-40 pb-24 flex flex-col items-center justify-center text-center bg-white">
      <div class="container mx-auto px-6 max-w-4xl animate-fade-up">
        <div class="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white mb-12 mx-auto shadow-2xl shadow-accent/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </div>
        <h1 class="text-6xl md:text-9xl font-sans font-extrabold tracking-tighter leading-[0.85] mb-12">
          Health history <br />
          made simple.
        </h1>
        <p class="text-xl md:text-3xl text-foreground/40 font-medium leading-relaxed mb-16 max-w-[30ch] mx-auto">
          The private, secure, and beautiful way to track your medical timeline.
        </p>
        <div class="flex items-center justify-center gap-12 text-sm font-bold uppercase tracking-widest text-foreground/20">
          <span>Private</span>
          <span>•</span>
          <span>Secure</span>
          <span>•</span>
          <span>Local</span>
        </div>
      </div>
    </section>
  );
}
