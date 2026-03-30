export default function V2_Navbar() {
  return (
    <nav class="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-black">
      <div class="container mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-black flex items-center justify-center text-white font-mono font-bold">SY</div>
          <span class="font-mono font-black text-xl tracking-tighter uppercase">Symptoria</span>
        </div>
        <div class="hidden md:flex items-center divide-x-2 divide-black border-x-2 border-black h-16">
          <a href="#features" class="px-8 h-full flex items-center text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">Features</a>
          <a href="#privacy" class="px-8 h-full flex items-center text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">Privacy</a>
          <a href="#waitlist" class="px-8 h-full flex items-center text-sm font-bold uppercase bg-accent text-white hover:bg-black transition-colors">Join Waitlist</a>
        </div>
        <div class="md:hidden font-mono text-xs font-bold border-2 border-black px-2 py-1 uppercase">Menu</div>
      </div>
    </nav>
  );
}
