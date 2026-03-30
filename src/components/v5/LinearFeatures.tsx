export default function V5_LinearFeatures() {
  const steps = [
    { title: 'Timeline View', desc: 'A clear, chronological history of every symptom and event.', icon: '01' },
    { title: 'Linked Records', desc: 'Connect doctors, facilities, and cases for total clarity.', icon: '02' },
    { title: 'Local Storage', desc: '100% on-device data sovereignty. No cloud sync required.', icon: '03' },
    { title: 'Secure Attachments', desc: 'Documents and lab results linked directly to entries.', icon: '04' }
  ];

  return (
    <section id="features" class="py-40 bg-white">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="flex flex-col gap-40">
           {steps.map((s, i) => (
             <div class={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20 animate-fade-up`}>
                <div class="flex-1">
                   <div class="text-[120px] font-sans font-black text-foreground/5 leading-none mb-8">{s.icon}</div>
                   <h3 class="text-4xl md:text-5xl font-sans font-black tracking-tighter mb-8 uppercase leading-none">{s.title}</h3>
                   <p class="text-xl md:text-2xl text-foreground/40 leading-relaxed font-medium">{s.desc}</p>
                </div>
                <div class="flex-1 w-full aspect-[4/5] bg-foreground/[0.02] rounded-[3rem] border border-foreground/[0.05] p-12 flex items-center justify-center">
                   <div class="w-full h-full bg-white shadow-2xl rounded-[2rem] border border-foreground/5 flex items-center justify-center p-8">
                      <div class="w-full h-full bg-foreground/5 rounded-xl animate-pulse" />
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
