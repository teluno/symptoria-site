import { createSignal, onMount } from 'solid-js';
import icon from '../assets/icon.png';

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
        scrolled() ? 'w-[90%] max-w-[600px]' : 'w-[95%] max-w-[800px]'
      }`}
    >
      <div 
        class={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500 ${
          scrolled() 
            ? 'bg-surface/80 shadow-overlay py-2' 
            : 'bg-surface/40 shadow-surface'
        }`}
      >
        <a href="/#top" class="flex items-center gap-2">
          <div class="w-8 h-8 flex items-center justify-center">
            <img src={icon.src} alt="Symptoria Icon" class="w-full h-full object-contain" />
          </div>
          <span class="font-sans font-bold tracking-tighter text-lg">Symptoria</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a href="/#features" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">Features</a>
          <a href="/#waitlist" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">Waitlist</a>
        </div>

        <a 
          href="/#waitlist"
          class="bg-foreground text-background px-5 py-2 rounded-full text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-foreground/5"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
