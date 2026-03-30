export default function V4_Waitlist() {
  return (
    <section id="waitlist" class="py-40 bg-[#050505] text-white">
      <div class="container mx-auto px-6 max-w-4xl border border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-50" />
        
        <div class="relative z-10 text-center">
           <div class="font-mono text-blue-500 text-xs uppercase tracking-[0.3em] mb-8">Access Protocol 0x42</div>
           <h2 class="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-none mb-12">
             Secure Your <br />
             <span class="text-white/20">Digital</span> History.
           </h2>
           
           <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-16">
              <input 
                type="email" 
                placeholder="ACCESS_EMAIL"
                class="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl font-mono text-sm uppercase tracking-widest text-white focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button class="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors rounded-2xl">
                Authorize
              </button>
           </form>
           
           <div class="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
             System: Locked | Data: Local | Ownership: Verified
           </div>
        </div>
      </div>
    </section>
  );
}
