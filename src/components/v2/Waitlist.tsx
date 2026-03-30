export default function V2_Waitlist() {
  return (
    <section id="waitlist" class="py-32 bg-[#f2f2f2]">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto border-4 border-black bg-white p-12 shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
          <div class="text-center mb-12">
            <h2 class="text-5xl font-sans font-black uppercase tracking-tighter mb-4">Request Access</h2>
            <p class="font-mono text-sm uppercase font-bold text-foreground/60">[Early Registration Protocol v1.0]</p>
          </div>
          
          <form class="space-y-8">
            <div class="space-y-2">
              <label class="font-mono text-xs font-black uppercase">Email Address</label>
              <input 
                type="email" 
                placeholder="USER@DOMAIN.COM"
                class="w-full px-6 py-4 bg-[#f2f2f2] border-2 border-black font-mono font-bold focus:bg-white transition-colors uppercase outline-none"
              />
            </div>
            
            <div class="flex items-center gap-4 py-4 border-y-2 border-black border-dashed">
              <input type="checkbox" class="w-6 h-6 border-2 border-black bg-white accent-black" checked />
              <label class="font-mono text-[10px] font-bold uppercase leading-tight">
                I ACKNOWLEDGE THAT SYMPTORIA IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE DIAGNOSES.
              </label>
            </div>

            <button class="w-full py-6 bg-black text-white font-black text-2xl uppercase hover:bg-accent transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-x-1 active:translate-y-1">
              Submit Request
            </button>
          </form>

          <div class="mt-12 pt-8 border-t-2 border-black grid grid-cols-2 gap-4">
             <div class="font-mono text-[10px] uppercase font-bold text-foreground/40">
               Encryption: AES-256 <br />
               Storage: Local
             </div>
             <div class="font-mono text-[10px] uppercase font-bold text-foreground/40 text-right">
               Status: Secure <br />
               Nodes: Decentralized
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
