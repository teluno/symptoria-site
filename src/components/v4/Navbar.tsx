export default function V4_Navbar() {
  return (
    <nav class="fixed top-6 left-0 w-full z-50 flex justify-center px-6">
      <div class="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between w-full max-w-5xl">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-mono font-black">S</div>
          <span class="font-mono text-sm tracking-widest uppercase font-bold text-white">Symptoria</span>
        </div>
        <div class="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <a href="#hero" class="hover:text-white transition-colors">System</a>
          <a href="#features" class="hover:text-white transition-colors">Features</a>
          <a href="#security" class="hover:text-white transition-colors">Security</a>
        </div>
        <a href="#waitlist" class="px-5 py-2 bg-white text-black rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-[1.05] active:scale-[0.95] transition-all">
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
