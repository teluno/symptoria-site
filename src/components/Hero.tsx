export default function Hero() {
  return (
    <section class="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div class="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -z-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/3 -z-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="max-w-2xl animate-fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Reimagining Health Records
          </div>
          
          <h1 class="text-5xl md:text-7xl font-sans font-extrabold tracking-tighter leading-[0.9] mb-6">
            Your health history, <br />
            <span class="text-accent">finally organized.</span>
          </h1>
          
          <p class="text-lg md:text-xl text-foreground/60 leading-relaxed mb-10 max-w-[50ch]">
            Symptoria is a private, secure timeline for your medical journey. Keep events, doctors, and records connected in one clear place.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#waitlist" 
              class="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-foreground/10 text-center"
            >
              Join the Waitlist
            </a>
            <div class="flex items-center -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div class="w-10 h-10 rounded-full border-2 border-background bg-surface-tertiary flex items-center justify-center">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" class="w-full h-full rounded-full object-cover" />
                </div>
              ))}
              <span class="pl-6 text-sm font-medium text-foreground/40 font-mono">
                +420 early adopters
              </span>
            </div>
          </div>
        </div>

        <div class="relative lg:h-[700px] flex items-center justify-center lg:justify-end animate-fade-up [animation-delay:200ms]">
          {/* Main Screenshot with Double Bezel */}
          <div class="relative p-2 bg-white/5 rounded-[3rem] ring-1 ring-black/5 dark:ring-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
            <div class="overflow-hidden rounded-[2.5rem] bg-surface ring-1 ring-black/5 shadow-inner">
              <img 
                src="/src/assets/screens/simulator_screenshot_F62632D7-B788-4C2E-ABD2-F7C65E48D797.png" 
                alt="Symptoria App Screen" 
                class="w-[300px] md:w-[350px] aspect-[9/19.5] object-cover scale-[1.01] group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Accessory Cards */}
            <div class="absolute -left-16 top-20 p-4 bg-surface/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl animate-float [animation-delay:1s] hidden md:block">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center text-success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div class="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Local Backup</div>
                  <div class="text-sm font-bold">Data secured</div>
                </div>
              </div>
            </div>

            <div class="absolute -right-8 bottom-32 p-4 bg-surface/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl animate-float hidden md:block">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <div>
                  <div class="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">New Event</div>
                  <div class="text-sm font-bold">Timeline updated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
