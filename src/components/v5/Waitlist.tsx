export default function V5_Waitlist() {
  return (
    <section id="waitlist" class="py-60 bg-white">
      <div class="container mx-auto px-6 max-w-2xl text-center">
        <div class="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center text-white mb-12 mx-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 class="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase mb-12 leading-none">
          Ready for <br />
          early access?
        </h2>
        
        <form class="flex flex-col gap-4 mb-16">
          <input 
            type="email" 
            placeholder="EMAIL_ADDRESS"
            class="w-full px-8 py-6 bg-foreground/[0.02] border border-foreground/10 rounded-2xl font-sans font-bold text-center text-xl uppercase tracking-widest focus:outline-none focus:border-foreground/30 transition-colors"
          />
          <button class="w-full py-6 bg-foreground text-white font-bold text-xl uppercase tracking-widest hover:bg-black transition-all rounded-2xl">
            Join Waitlist
          </button>
        </form>
        
        <div class="text-[10px] font-bold text-foreground/20 uppercase tracking-[0.3em]">
          Privacy First | Local Only | Secure Always
        </div>
      </div>
    </section>
  );
}
