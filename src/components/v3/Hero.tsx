export default function V3_Hero() {
  return (
    <section class="min-h-[100dvh] pt-40 pb-24 relative overflow-hidden flex items-center bg-[#FBFBFA]">
      <div class="absolute top-0 right-0 w-2/3 h-2/3 bg-accent/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div class="animate-fade-up">
          <div class="font-serif italic text-xl text-accent mb-6 leading-none">A gentle path to clarity.</div>
          <h1 class="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tight text-[#2F3437] mb-10">
            Understand your <br /> 
            medical journey, <br />
            <span class="italic text-foreground/40 font-light">one event at a time.</span>
          </h1>
          <p class="text-xl md:text-2xl text-[#2F3437]/60 font-medium leading-relaxed mb-12 max-w-[40ch]">
            A personal health diary designed for peace of mind. Private, secure, and entirely yours.
          </p>
          <a href="#waitlist" class="inline-flex px-12 py-5 bg-[#2F3437] text-white rounded-full font-bold text-xl hover:bg-black transition-all shadow-xl shadow-[#2F3437]/5">
            Begin Journey
          </a>
        </div>
        
        <div class="relative animate-fade-up [animation-delay:300ms]">
          <div class="relative z-10 p-4 bg-white shadow-2xl rounded-[3rem] overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-1000">
            <img 
              src="/src/assets/screens/simulator_screenshot_0952CFB8-8E52-491C-9AD4-D09978295381.png" 
              alt="Symptoria Timeline" 
              class="w-full max-w-[320px] mx-auto rounded-[2rem]"
            />
          </div>
          <div class="absolute -top-12 -right-12 w-64 h-64 border border-[#2F3437]/5 rounded-full pointer-events-none" />
          <div class="absolute bottom-24 -left-20 p-8 bg-accent/5 backdrop-blur-3xl rounded-3xl border border-white/50 shadow-xl hidden lg:block">
            <div class="font-serif italic text-2xl text-[#2F3437]">"Finally, a clear timeline."</div>
          </div>
        </div>
      </div>
    </section>
  );
}
