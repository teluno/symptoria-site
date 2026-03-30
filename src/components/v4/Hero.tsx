export default function V4_Hero() {
  return (
    <section id="hero" class="min-h-[100dvh] pt-40 pb-24 relative overflow-hidden bg-[#050505] text-white flex items-center">
      {/* Dynamic Background */}
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,100,255,0.08),transparent_50%)]" />
      <div class="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 animate-fade-up">
          <div class="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/40 mb-8">
            <span class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            Encryption Status: AES-256 Validated
          </div>
          <h1 class="text-6xl md:text-8xl font-sans font-black tracking-tighter uppercase leading-[0.85] mb-8">
            Privacy as a <br />
            <span class="text-blue-500 shadow-blue-500/20 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">Feature.</span>
          </h1>
          <p class="text-lg md:text-xl text-white/40 font-mono leading-relaxed mb-12 max-w-[45ch]">
             Your health history should never leave your possession. Symptoria stores everything locally, providing a tactical overview of your medical journey.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
             <a href="#waitlist" class="px-10 py-5 bg-white text-black font-bold text-lg uppercase tracking-widest hover:bg-blue-500 transition-colors rounded-2xl">
               Get Early Access
             </a>
             <div class="px-8 py-5 border border-white/10 rounded-2xl flex items-center gap-4 bg-white/5">
                <div class="flex -space-x-2">
                   {[1,2,3].map(i => <div class="w-8 h-8 rounded-full border border-black bg-white/10" />)}
                </div>
                <span class="font-mono text-[10px] text-white/40 uppercase tracking-widest">420+ Protected Nodes</span>
             </div>
          </div>
        </div>
        
        <div class="lg:col-span-5 relative animate-fade-up [animation-delay:300ms]">
          <div class="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[2.5rem] shadow-2xl">
            <div class="bg-black rounded-[2.3rem] overflow-hidden border border-white/10">
               <img 
                 src="/src/assets/screens/simulator_screenshot_F62632D7-B788-4C2E-ABD2-F7C65E48D797.png" 
                 alt="Symptoria Dashboard" 
                 class="w-full h-auto opacity-80"
               />
            </div>
            {/* Tactical UI Overlays */}
            <div class="absolute -right-8 top-1/4 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl font-mono text-[10px] uppercase hidden md:block">
               <div class="text-blue-500 mb-1">DATA_STREAM_ACTIVE</div>
               <div class="flex items-center gap-2">
                  <div class="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div class="w-2/3 h-full bg-blue-500" />
                  </div>
                  <span>84% Sync</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
