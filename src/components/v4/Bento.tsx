export default function V4_Bento() {
  const features = [
    { title: 'Local Architecture', desc: 'No-cloud sync ensures 100% data sovereignty.' },
    { title: 'Linked Topology', desc: 'Complex relational mapping of medical events.' },
    { title: 'Zero Tracking', desc: 'Biometric security with local-only storage.' },
    { title: 'Export Control', desc: 'Take your data anywhere in universal formats.' }
  ];

  return (
    <section id="features" class="py-32 bg-[#050505] text-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div class="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:bg-white/[0.08] transition-all duration-500">
               <div class="flex items-center justify-between mb-8">
                  <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                       <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                       <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <span class="font-mono text-[10px] text-white/20 uppercase tracking-widest">Sys_Node_0{i+1}</span>
               </div>
               <h3 class="text-3xl font-sans font-black uppercase tracking-tighter mb-4 group-hover:text-blue-500 transition-colors">{f.title}</h3>
               <p class="text-lg text-white/40 font-mono leading-relaxed max-w-[35ch]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
