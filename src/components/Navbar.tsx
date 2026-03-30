import { createSignal, onMount } from 'solid-js';

export default function Navbar() {
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav 
      class={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled() ? 'w-[90%] md:w-[600px]' : 'w-[95%] md:w-[800px]'
      }`}
    >
      <div 
        class={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500 ${
          scrolled() 
            ? 'bg-surface/80 shadow-overlay py-2' 
            : 'bg-surface/40 shadow-surface'
        }`}
      >
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 flex items-center justify-center">
            <img src="/src/assets/icon.png" alt="Symptoria Icon" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="w-8 h-8 bg-accent rounded-lg items-center justify-center shadow-lg shadow-accent/20 hidden">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
          </div>
          <span class="font-sans font-bold tracking-tighter text-lg">Symptoria</span>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">Features</a>
          <a href="#privacy" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">Privacy</a>
          <a href="#waitlist" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">Waitlist</a>
        </div>

        <a 
          href="#waitlist"
          class="bg-foreground text-background px-5 py-2 rounded-full text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-foreground/5"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
