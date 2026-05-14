import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MapPin, Mail, Phone, Facebook, Instagram, Music2, Church, Waves, Landmark, Mountain, Utensils, Sparkles, Calendar, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useReveal } from "@/hooks/use-reveal";
import hero from "@/assets/hero-guadalupe.jpg";
import ceviche from "@/assets/food-ceviche.jpg";
import arrozPato from "@/assets/food-arroz-pato.jpg";
import cabrito from "@/assets/food-cabrito.jpg";
import iglesia from "@/assets/tour-iglesia.jpg";
import playa from "@/assets/tour-playa.jpg";
import plaza from "@/assets/tour-plaza.jpg";
import ruinas from "@/assets/tour-ruinas.jpg";
import marinera from "@/assets/cultura-marinera.jpg";
import procesion from "@/assets/cultura-procesion.jpg";
import artesania from "@/assets/gallery-artesania.jpg";
import caballito from "@/assets/gallery-caballito.jpg";
import paisaje from "@/assets/gallery-paisaje.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guadalupe, La Libertad — Cultura, Tradición y Sabor" },
      { name: "description", content: "Descubre Guadalupe, La Libertad: historia, gastronomía norteña, playas, festividades y turismo en el norte del Perú." },
      { property: "og:title", content: "Guadalupe — Cultura, Tradición y Sabor" },
      { property: "og:description", content: "Una joya cultural y gastronómica del norte del Perú." },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "sobre", label: "Sobre" },
  { id: "gastronomia", label: "Gastronomía" },
  { id: "turismo", label: "Turismo" },
  { id: "galeria", label: "Galería" },
  { id: "cultura", label: "Cultura" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "contacto", label: "Contacto" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="w-8 h-8 rounded-full bg-gradient-warm shadow-glow" />
          <span>Guadalupe</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-primary transition-colors">{n.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="text-sm font-medium">{n.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Guadalupe, La Libertad al atardecer" className="w-full h-full object-cover scale-105" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <p className="inline-block text-xs tracking-[0.4em] uppercase text-white/80 border border-white/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
          La Libertad · Perú
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] animate-fade-in">
          Guadalupe: <span className="text-gradient-warm">Cultura,</span><br />
          Tradición y Sabor
        </h1>
        <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Una joya del norte peruano donde la historia colonial, las playas doradas y la mejor gastronomía se encuentran.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in">
          <a href="#sobre">
            <Button size="lg" className="bg-gradient-warm hover:opacity-90 text-white border-0 shadow-glow rounded-full px-8 h-14 text-base">
              Explorar <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#turismo">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/40 hover:bg-white/20 rounded-full px-8 h-14 text-base">
              Ver lugares
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest animate-float">
        SCROLL
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 reveal">
      <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Sobre() {
  const cards = [
    { icon: Landmark, title: "Historia colonial", text: "Fundada en el siglo XVI, Guadalupe conserva la huella de la colonia y un pasado prehispánico ligado a los Chimú y Mochica." },
    { icon: Users, title: "Gente cálida", text: "Su identidad se forja en el orgullo norteño: hospitalaria, trabajadora y profundamente ligada a sus raíces." },
    { icon: Sparkles, title: "Tradición viva", text: "Festividades religiosas, danzas como la marinera y costumbres que se transmiten de generación en generación." },
  ];
  return (
    <section id="sobre" className="py-28 px-6 bg-gradient-sand">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Sobre Guadalupe" title="Una localidad con alma norteña" subtitle="Ubicada en la provincia de Pacasmayo, La Libertad, Guadalupe es tierra de cultura, fe y sabor." />
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="reveal group bg-card rounded-3xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gastronomia() {
  const dishes = [
    { img: ceviche, name: "Ceviche Norteño", desc: "Pescado fresco del litoral, limón, ají limo y cebolla morada. El emblema del Perú." },
    { img: arrozPato, name: "Arroz con Pato", desc: "Arroz teñido con culantro y chicha de jora, acompañado de pato tierno cocido a fuego lento." },
    { img: cabrito, name: "Cabrito a la Norteña", desc: "Cabrito macerado en chicha y ají amarillo, servido con frejoles y arroz blanco." },
  ];
  return (
    <section id="gastronomia" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Gastronomía" title="Sabores que cuentan historias" subtitle="La cocina norteña de Guadalupe es una explosión de tradición, frescura y aromas inolvidables." />
        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((d, i) => (
            <article key={i} className="reveal group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-glow transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Utensils className="h-5 w-5 mb-3 text-primary-glow" />
                <h3 className="text-2xl font-bold mb-2">{d.name}</h3>
                <p className="text-white/85 text-sm leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-32 transition-all duration-500">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Turismo() {
  const places = [
    { img: iglesia, name: "Iglesia Matriz", icon: Church, tag: "Patrimonio" },
    { img: playa, name: "Playas de Pacasmayo", icon: Waves, tag: "Costa" },
    { img: plaza, name: "Plaza de Armas", icon: Landmark, tag: "Histórico" },
    { img: ruinas, name: "Complejo Farfán", icon: Mountain, tag: "Arqueología" },
  ];
  return (
    <section id="turismo" className="py-28 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Turismo" title="Lugares que te enamoran" subtitle="Desde iglesias coloniales hasta playas de surf de talla mundial." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((p, i) => (
            <a key={i} href="#galeria" className="reveal group relative overflow-hidden rounded-3xl aspect-[3/4] block">
              <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
                <p.icon className="h-3.5 w-3.5" /> {p.tag}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-white/70 flex items-center gap-1">Conocer <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /></p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Galería" title="Postales de Guadalupe" subtitle="Imágenes que capturan la esencia, los colores y el espíritu del pueblo." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          <img src={artesania} alt="Artesanía" loading="lazy" className="w-full h-full object-cover rounded-2xl row-span-2 aspect-[3/4] hover:scale-[1.02] transition-transform duration-500" />
          <img src={paisaje} alt="Paisaje" loading="lazy" className="col-span-2 w-full h-full object-cover rounded-2xl aspect-[16/9] hover:scale-[1.02] transition-transform duration-500" />
          <img src={caballito} alt="Caballito de totora" loading="lazy" className="w-full h-full object-cover rounded-2xl aspect-square hover:scale-[1.02] transition-transform duration-500" />
          <img src={ceviche} alt="Ceviche" loading="lazy" className="w-full h-full object-cover rounded-2xl aspect-square hover:scale-[1.02] transition-transform duration-500" />
          <img src={iglesia} alt="Iglesia" loading="lazy" className="w-full h-full object-cover rounded-2xl aspect-square hover:scale-[1.02] transition-transform duration-500" />
          <img src={playa} alt="Playa" loading="lazy" className="col-span-2 w-full h-full object-cover rounded-2xl aspect-[16/9] hover:scale-[1.02] transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
}

function Cultura() {
  const items = [
    { img: marinera, title: "Marinera Norteña", desc: "Danza nacional del Perú, símbolo de elegancia y coqueteo, presente en cada celebración." },
    { img: procesion, title: "Virgen de Guadalupe", desc: "La festividad religiosa más importante: procesiones, devoción y celebración cada diciembre." },
  ];
  return (
    <section id="cultura" className="py-28 px-6 bg-gradient-sand">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Cultura y Festividades" title="Tradiciones que laten" subtitle="Música, danza y fe que dan ritmo a la vida en Guadalupe." />
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <div key={i} className="reveal group relative overflow-hidden rounded-3xl shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 bg-card">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase mb-3">
                  <Calendar className="h-4 w-4" /> Festividad
                </div>
                <h3 className="text-2xl font-bold mb-2">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Ubicación" title="¿Cómo llegar?" subtitle="A 700 km al norte de Lima, en la provincia de Pacasmayo, región La Libertad." />
        <div className="grid lg:grid-cols-3 gap-8 reveal">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-soft aspect-[16/10] border border-border">
            <iframe
              title="Mapa de Guadalupe, La Libertad"
              src="https://www.google.com/maps?q=Guadalupe,+La+Libertad,+Per%C3%BA&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Distrito de Guadalupe", text: "Provincia de Pacasmayo, La Libertad, Perú" },
              { icon: Mountain, title: "Altitud", text: "40 msnm — costa norte peruana" },
              { icon: Users, title: "Población", text: "Aprox. 40,000 habitantes" },
              { icon: Calendar, title: "Mejor época", text: "Diciembre a marzo, clima cálido y festividades" },
            ].map((it, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-5 flex gap-4 hover:shadow-soft transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center text-secondary shrink-0">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-0.5">{it.title}</h4>
                  <p className="text-sm text-muted-foreground">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-28 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-primary-glow font-semibold mb-4">Contacto</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Conversemos</h2>
          <p className="text-white/70 text-lg">¿Te gustaría visitar Guadalupe o saber más? Escríbenos.</p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); alert("¡Gracias! Te responderemos pronto."); }}
          className="reveal grid md:grid-cols-2 gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
        >
          <Input required placeholder="Tu nombre" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl" />
          <Input required type="email" placeholder="Email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl" />
          <Input placeholder="Asunto" className="md:col-span-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl" />
          <Textarea required placeholder="Tu mensaje" rows={5} className="md:col-span-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl" />
          <Button type="submit" size="lg" className="md:col-span-2 bg-gradient-warm hover:opacity-90 text-white border-0 rounded-xl h-14 shadow-glow">
            Enviar mensaje <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.05_255)] text-white/80 py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl font-bold text-white mb-3">
            <span className="w-9 h-9 rounded-full bg-gradient-warm" />
            Guadalupe
          </div>
          <p className="text-sm text-white/60 leading-relaxed">Cultura, tradición y sabor del norte peruano. Un destino que te espera con los brazos abiertos.</p>
        </div>
        <div className="text-sm">
          <h5 className="font-bold text-white mb-3">Contacto</h5>
          <p className="flex items-center gap-2 mb-2"><Mail className="h-4 w-4 text-primary-glow" /> visita@guadalupe.pe</p>
          <p className="flex items-center gap-2 mb-2"><Phone className="h-4 w-4 text-primary-glow" /> +51 944 000 000</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-glow" /> Guadalupe, La Libertad</p>
        </div>
        <div>
          <h5 className="font-bold text-white mb-3">Síguenos</h5>
          <div className="flex gap-3">
            {[Facebook, Instagram, Music2].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-11 h-11 rounded-full bg-white/10 hover:bg-gradient-warm hover:scale-110 transition-all flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-wrap justify-between gap-2">
        <p>© {new Date().getFullYear()} Guadalupe — Todos los derechos reservados.</p>
        <p>Hecho con orgullo norteño</p>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Gastronomia />
        <Turismo />
        <Galeria />
        <Cultura />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
