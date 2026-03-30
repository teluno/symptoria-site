export default function V2_Hero() {
  return (
    <section class="pt-32 pb-24 border-b-2 border-black bg-[#f2f2f2]">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-black bg-white">
          <div class="lg:col-span-8 p-8 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
            <div class="inline-block px-3 py-1 bg-black text-white font-mono text-xs uppercase mb-8">System Status: Active</div>
            <h1 class="text-6xl md:text-8xl font-sans font-black tracking-tighter uppercase leading-[0.85] mb-8">
              Organize <br />
              <span class="text-accent">Health</span> <br />
              History.
            </h1>
            <p class="text-xl font-mono leading-tight mb-12 max-w-[40ch]">
              [01] Keep a clear timeline of medical events. <br />
              [02] Organize records connected to cases. <br />
              [03] Private. Secure. Locally owned data.
            </p>
            <div class="flex flex-col sm:flex-row gap-0 border-2 border-black w-fit">
              <a href="#waitlist" class="px-12 py-6 bg-black text-white font-bold text-xl uppercase hover:bg-accent transition-colors">Join Waitlist</a>
              <a href="#features" class="px-12 py-6 bg-white text-black font-bold text-xl uppercase hover:bg-black hover:text-white transition-colors border-t-2 sm:border-t-0 sm:border-l-2 border-black">View Specs</a>
            </div>
          </div>
          <div class="lg:col-span-4 p-8 bg-accent/10 flex flex-col justify-between overflow-hidden relative">
            <div class="space-y-4">
              <div class="text-[10px] font-bold font-mono text-foreground/40 uppercase tracking-widest">Recent Activity Log</div>
              {[
                { time: '14:22', event: 'Migraine logged' },
                { time: '11:05', event: 'Dr. Smith appt added' },
                { time: '09:41', event: 'Blood work attached' }
              ].map(item => (
                <div class="flex gap-4 p-3 border-2 border-black bg-white font-mono text-xs">
                  <span class="text-foreground/40">[{item.time}]</span>
                  <span class="font-bold">{item.event}</span>
                </div>
              ))}
            </div>
            {/* Minimal SVG Graphic */}
            <div class="mt-12">
               <svg viewBox="0 0 100 100" class="w-full h-auto text-black">
                 <rect x="0" y="40" width="100" height="2" fill="currentColor" />
                 <circle cx="20" cy="41" r="5" fill="currentColor" stroke="white" stroke-width="2" />
                 <circle cx="50" cy="41" r="5" fill="currentColor" stroke="white" stroke-width="2" />
                 <circle cx="80" cy="41" r="5" fill="accent" stroke="white" stroke-width="2" />
               </svg>
               <div class="text-[10px] font-bold font-mono uppercase mt-4">Visual Timeline Rendering v1.0.4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
