export default function Hero() {
  return (
    <section class="relative min-h-[100dvh] flex items-center overflow-hidden py-20 lg:py-0">
      {/* Background Decorative Elements */}
      <div class="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -z-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/3 -z-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <div class="max-w-2xl animate-fade-up z-10">
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
          </div>
        </div>

        <div class="relative flex items-center justify-center lg:justify-end animate-fade-up [animation-delay:200ms]">
          <div class="lg:absolute lg:top-1/2 lg:-translate-y-1/3 lg:right-0">
            {/* Main Screenshot with Double Bezel */}
            <div class="relative p-2 bg-white/5 rounded-[3rem] ring-1 ring-black/5 dark:ring-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
              <div class="overflow-hidden rounded-[2.5rem] bg-surface ring-1 ring-black/5 shadow-inner">
                <img 
                  src="/src/assets/screens/simulator_screenshot_F62632D7-B788-4C2E-ABD2-F7C65E48D797.png" 
                  alt="Symptoria App Screen" 
                  class="w-[300px] md:w-[400px] aspect-[9/19.5] object-cover scale-[1.01] group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
