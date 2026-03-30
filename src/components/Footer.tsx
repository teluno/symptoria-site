export default function Footer() {
  return (
    <footer class="py-12 border-t border-border">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-white">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <span class="font-sans font-bold tracking-tighter text-md">Symptoria</span>
          </div>
          
          <div class="flex gap-8 text-sm font-medium text-foreground/40">
            <a href="#" class="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" class="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="mailto:hello@symptoria.app" class="hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <div class="text-sm font-mono text-foreground/20">
            © 2026 Symptoria. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
