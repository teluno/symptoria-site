export default function BentoGrid() {
  return (
    <section id="features" class="py-32 bg-surface-secondary/50">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-6">
            Designed for clarity, <br />
            built for trust.
          </h2>
          <p class="text-lg text-foreground/60">
            Every feature is crafted to help you manage your medical history without the stress of scattered notes or forgotten details.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Timeline - Row 1, Col 1-7 */}
          <div class="md:col-span-7 group">
            <div class="h-full p-8 md:p-10 rounded-[2.5rem] bg-surface border border-border shadow-surface overflow-hidden relative">
              <div class="relative z-10 mb-20">
                <div class="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">The Timeline</div>
                <h3 class="text-2xl font-bold tracking-tight mb-4">See the full story</h3>
                <p class="text-foreground/60 max-w-[40ch]">
                  A chronological history of symptoms, appointments, and medical events that makes patterns easy to spot.
                </p>
              </div>

              {/* Animated Timeline Preview */}
              <div class="absolute right-[-20px] bottom-[-20px] w-[300px] md:w-[400px] h-[300px] bg-surface-secondary rounded-[2rem] border border-border p-6 rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700 shadow-xl overflow-hidden">
                <div class="space-y-4">
                  {[
                    { title: 'Migraine Episode', date: 'Mar 24', color: 'bg-danger' },
                    { title: 'Dr. Aris Thorne', date: 'Mar 20', color: 'bg-accent' },
                    { title: 'Blood Work Results', date: 'Mar 15', color: 'bg-success' },
                    { title: 'Follow-up Appt', date: 'Mar 10', color: 'bg-accent' }
                  ].map((item, i) => (
                    <div class={`flex items-center gap-4 p-3 rounded-xl bg-surface border border-border transition-all duration-500 delay-[calc(i*100ms)] group-hover:translate-x-2`}>
                      <div class={`w-2 h-10 ${item.color} rounded-full`} />
                      <div>
                        <div class="text-xs font-bold text-foreground/40">{item.date}</div>
                        <div class="text-sm font-bold">{item.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Connected Records - Row 1, Col 8-12 */}
          <div class="md:col-span-5 group">
            <div class="h-full p-8 md:p-10 rounded-[2.5rem] bg-surface border border-border shadow-surface overflow-hidden flex flex-col justify-between">
              <div>
                <div class="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">Connections</div>
                <h3 class="text-2xl font-bold tracking-tight mb-4">Everything linked</h3>
                <p class="text-foreground/60">
                  Connect facilities, doctors, and cases. One tap shows you everything related to a specific condition.
                </p>
              </div>
              
              <div class="mt-8 flex justify-center">
                <div class="relative w-32 h-32">
                  <div class="absolute inset-0 bg-accent/20 rounded-full animate-ping [animation-duration:3s]" />
                  <div class="absolute inset-4 bg-accent/40 rounded-full animate-ping [animation-duration:4s]" />
                  <div class="absolute inset-0 flex items-center justify-center bg-accent rounded-full text-white shadow-xl shadow-accent/40 z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy - Row 2, Col 1-5 */}
          <div class="md:col-span-5 group">
            <div class="h-full p-8 md:p-10 rounded-[2.5rem] bg-foreground text-background shadow-2xl overflow-hidden relative">
              <div class="relative z-10">
                <div class="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">Security</div>
                <h3 class="text-2xl font-bold tracking-tight mb-4 text-white">Your data stays yours</h3>
                <p class="text-background/60">
                  Private by default. Local backups and on-device storage mean nobody sees your health data but you.
                </p>
              </div>
              
              <div class="mt-12 flex items-center justify-center">
                <div class="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center border border-white/20 animate-float">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-white">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Attachments - Row 2, Col 6-12 */}
          <div class="md:col-span-7 group">
            <div class="h-full p-8 md:p-10 rounded-[2.5rem] bg-surface border border-border shadow-surface overflow-hidden relative">
              <div class="flex flex-col md:flex-row gap-8 items-start">
                <div class="flex-1">
                  <div class="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">Documents</div>
                  <h3 class="text-2xl font-bold tracking-tight mb-4">Files in context</h3>
                  <p class="text-foreground/60 mb-8">
                    Attach lab results, insurance cards, or imaging directly to events and appointments.
                  </p>
                </div>
                
                <div class="flex-1 grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div class="aspect-square rounded-2xl bg-surface-secondary border border-border p-2 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <div class="w-full h-full bg-white rounded-xl shadow-sm flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-foreground/20">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
