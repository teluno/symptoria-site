import { createSignal } from 'solid-js';

export default function WaitlistForm() {
  const [email, setEmail] = createSignal('');
  const [submitted, setSubmitted] = createSignal(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!email()) return;
    setSubmitted(true);
    // In a real app, this would send to an API
  };

  return (
    <section id="waitlist" class="py-32 overflow-hidden relative">
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-surface border border-border shadow-overlay text-center relative overflow-hidden">
          {/* Decorative background spots */}
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-accent/5 blur-3xl rounded-full" />
          <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 blur-3xl rounded-full" />

          <div class="relative z-10">
            <h2 class="text-4xl md:text-6xl font-sans font-extrabold tracking-tighter mb-8 leading-[0.9]">
              Be the first to <br />
              <span class="text-accent">own your history.</span>
            </h2>
            <p class="text-xl text-foreground/60 mb-12 max-w-[45ch] mx-auto">
              Join 420+ others waiting for early access to the most private and organized health record app.
            </p>

            {submitted() ? (
              <div class="animate-fade-up flex flex-col items-center gap-4">
                <div class="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold">You're on the list!</h3>
                <p class="text-foreground/60">We'll reach out soon with your early access invite.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} class="flex flex-col md:flex-row gap-4 max-w-lg mx-auto group">
                <div class="flex-1 relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    value={email()}
                    onInput={(e) => setEmail(e.currentTarget.value)}
                    class="w-full px-6 py-4 rounded-2xl bg-surface-secondary border border-border focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                  />
                </div>
                <button 
                  type="submit"
                  class="px-8 py-4 bg-foreground text-background rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-foreground/10 flex items-center justify-center gap-3 group/btn"
                >
                  Join Waitlist
                  <div class="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </button>
              </form>
            )}

            <div class="mt-12 pt-12 border-t border-border flex flex-wrap justify-center gap-8">
              <div class="flex items-center gap-2 text-foreground/40 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Private & Secure
              </div>
              <div class="flex items-center gap-2 text-foreground/40 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Early Access
              </div>
              <div class="flex items-center gap-2 text-foreground/40 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                No-Cloud Sync
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
