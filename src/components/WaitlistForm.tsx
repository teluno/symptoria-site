import { createSignal } from 'solid-js';

export default function WaitlistForm() {
  const [email, setEmail] = createSignal('');
  const [submitted, setSubmitted] = createSignal(false);
  const [submitting, setSubmitting] = createSignal(false);
  const [error, setError] = createSignal('');

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const nextEmail = email().trim();

    if (!nextEmail || submitting()) return;

    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://worker.symptoria.app/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: nextEmail,
        }),
      });

      if (!response.ok) {
        throw new Error(`Subscribe request failed with ${response.status}`);
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
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
              Get early access to a better way to organize your health records.
            </p>

            {submitted() ? (
              <div class="animate-fade-up flex flex-col items-center gap-4">
                <div class="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold">Check your inbox</h3>
                <p class="text-foreground/60">We just sent a confirmation email. Please confirm your subscription to join the newsletter and waitlist.</p>
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
                  disabled={submitting()}
                  class="px-8 py-4 bg-foreground text-background rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-foreground/10 flex items-center justify-center gap-3 group/btn"
                >
                  {submitting() ? 'Joining...' : 'Join Waitlist'}
                  <div class="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </button>
              </form>
            )}

            {error() && <p class="mt-6 text-sm text-destructive">{error()}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
