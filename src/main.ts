import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <div class="min-h-screen flex flex-col">
      <header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-300 flex items-center justify-center text-xs font-bold">
              M1
            </div>
            <span class="font-semibold tracking-tight">Mockup One Studio</span>
          </div>
          <nav class="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" class="hover:text-white transition">Services</a>
            <a href="#process" class="hover:text-white transition">Process</a>
            <a href="#contact" class="hover:text-white transition">Contact</a>
          </nav>
          <button class="text-sm font-medium px-3 py-1.5 rounded-full border border-slate-700 hover:border-brand-500 hover:text-brand-100 transition">
            Book a call
          </button>
        </div>
      </header>

      <main class="flex-1">
        <section class="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
          <div class="max-w-5xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p class="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase mb-3">
                Mockup • Concept • Layout
              </p>
              <h1 class="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                Clean, focused layouts<br />
                for real-world projects.
              </h1>
              <p class="text-slate-300 text-sm md:text-base mb-6 max-w-md">
                This mockup is built with Vite, TypeScript, and Tailwind—ready to
                evolve into a full client project or portfolio piece.
              </p>
              <div class="flex flex-wrap items-center gap-3">
                <button class="px-4 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-sm font-medium shadow-lg shadow-brand-500/30 transition">
                  View concept
                </button>
                <button class="px-4 py-2.5 rounded-full border border-slate-700 text-sm font-medium hover:border-brand-400 hover:text-brand-100 transition">
                  Duplicate for new client
                </button>
              </div>
              <p class="mt-4 text-xs text-slate-400">
                Fully static, GitHub Pages–ready. Swap copy, colors, and sections as needed.
              </p>
            </div>

            <div class="relative">
              <div class="absolute -inset-6 bg-brand-500/10 blur-3xl rounded-full"></div>
              <div class="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl">
                <div class="flex items-center gap-1 mb-3">
                  <span class="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <div class="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-slate-400">Layout: Landing v1</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-200 border border-brand-500/40">
                      Ready to ship
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-2 text-[10px] text-slate-300">
                    <div class="rounded-lg border border-slate-800 bg-slate-900 p-2">
                      <p class="font-medium mb-1">Hero</p>
                      <p class="text-slate-400">Headline, subcopy, CTA</p>
                    </div>
                    <div class="rounded-lg border border-slate-800 bg-slate-900 p-2">
                      <p class="font-medium mb-1">Services</p>
                      <p class="text-slate-400">3–4 value blocks</p>
                    </div>
                    <div class="rounded-lg border border-slate-800 bg-slate-900 p-2">
                      <p class="font-medium mb-1">Contact</p>
                      <p class="text-slate-400">Simple CTA footer</p>
                    </div>
                  </div>
                  <div class="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
                    <span>Tech: Vite • TS • Tailwind</span>
                    <span>Deploy: GitHub Pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="border-b border-slate-800 bg-slate-950">
          <div class="max-w-5xl mx-auto px-4 py-12 md:py-16">
            <div class="flex items-end justify-between gap-4 mb-8">
              <div>
                <h2 class="text-xl md:text-2xl font-semibold tracking-tight mb-1">
                  Sections you can reuse.
                </h2>
                <p class="text-sm text-slate-400 max-w-md">
                  Swap labels and copy to turn this into a studio site, a mechanic, a tutor, or any local service.
                </p>
              </div>
            </div>

            <div class="grid md:grid-cols-3 gap-5">
              <div class="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p class="text-xs font-semibold text-brand-300 mb-1">01</p>
                <h3 class="font-medium mb-2">Hero + Value</h3>
                <p class="text-sm text-slate-400 mb-3">
                  Lead with a clear promise, a short explanation, and one primary action.
                </p>
                <p class="text-xs text-slate-500">
                  Good for: service businesses, portfolios, product previews.
                </p>
              </div>

              <div class="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p class="text-xs font-semibold text-brand-300 mb-1">02</p>
                <h3 class="font-medium mb-2">Service grid</h3>
                <p class="text-sm text-slate-400 mb-3">
                  Three focused blocks to explain what you do without overwhelming the page.
                </p>
                <p class="text-xs text-slate-500">
                  Swap icons, titles, and descriptions per client.
                </p>
              </div>

              <div class="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p class="text-xs font-semibold text-brand-300 mb-1">03</p>
                <h3 class="font-medium mb-2">Contact CTA</h3>
                <p class="text-sm text-slate-400 mb-3">
                  A simple call-to-action that can link to Calendly, email, or a form.
                </p>
                <p class="text-xs text-slate-500">
                  Keep it low-friction: one main action, one backup option.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="bg-slate-950">
          <div class="max-w-5xl mx-auto px-4 py-10 md:py-14">
            <div class="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900 px-6 py-8 md:px-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 class="text-xl md:text-2xl font-semibold tracking-tight mb-2">
                  Turn this mockup into a real project.
                </h2>
                <p class="text-sm text-slate-300 max-w-md">
                  Duplicate the repo, change the brand, and you’ve got a launch-ready layout for your next client or concept.
                </p>
              </div>
              <div class="flex flex-col gap-2 w-full md:w-auto">
                <button class="w-full md:w-auto px-4 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-sm font-medium shadow-lg shadow-brand-500/30 transition">
                  Export for client
                </button>
                <button class="w-full md:w-auto px-4 py-2.5 rounded-full border border-slate-700 text-xs text-slate-300 hover:border-brand-400 hover:text-brand-100 transition">
                  Or keep as a personal layout library
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="border-t border-slate-800 bg-slate-950">
        <div class="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>Mockup 1 • Vite + TypeScript + Tailwind</span>
          <span>Ready for GitHub Pages deployment.</span>
        </div>
      </footer>
    </div>
  `;
}
