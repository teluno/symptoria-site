import icon from '../assets/icon.png';

export default function Footer() {
  return (
    <footer class="py-12 border-t border-border">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <a href="/#top" class="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div class="w-6 h-6 flex items-center justify-center">
              <img src={icon.src} alt="Symptoria Icon" class="w-full h-full object-contain" />
            </div>
            <span class="font-sans font-bold tracking-tighter text-md">Symptoria</span>
          </a>
          
          <div class="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-foreground/40 md:justify-start md:gap-8">
            <a href="/privacy" class="hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" class="hover:text-foreground transition-colors">Terms</a>
            <a href="mailto:info@symptoria.app" class="hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <div class="text-sm font-mono text-foreground/20">
            © 2026 Symptoria. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
