export default function V3_Features() {
  const features = [
    { title: 'The Timeline', desc: 'A peaceful, chronological view of your medical events.' },
    { title: 'Deep Connections', desc: 'Link your symptoms to cases and clinicians.' },
    { title: 'True Privacy', desc: 'Your health history stays only on your device.' },
    { title: 'Simple Records', desc: 'Organize lab results and documents with ease.' }
  ];

  return (
    <section id="features" class="py-32 bg-[#FBFBFA]">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {features.map((f, i) => (
            <div class={`animate-fade-up [animation-delay:${i * 150}ms] border-b border-[#2F3437]/5 pb-12`}>
              <div class="text-[#2F3437]/30 font-serif italic text-3xl mb-4">0{i + 1}</div>
              <h3 class="text-3xl font-serif text-[#2F3437] mb-6">{f.title}</h3>
              <p class="text-lg text-[#2F3437]/60 leading-relaxed max-w-[40ch]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
