export default function V3_Waitlist() {
  return (
    <section id="waitlist" class="py-40 bg-white">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <div class="font-serif italic text-2xl text-accent mb-12">Waiting for you.</div>
        <h2 class="text-5xl md:text-7xl font-serif text-[#2F3437] leading-[0.95] mb-12 tracking-tight">
          Join the community <br />
          of early adopters.
        </h2>
        
        <form class="flex flex-col sm:flex-row gap-4 mb-16">
          <input 
            type="email" 
            placeholder="Your email address" 
            class="flex-1 px-8 py-5 bg-[#FBFBFA] border border-[#2F3437]/5 rounded-full font-medium text-lg focus:outline-none focus:border-accent/30 transition-colors"
          />
          <button class="px-12 py-5 bg-[#2F3437] text-white rounded-full font-bold text-xl hover:bg-black transition-all">
            Join Waitlist
          </button>
        </form>
        
        <div class="flex items-center justify-center gap-12 text-[#2F3437]/40 text-sm font-medium uppercase tracking-[0.2em]">
          <span>Encrypted</span>
          <span>Private</span>
          <span>Local</span>
        </div>
      </div>
    </section>
  );
}
