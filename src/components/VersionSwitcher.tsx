export default function VersionSwitcher() {
  const versions = [
    { name: 'V1: Modern', url: '/' },
    { name: 'V2: Brutalist', url: '/v2' },
    { name: 'V3: Editorial', url: '/v3' },
    { name: 'V4: Tactical', url: '/v4' },
    { name: 'V5: Minimal', url: '/v5' }
  ];

  return (
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">
      <div class="bg-black text-white px-2 py-2 rounded-2xl flex items-center gap-1 shadow-2xl border border-white/10">
        {versions.map((v) => (
          <a 
            href={v.url} 
            class="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {v.name}
          </a>
        ))}
      </div>
    </div>
  );
}
