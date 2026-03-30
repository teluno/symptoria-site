export default function V3_Navbar() {
  return (
    <nav class="fixed top-0 left-0 w-full z-50 py-8 pointer-events-none">
      <div class="container mx-auto px-6 flex justify-center">
        <div class="bg-white/40 backdrop-blur-md border border-black/5 rounded-full px-8 py-3 flex items-center gap-12 pointer-events-auto shadow-sm">
          <a href="#" class="font-serif italic text-2xl tracking-tight text-[#2F3437]">Symptoria</a>
          <div class="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-[#2F3437]/60">
            <a href="#features" class="hover:text-[#2F3437] transition-colors">Experience</a>
            <a href="#philosophy" class="hover:text-[#2F3437] transition-colors">Philosophy</a>
            <a href="#waitlist" class="hover:text-[#2F3437] transition-colors underline underline-offset-4 decoration-accent/30">Get Invited</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
