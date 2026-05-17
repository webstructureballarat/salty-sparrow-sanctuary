import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";
import truck from "@/assets/truck.jpg";
import brownie from "@/assets/brownie.jpg";
import lemon from "@/assets/lemon.jpg";
import salt from "@/assets/salt.jpg";
import hiring from "@/assets/hiring.jpg";
import { MapPin, Mail, Coffee, Heart, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Salty Sparrow Cafe — Ballarat" },
      { name: "description", content: "A seriously cool, calm, refreshing escape from the world. Coffee, charm and atmosphere in Ballarat, VIC." },
      { property: "og:title", content: "The Salty Sparrow Cafe — Ballarat" },
      { property: "og:description", content: "Coffee, charm and atmosphere down Hancocks Lane, Ballarat." },
    ],
  }),
  component: Index,
});

const reviews = [
  { name: "Terry Lia", date: "23 January", text: "By chance I discovered this gem — a seriously cool, calm, refreshing escape from the world with coffee, charm and atmosphere." },
  { name: "Paige Miller", date: "Last week", text: "Love this cute little spot. The ladies who run it are amazing and the coffee is soo good." },
  { name: "Joanne Humphreys", date: "Aug 2023", text: "Absolutely beautiful hot chocolate, perfect for a Ballarat morning, and the peanut butter brownie was to die for!" },
  { name: "Geoff Gilbert", date: "Nov 2024", text: "Absolutely amazing coffee and delicious food." },
  { name: "Shaun Leonard Hearn", date: "May 2024", text: "Tasty coffee and fantastic service." },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Salty Sparrow logo" className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30" />
            <span className="font-display text-xl font-bold">The Salty Sparrow</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition">Menu</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
            <a href="#hiring" className="hover:text-primary transition">Jobs</a>
            <a href="#visit" className="hover:text-primary transition">Visit</a>
          </nav>
          <a href="#hiring" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition">
            <Sparkles className="h-4 w-4" /> We're hiring
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 pb-24 px-6">
        {/* floating shapes */}
        <div className="absolute top-20 left-10 h-24 w-24 rounded-full bg-accent/60 animate-float" />
        <div className="absolute top-40 right-16 h-16 w-16 rounded-full bg-secondary/70 animate-bob" />
        <div className="absolute bottom-10 left-1/3 h-12 w-12 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              <Coffee className="h-3.5 w-3.5" /> Ballarat · VIC
            </span>
            <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
              Coffee, charm <br />& a little bit of <span className="text-primary italic">salt.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              A cute little hideaway down Hancocks Lane — the calm, refreshing escape Ballarat didn't know it needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#visit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:scale-105 transition-transform">
                Find us <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/20 px-6 py-3 font-semibold hover:bg-foreground/5 transition">
                Peek the menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-secondary/40 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src={logo} alt="Sparrow chef mascot" className="w-full h-full object-cover" />
            </div>
            <img src={brownie} alt="Peanut butter bomb" className="absolute -bottom-8 -left-8 h-44 w-44 rounded-3xl object-cover shadow-xl -rotate-6 border-4 border-cream animate-bob" />
            <div className="absolute -top-6 -right-4 rounded-full bg-accent px-5 py-3 font-display font-bold text-accent-foreground shadow-lg animate-wiggle">
              ☕ try the hot choc
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-primary text-primary-foreground py-4 border-y-4 border-foreground/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap font-display text-2xl font-bold">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {["Specialty coffee", "Peanut butter bomb", "Hot choc heaven", "Open down the lane", "Locally loved"].map((t) => (
                <span key={t} className="flex items-center gap-8"><span>★</span>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* MENU / GALLERY */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Made with love</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">Little things, done properly.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">From the famous Peanut Butter Bomb to flaky lemon slices — everything's made to slow your morning down.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: brownie, title: "Peanut Butter Bomb", desc: "Rich chocolate, peanut butter centre, swimming in hot choc." },
              { img: lemon, title: "Lemon Coconut Slice", desc: "Zingy, buttery, with a fluffy coconut cloud on top." },
              { img: salt, title: "Specialty Roasts", desc: "Single-origin beans. Order a packet to take the lane home with you." },
            ].map((c) => (
              <article key={c.title} className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING — highlighted */}
      <section id="hiring" className="px-6 pb-24">
        <div className="max-w-6xl mx-auto relative">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-[oklch(0.55_0.2_15)] text-primary-foreground p-8 md:p-14 overflow-hidden shadow-2xl">
            <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-accent/30 blur-2xl" />
            <div className="absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cream/20 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-widest animate-pulse-glow w-fit" style={{ borderRadius: 999 }}>
                  <Sparkles className="h-4 w-4" /> We are hiring
                </div>
                <h2 className="mt-5 text-5xl md:text-6xl font-black leading-none">
                  Join the <span className="italic underline decoration-accent decoration-4 underline-offset-4">flock.</span>
                </h2>
                <p className="mt-5 max-w-xl text-primary-foreground/90 text-lg">
                  We're after a barista who can open, run the floor, multitask in a high-paced kitchen, and give outstanding customer service. Available all of June, July & August.
                </p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "Opens & operates the cafe independently",
                    "High level of barista skill",
                    "Outstanding customer service",
                    "Works independently & as a team",
                    "Multitasks in a high-paced kitchen",
                    "2-4 shifts / week, more in winter",
                  ].map((b) => (
                    <li key={b} className="flex gap-2"><span className="text-accent">✦</span>{b}</li>
                  ))}
                </ul>
                <a href="mailto:thesaltysparrowcafe@outlook.com?subject=Barista application" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream text-foreground px-6 py-3 font-bold hover:scale-105 transition-transform">
                  Apply by email <Mail className="h-4 w-4" />
                </a>
              </div>
              <img src={hiring} alt="We are hiring sign" className="rounded-2xl shadow-xl w-56 md:w-64 rotate-3 hover:rotate-0 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Loved by locals</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Word from the lane.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure key={r.name} className="bg-card rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex gap-1 text-primary mb-3">{"★★★★★"}</div>
                <blockquote className="text-foreground leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/15 grid place-items-center font-bold text-primary">{r.name[0]}</div>
                  <div>
                    <div className="font-bold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.date}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={truck} alt="The Salty Sparrow entrance" className="rounded-[2rem] shadow-2xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-4 shadow-xl rotate-6 animate-wiggle">
              <Heart className="h-8 w-8 text-primary fill-primary" />
            </div>
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Come say hi</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Tucked down Hancocks Lane.</h2>
            <div className="mt-8 space-y-5">
              <a href="https://maps.google.com/?q=105+Lydiard+Street+N+Ballarat" target="_blank" rel="noreferrer" className="flex gap-4 items-start group">
                <div className="h-12 w-12 rounded-full bg-primary/15 grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">Address</div>
                  <div className="text-muted-foreground">105 Lydiard Street N, down Hancocks Lane,<br />Ballarat, VIC, Australia, 3350</div>
                </div>
              </a>
              <a href="mailto:thesaltysparrowcafe@outlook.com" className="flex gap-4 items-start group">
                <div className="h-12 w-12 rounded-full bg-primary/15 grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-muted-foreground">thesaltysparrowcafe@outlook.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9 rounded-full" />
            <span className="font-display font-bold">The Salty Sparrow Cafe · Ballarat</span>
          </div>
          <p className="text-sm opacity-70">Made with ♥ in Ballarat. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
