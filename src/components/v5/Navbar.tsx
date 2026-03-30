export default function V5_Navbar() {
  return (
    <nav class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" class="font-sans font-bold text-xl tracking-tight">Symptoria</a>
        <div class="flex items-center gap-8">
           <a href="#features" class="text-sm font-medium text-foreground/40 hover:text-foreground transition-colors">Features</a>
           <a href="#waitlist" class="text-sm font-bold text-foreground transition-all px-4 py-2 border border-foreground/10 rounded-lg hover:bg-foreground hover:text-white">Request Access</a>
        </div>
      </div>
    </nav>
  );
}
