import { createSignal, onMount } from 'solid-js';

export default function Hero() {
  const [scrollOffset, setScrollOffset] = createSignal(0);
  const [maxScroll, setMaxScroll] = createSignal(0);
  const [headerHeight, setHeaderHeight] = createSignal(0);
  
  let containerRef: HTMLDivElement | undefined;
  let imgRef: HTMLImageElement | undefined;
  let headerRef: HTMLImageElement | undefined;
  let tabbarRef: HTMLImageElement | undefined;

  onMount(() => {
    if (!imgRef || !containerRef || !headerRef || !tabbarRef) return;

    const updateMaxScroll = () => {
      if (imgRef && containerRef && headerRef && tabbarRef) {
        const hHeight = headerRef.clientHeight;
        const tHeight = tabbarRef.clientHeight;
        const viewportHeight = containerRef.clientHeight;
        
        setHeaderHeight(hHeight);
        
        // The scrollable area is the image height minus the space between header and tabbar
        const visibleArea = viewportHeight - hHeight - tHeight;
        const scrollable = Math.max(0, imgRef.clientHeight - visibleArea);
        
        setMaxScroll(scrollable);
        // Start in the middle of the timeline
        setScrollOffset(scrollable / 2);
      }
    };

    // Use a combined check for all images
    const images = [imgRef, headerRef, tabbarRef];
    let loadedCount = 0;
    images.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) updateMaxScroll();
        };
      }
    });
    if (loadedCount === images.length) updateMaxScroll();

    let lastPageY = window.scrollY;
    const handlePageScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastPageY;
      lastPageY = currentY;

      // Reduced sensitivity (0.3) for a very subtle sync effect
      if (currentY < window.innerHeight) {
        const next = Math.max(0, Math.min(maxScroll(), scrollOffset() + deltaY * 0.3));
        setScrollOffset(next);
      }
    };

    const handleMockupWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      const current = scrollOffset();
      const next = Math.max(0, Math.min(maxScroll(), current + delta));

      if (next !== current) {
        e.preventDefault();
        setScrollOffset(next);
      }
    };

    window.addEventListener('scroll', handlePageScroll, { passive: true });
    containerRef.addEventListener('wheel', handleMockupWheel, { passive: false });
    window.addEventListener('resize', updateMaxScroll);

    return () => {
      window.removeEventListener('scroll', handlePageScroll);
      containerRef?.removeEventListener('wheel', handleMockupWheel);
      window.removeEventListener('resize', updateMaxScroll);
    };
  });

  return (
    <section class="relative min-h-[100dvh] flex items-center overflow-hidden py-20 lg:py-0">
      {/* Background Decorative Elements */}
      <div class="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -z-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/3 -z-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <div class="max-w-2xl animate-fade-up z-10">
          <h1 class="text-5xl md:text-7xl font-sans font-extrabold tracking-tighter leading-[0.9] mb-6">
            Your health history, <br />
            <span class="text-accent">finally organized.</span>
          </h1>
          
          <p class="text-lg md:text-xl text-foreground/60 leading-relaxed mb-10 max-w-[50ch]">
            Symptoria is a private, secure timeline for your medical journey. Keep events, doctors, and records connected in one clear place.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#waitlist" 
              class="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-foreground/10 text-center"
            >
              Join the Waitlist
            </a>
          </div>
        </div>

        <div class="relative flex items-center justify-center lg:justify-end animate-fade-up [animation-delay:200ms]">
          <div class="lg:absolute lg:top-1/2 lg:-translate-y-1/3 lg:right-0">
            {/* Dynamic Phone Mockup with Double Bezel */}
            <div class="relative p-2 bg-white/5 rounded-[3.5rem] ring-1 ring-black/5 dark:ring-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
              <div 
                ref={containerRef}
                class="relative w-[300px] md:w-[380px] aspect-[9/19.5] bg-surface rounded-[3rem] overflow-hidden ring-1 ring-black/5 shadow-inner"
              >
                
                {/* Fixed Header */}
                <img 
                  ref={headerRef}
                  src="/src/assets/screens/main-screen/header.png" 
                  alt="App Header" 
                  class="absolute top-0 left-0 w-full z-30 pointer-events-none"
                />

                {/* Scrolling Content Container */}
                <div 
                  class="absolute left-0 w-full transition-transform duration-300 ease-out"
                  style={{ 
                    top: `${headerHeight()}px`,
                    transform: `translateY(${-scrollOffset()}px)` 
                  }}
                >
                  <img 
                    ref={imgRef}
                    src="/src/assets/screens/main-screen/content.png" 
                    alt="App Content" 
                    class="w-full h-auto"
                  />
                </div>

                {/* Fixed Tabbar */}
                <img 
                  ref={tabbarRef}
                  src="/src/assets/screens/main-screen/tapbar.png" 
                  alt="App Tabbar" 
                  class="absolute bottom-0 left-0 w-full z-30 pointer-events-none"
                />

                {/* Bezel Overlay for Refraction */}
                <div class="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/10 pointer-events-none z-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
