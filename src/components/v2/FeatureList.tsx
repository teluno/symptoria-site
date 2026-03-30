const features = [
  { id: '01', title: 'Timeline Engine', desc: 'Precise chronological logging of all symptoms and events.' },
  { id: '02', title: 'Linked Topology', desc: 'Connect doctors to facilities to specific medical cases.' },
  { id: '03', title: 'Local Architecture', desc: '100% on-device storage. Your data never leaves your control.' },
  { id: '04', title: 'Universal Attachments', desc: 'PDFs, images, and documents linked directly to entries.' },
  { id: '05', title: 'Appointment Prep', desc: 'Generate summaries to communicate clearly with specialists.' }
];

export default function V2_FeatureList() {
  return (
    <section id="features" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="border-t-2 border-black divide-y-2 divide-black">
          {features.map((f) => (
            <div class="grid grid-cols-1 md:grid-cols-12 group hover:bg-black hover:text-white transition-colors cursor-default">
              <div class="md:col-span-1 p-6 font-mono font-black text-xl border-b-2 md:border-b-0 md:border-r-2 border-black flex items-center justify-center">
                {f.id}
              </div>
              <div class="md:col-span-4 p-6 font-sans font-black text-3xl uppercase tracking-tighter flex items-center border-b-2 md:border-b-0 md:border-r-2 border-black">
                {f.title}
              </div>
              <div class="md:col-span-7 p-6 font-mono text-lg flex items-center">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
