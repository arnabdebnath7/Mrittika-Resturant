"use client";

import { AnimatePresence, motion } from "motion/react";
import { type FormEvent, type ReactNode, useState } from "react";

const menu = [
  { group: "jol", section: "Jol Khabar", name: "Gondhoraj Chingri", note: "River prawn, gondhoraj lime, green chilli, cultured cream.", price: "₹420" },
  { group: "jol", section: "Jol Khabar", name: "Mochar Chop", note: "Banana blossom, posto, kasundi and crisp rice.", price: "₹340" },
  { group: "mains", section: "Madhyanno", name: "Ilish Paturi", note: "Hilsa, mustard, coconut and lime, steamed in banana leaf.", price: "₹680" },
  { group: "mains", section: "Madhyanno", name: "Kosha Mangsho", note: "Slow-braised goat, caramelised onion, potato and whole spice.", price: "₹640" },
  { group: "mains", section: "Madhyanno", name: "Mrittika Thala", note: "Shaak, bhaja, dal, rice, fish and chutney — the table at once.", price: "₹520" },
  { group: "mishti", section: "Mishti", name: "Nolen Gur Bhapa Doi", note: "Steamed yoghurt, date jaggery and citrus zest.", price: "₹290" },
  { group: "mishti", section: "Mishti", name: "Baked Sandesh", note: "Fresh chhana, jaggery caramel and pistachio.", price: "₹260" },
];

const experiences = [
  ["Friday evenings", "Chef's Table", "Eight seats around the pass. Seven courses, stories from the kitchen, no rush."],
  ["First Sunday", "Bhuri Bhoj", "A generous family-style lunch inspired by the Bengali feast table."],
  ["By request", "Private Table", "A quieter room for birthdays, anniversaries and long adda."],
];

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Mrittika home">
      <span className={`grid h-9 w-9 place-items-center rounded-full border text-sm font-semibold ${light ? "border-white/35 text-white" : "border-black/25 text-[var(--ink)]"}`}>ম</span>
      <span className={`text-[11px] font-bold tracking-[0.34em] ${light ? "text-white" : "text-[var(--ink)]"}`}>MRITTIKA</span>
    </a>
  );
}

export default function MrittikaSite() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sent, setSent] = useState(false);

  const visible = filter === "all" ? menu : menu.filter((item) => item.group === filter);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div id="top" className="paper min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between rounded-full border border-black/10 bg-[#fbf7efd9] px-3 py-2.5 shadow-[0_18px_60px_rgba(38,28,18,.08)] backdrop-blur-xl">
          <Logo />
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/55 md:flex" aria-label="Primary navigation">
            <a className="rule-link" href="#story">Story</a>
            <a className="rule-link" href="#menu">Menu</a>
            <a className="rule-link" href="#experiences">Experiences</a>
            <a className="rule-link" href="#reserve">Reserve</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#reserve" className="hidden rounded-full bg-[var(--ink)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 md:block">Book a table</a>
            <button onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" className="rounded-full border border-black/10 px-3 py-2 text-[11px] font-semibold md:hidden">{open ? "Close" : "Menu"}</button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav id="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-[1320px] rounded-3xl border border-black/10 bg-[var(--paper)] p-3 shadow-xl md:hidden">
              {["story", "menu", "experiences", "reserve"].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-black/10 px-3 py-4 text-sm capitalize last:border-0">{item}<span>↗</span></a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="relative min-h-screen overflow-hidden border-b border-black/10 px-5 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="grid-paper absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1320px] items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="pb-3 lg:pb-16">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-black/40"><span className="h-px w-8 bg-[var(--terracotta)]" /> Kolkata · Bengali dining room</p>
              <h1 className="display max-w-[720px] text-[clamp(4.4rem,9.7vw,9rem)] leading-[0.8] tracking-[-0.055em]">Old recipes.<br /><em className="text-[var(--terracotta)]">New ritual.</em></h1>
              <p className="mt-7 max-w-[520px] text-[15px] leading-7 text-black/58">Mustard, posto, gondhoraj, slow cooking and the Bengali instinct to make a meal last longer than planned.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#reserve" className="rounded-full bg-[var(--ink)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5">Reserve your table ↗</a>
                <a href="#menu" className="rounded-full border border-black/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] transition hover:-translate-y-0.5">See the menu</a>
              </div>
              <div className="mt-8 flex gap-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/35"><span>Tue–Sun</span><span>12–3:30 · 6:30–11</span><span>Park Street</span></div>
            </Reveal>

            <Reveal delay={0.08} className="relative">
              <div className="relative overflow-hidden rounded-[140px_140px_24px_24px] bg-[#d8ccb9] shadow-[0_32px_90px_rgba(41,30,18,.18)]">
                <div
                  className="aspect-[0.86/1] bg-cover bg-center"
                  role="img"
                  aria-label="Warm Bengali dining room"
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=88)" }}
                />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 rounded-2xl border border-white/20 bg-black/35 p-4 text-white backdrop-blur-md">
                  <div><p className="text-[9px] uppercase tracking-[0.2em] text-white/60">Kitchen note 06</p><p className="mt-1 text-sm">Bhapa doi · smoked jaggery · gondhoraj</p></div>
                  <span className="text-xl">↗</span>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-5 hidden max-w-[180px] rotate-[-5deg] rounded-2xl border border-black/10 bg-[var(--paper)] p-4 text-[11px] leading-5 text-black/55 shadow-xl sm:block">
                <strong className="text-[var(--ink)]">ঘরের স্বাদ</strong><br />A little home, plated differently.
              </div>
            </Reveal>
          </div>
        </section>

        <section id="story" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(39,31,20,.12)]">
                <div className="aspect-[0.9/1] bg-cover bg-center" role="img" aria-label="Plated Bengali meal" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1400&q=86)" }} />
                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">From Bengal, with care</div>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/40">01 · The table</p>
              <h2 className="display mt-5 max-w-[720px] text-[clamp(3.5rem,6.7vw,7rem)] leading-[0.85] tracking-[-0.045em]">A Bengal you<br /><em className="text-[var(--terracotta)]">can taste.</em></h2>
              <p className="mt-8 max-w-[620px] text-[15px] leading-7 text-black/58">Mrittika is built around the way Bengalis really eat: several dishes arriving at once, rice doing the quiet work, fish making everyone look up, and mishti closing the table slowly.</p>
              <div className="mt-10 grid gap-5 border-t border-black/10 pt-6 sm:grid-cols-3">
                {[["Mustard", "Sharp, grassy, unmistakable."], ["Posto", "Nutty, earthy, comforting."], ["Gondhoraj", "Citrus that wakes the plate."]].map(([name, copy]) => (
                  <div key={name}><div className="display text-2xl">{name}</div><p className="mt-1 text-[11px] leading-5 text-black/45">{copy}</p></div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="menu" className="border-y border-black/10 bg-[#e9e1d4] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/40">02 · The menu</p><h2 className="display mt-4 text-[clamp(3.6rem,6.5vw,7rem)] leading-[0.84] tracking-[-0.05em]">Familiar flavours.<br /><em className="text-[var(--terracotta)]">A different rhythm.</em></h2></div>
                <p className="max-w-[380px] text-[13px] leading-6 text-black/52">A seasonal menu shaped by Kolkata homes, neighbourhood restaurants and the produce the market gives us.</p>
              </div>
            </Reveal>

            <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Menu categories">
              {[["all","All"],["jol","Jol Khabar"],["mains","Madhyanno"],["mishti","Mishti"]].map(([value, label]) => (
                <button key={value} onClick={() => setFilter(value)} role="tab" aria-selected={filter === value} className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] transition ${filter === value ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-black/15 text-black/55 hover:border-black/30"}`}>{label}</button>
              ))}
            </div>

            <motion.div layout className="mt-5 grid overflow-hidden rounded-[26px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((item) => (
                  <motion.article key={item.name} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }} className="group min-h-[280px] bg-[var(--paper)] p-7 transition hover:bg-[#f6f0e5] lg:min-h-[315px]">
                    <div className="flex items-start justify-between gap-5"><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">{item.section}</span><span className="text-[11px] font-bold text-[var(--rust)]">{item.price}</span></div>
                    <div className="mt-20"><h3 className="display text-[2.2rem] leading-[0.9] tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1">{item.name}</h3><p className="mt-3 max-w-[270px] text-[11px] leading-5 text-black/50">{item.note}</p></div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section id="experiences" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/40">03 · More than dinner</p>
              <h2 className="display mt-4 text-[clamp(3.5rem,6.5vw,6.8rem)] leading-[0.84] tracking-[-0.05em]">Keep the<br />table <em className="text-[var(--terracotta)]">long.</em></h2>
              <p className="mt-7 max-w-[450px] text-[14px] leading-6 text-black/55">Small-format evenings for people who care about the food, the room and the conversation around it.</p>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-3">
              {experiences.map(([when, title, copy], index) => (
                <Reveal key={title} delay={index * 0.05} className="rounded-[24px] border border-black/10 bg-[#eee7db] p-6">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/38">{when}</span>
                  <h3 className="display mt-20 text-[2rem] leading-none">{title}</h3>
                  <p className="mt-3 text-[11px] leading-5 text-black/52">{copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="reserve" className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 opacity-70" aria-hidden="true">
            <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="h-full w-full">
              <path d="M0 165 C150 70 310 92 455 150 S735 255 885 145 S1070 60 1200 112 L1200 250 L0 250Z" fill="#ab5238" fillOpacity=".32" />
              <path d="M0 195 C160 120 325 122 500 180 S800 255 950 175 S1110 112 1200 148 L1200 250 L0 250Z" fill="#f1ebdf" fillOpacity=".06" />
            </svg>
          </div>
          <div className="relative mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/42">04 · Reserve</p>
              <h2 className="display mt-4 text-[clamp(4rem,7.5vw,8rem)] leading-[0.8] tracking-[-0.05em]">Come hungry.<br /><em className="text-[#d08363]">Stay longer.</em></h2>
              <p className="mt-8 max-w-[470px] text-[14px] leading-6 text-white/55">For groups of 8+, private dining or chef's table requests, call the reservations desk.</p>
              <div className="mt-10 grid max-w-[520px] grid-cols-2 gap-y-6 border-t border-white/12 pt-6 text-[10px] leading-5 text-white/55">
                <div><strong className="text-white">12:00–15:30</strong><br />Lunch · Tue–Sun</div>
                <div><strong className="text-white">18:30–23:00</strong><br />Dinner · Tue–Sun</div>
                <div><strong className="text-white">+91 33 4028 8610</strong><br />Reservations</div>
                <div><strong className="text-white">Park Street</strong><br />Kolkata · West Bengal</div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form onSubmit={submit} className="rounded-[28px] bg-[var(--paper)] p-6 text-[var(--ink)] shadow-[0_30px_80px_rgba(0,0,0,.22)] sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">Request a reservation</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-black/50">Name<input required name="name" className="rounded-xl border border-black/10 bg-white px-3 py-3 text-[12px] font-normal normal-case tracking-normal outline-none focus:border-[var(--terracotta)]" placeholder="Your name" /></label>
                  <label className="grid gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-black/50">Guests<select name="guests" className="rounded-xl border border-black/10 bg-white px-3 py-3 text-[12px] font-normal normal-case tracking-normal outline-none focus:border-[var(--terracotta)]"><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>8+</option></select></label>
                  <label className="grid gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-black/50">Date<input required type="date" name="date" className="rounded-xl border border-black/10 bg-white px-3 py-3 text-[12px] font-normal normal-case tracking-normal outline-none focus:border-[var(--terracotta)]" /></label>
                  <label className="grid gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-black/50">Time<select name="time" className="rounded-xl border border-black/10 bg-white px-3 py-3 text-[12px] font-normal normal-case tracking-normal outline-none focus:border-[var(--terracotta)]"><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option></select></label>
                  <label className="grid gap-2 sm:col-span-2 text-[9px] font-bold uppercase tracking-[0.12em] text-black/50">Email<input required type="email" name="email" className="rounded-xl border border-black/10 bg-white px-3 py-3 text-[12px] font-normal normal-case tracking-normal outline-none focus:border-[var(--terracotta)]" placeholder="you@example.com" /></label>
                  <label className="grid gap-2 sm:col-span-2 text-[9px] font-bold uppercase tracking-[0.12em] text-black/50">Note<input name="note" className="rounded-xl border border-black/10 bg-white px-3 py-3 text-[12px] font-normal normal-case tracking-normal outline-none focus:border-[var(--terracotta)]" placeholder="Birthday, dietary note, seating request…" /></label>
                </div>
                <p className="mt-4 text-[9px] leading-4 text-black/38">Demo form — connect Supabase or Neon when reservations become real.</p>
                <button className="mt-4 w-full rounded-full bg-[var(--ink)] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5">Request table ↗</button>
                <AnimatePresence>
                  {sent && <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-[11px] text-[var(--olive)]" role="status">Request received — this demo is ready for a backend connection.</motion.p>}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#131611] px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div><Logo light /><p className="mt-4 max-w-[390px] text-[12px] leading-6 text-white/42">A contemporary Bengali table in Kolkata. Old flavours, considered service, room for adda.</p></div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/42 sm:grid-cols-4"><a href="#story">Story</a><a href="#menu">Menu</a><a href="#experiences">Experiences</a><a href="#reserve">Reservations</a></div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-5 text-[9px] uppercase tracking-[0.18em] text-white/25 sm:flex-row"><span>Park Street · Kolkata · West Bengal</span><span>© {new Date().getFullYear()} Mrittika</span></div>
        </div>
      </footer>
    </div>
  );
}
