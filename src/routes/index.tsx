import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Star, Mail, ShoppingBag, ChevronRight, Menu, X, ZoomIn } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Wheat } from "@/components/Wheat";
import facade from "@/assets/facade.png.asset.json";
import baguette from "@/assets/baguette.jpg";
import levain from "@/assets/levain.jpg";
import croissant from "@/assets/croissant.jpg";
import painchoc from "@/assets/painchoc.jpg";
import framboisier from "@/assets/framboisier.jpg";
import foretnoire from "@/assets/foretnoire.jpg";
import tarte from "@/assets/tarte.jpg";
import quiche from "@/assets/quiche.jpg";
import birthday from "@/assets/birthday.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boulangerie Blé à Ba — Artisan Boulanger au Pian-Médoc" },
      {
        name: "description",
        content:
          "Boulangerie-pâtisserie artisanale au cœur du Pian-Médoc. Pain au levain panaire, viennoiseries pur beurre, pâtisseries et gâteaux sur mesure. Réservation au 05 56 99 24 70.",
      },
      { property: "og:title", content: "Boulangerie Blé à Ba — Artisan Boulanger au Pian-Médoc" },
      {
        property: "og:description",
        content:
          "Pain au levain, viennoiseries, pâtisseries et gâteaux d'anniversaire personnalisés. Vente à emporter — 463 Rue Pasteur, Le Pian-Médoc.",
      },
      { property: "og:image", content: facade.url },
    ],
  }),
  component: Index,
});

const PHONE = "05 56 99 24 70";
const PHONE_TEL = "+33556992470";

type Category = "pains" | "viennoiseries" | "patisseries" | "snacking";

const PRODUCTS: Record<Category, { name: string; price: string; desc: string; img: string }[]> = {
  pains: [
    {
      name: "Baguette de tradition",
      price: "1,20 €",
      desc: "Mie alvéolée, croûte dorée et croustillante, façonnée à la main chaque matin.",
      img: baguette,
    },
    {
      name: "Pain au levain panaire",
      price: "4,80 € / kg",
      desc: "Levain naturel, longue fermentation, farine de meule. Une signature de la maison.",
      img: levain,
    },
    {
      name: "Le Pain Complet aux Graines",
      price: "5,20 € / kg",
      desc: "Farine complète, mélange de graines de tournesol, lin et sésame. Riche en fibres et plein de caractère.",
      img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "La Flûte Gardoise",
      price: "1,80 €",
      desc: "Une flûte généreuse, mie aérée et croûte fine, parfaite pour accompagner vos repas en famille.",
      img: "https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&fit=crop&w=900&q=80",
    },
  ],
  viennoiseries: [
    {
      name: "Croissant pur beurre",
      price: "1,30 €",
      desc: "Feuilletage généreux au beurre AOP des Charentes, doré et fondant.",
      img: croissant,
    },
    {
      name: "Pain au chocolat",
      price: "1,50 €",
      desc: "Deux barres de chocolat noir enveloppées d'une pâte feuilletée pur beurre.",
      img: painchoc,
    },
    {
      name: "Le Chausson aux Pommes",
      price: "1,90 €",
      desc: "Feuilletage croustillant garni d'une compotée de pommes maison, légèrement vanillée.",
      img: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "La Brioche Feuilletée",
      price: "3,80 €",
      desc: "Mariage gourmand de la brioche moelleuse et du feuilletage pur beurre. Idéale pour le petit-déjeuner.",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    },
  ],
  patisseries: [
    {
      name: "Tarte de saison",
      price: "3,80 € la part",
      desc: "Fruits frais du marché, pâte sablée maison, crème onctueuse.",
      img: tarte,
    },
    {
      name: "Framboisier",
      price: "à partir de 4,50 €",
      desc: "Biscuit moelleux, mousse légère, framboises fraîches. Un grand classique de la maison.",
      img: framboisier,
    },
    {
      name: "L'Éclair au Café",
      price: "3,20 €",
      desc: "Pâte à choux délicate, crème pâtissière au café d'exception, glaçage fondant brillant.",
      img: "https://images.unsplash.com/photo-1620980776848-84cd97194fae?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "La Tartelette aux Fraises",
      price: "3,90 €",
      desc: "Sablé breton, crème vanille bourbon et fraises Gariguette sélectionnées chez nos producteurs.",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Le Flan Pâtissier",
      price: "3,50 € la part",
      desc: "Crème onctueuse à la vanille de Madagascar sur une pâte brisée maison, doré au four.",
      img: "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?auto=format&fit=crop&w=900&q=80",
    },
  ],
  snacking: [
    {
      name: "Quiches & sandwichs",
      price: "3,50 — 6,50 €",
      desc: "Préparations maison du jour : quiche lorraine, sandwichs garnis, tartes salées.",
      img: quiche,
    },
    {
      name: "Le Panini Italien",
      price: "5,90 €",
      desc: "Pain panini grillé, mozzarella fondante, tomate, basilic frais et jambon cru d'Italie.",
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Formule Déjeuner",
      price: "9,90 €",
      desc: "Sandwich au choix + boisson fraîche + dessert du jour. La pause gourmande idéale du midi.",
      img: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

const TABS: { id: Category; label: string }[] = [
  { id: "pains", label: "Pains & Levain" },
  { id: "viennoiseries", label: "Viennoiseries" },
  { id: "patisseries", label: "Pâtisseries" },
  { id: "snacking", label: "Snacking" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#produits", label: "Nos Pains & Viennoiseries" },
    { href: "#gateaux", label: "Pâtisseries & Événements" },
    { href: "#infos", label: "Infos Pratiques" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--anthracite)]/95 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden md:inline-flex items-center gap-2 bg-[var(--bordeaux)] hover:bg-[var(--bordeaux)]/90 text-[var(--cream)] px-4 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-black/20"
        >
          <Phone size={16} /> {PHONE}
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[var(--cream)] p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[var(--anthracite)] border-t border-white/5 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-[var(--cream)]/90 py-2 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="md:hidden flex items-center justify-center gap-2 bg-[var(--bordeaux)] text-[var(--cream)] px-4 py-3 rounded-full font-semibold mt-2"
          >
            <Phone size={18} /> Appeler : {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={`md:hidden fixed bottom-4 inset-x-4 z-40 inline-flex items-center justify-center gap-2 bg-[var(--bordeaux)] text-[var(--cream)] px-5 py-4 rounded-full font-bold text-base shadow-2xl shadow-black/40 active:scale-95 transition ${className}`}
    >
      <Phone size={18} /> Appeler : {PHONE}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      <div className="absolute inset-0">
        <img
          src={facade.url}
          alt="Devanture de la boulangerie Blé à Ba au Pian-Médoc"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--anthracite)]/85 via-[var(--anthracite)]/60 to-[var(--anthracite)]/95" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-6">
          <Wheat size={14} /> Boulangerie & Pâtisserie artisanale
        </div>

        <div className="bg-[var(--anthracite)]/70 backdrop-blur-md border border-[var(--gold)]/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-[var(--cream)] leading-tight">
            Boulangerie <span className="text-[var(--gold)] italic">Blé à Ba</span>
            <span className="block text-xl sm:text-2xl md:text-3xl mt-3 text-[var(--cream)]/90 font-normal">
              Votre artisan boulanger au cœur du bourg du Pian-Médoc.
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[var(--cream)]/75 max-w-2xl mx-auto">
            Pain au levain panaire, viennoiseries croustillantes, pâtisseries et snacking gourmand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-[var(--bordeaux)] hover:bg-[var(--bordeaux)]/90 text-[var(--cream)] px-6 py-3.5 rounded-full font-semibold transition-all hover:scale-[1.02] shadow-xl"
            >
              <Phone size={18} /> Appeler la boulangerie
            </a>
            <a
              href="#produits"
              className="inline-flex items-center justify-center gap-2 bg-[var(--cream)]/10 hover:bg-[var(--cream)]/15 text-[var(--cream)] px-6 py-3.5 rounded-full font-semibold border border-[var(--cream)]/20 transition-all"
            >
              Découvrir nos produits <ChevronRight size={18} />
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--anthracite)]">
            Et bien plus encore à découvrir en boutique...
          </h3>
          <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
            Notre fournil regorge de gourmandises quotidiennes ! Sandwichs du jour, pains spéciaux éphémères ou viennoiseries de saison... N'hésitez pas à passer nous voir ou à nous appeler pour connaître nos créations du moment.
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [tab, setTab] = useState<Category>("pains");
  return (
    <section id="produits" className="py-20 md:py-28 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[var(--bordeaux)] text-xs font-bold uppercase tracking-widest mb-3">
            <Wheat size={14} /> Nos produits
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--anthracite)]">
            Le meilleur du fournil, chaque matin
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            Des recettes traditionnelles, des matières premières sélectionnées, et tout le savoir-faire d'un vrai artisan.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === t.id
                  ? "bg-[var(--anthracite)] text-[var(--cream)] shadow-lg"
                  : "bg-white text-[var(--anthracite)] hover:bg-[var(--muted)] border border-[var(--border)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS[tab].map((p) => (
            <article
              key={p.name}
              className="group bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl text-[var(--anthracite)]">{p.name}</h3>
                  <span className="text-[var(--bordeaux)] font-bold text-sm whitespace-nowrap">{p.price}</span>
                </div>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{p.desc}</p>
                <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs text-[var(--anthracite)]/70">
                  <ShoppingBag size={14} className="text-[var(--gold)]" />
                  <span>
                    Disponible en boutique — pour réserver,{" "}
                    <a href={`tel:${PHONE_TEL}`} className="text-[var(--bordeaux)] font-semibold hover:underline">
                      {PHONE}
                    </a>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Camille L.",
    text: "Le gâteau d'anniversaire de ma fille était magnifique et succulent. Tout le monde s'est régalé !",
  },
  {
    name: "Julien M.",
    text: "Un Framboisier qui fond en bouche, des framboises ultra fraîches. La meilleure pâtisserie du Médoc.",
  },
  {
    name: "Sophie R.",
    text: "Pâtissière à l'écoute, créative, et un rendu visuel à tomber pour notre mariage. Merci !",
  },
];

function Cakes() {
  return (
    <section id="gateaux" className="py-20 md:py-28 bg-[var(--anthracite)] text-[var(--cream)] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--bordeaux)]/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-4">
              <Wheat size={14} /> Spécialité de la maison
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Gâteaux d'anniversaire <span className="italic text-[var(--gold)]">sur mesure</span>
            </h2>
            <p className="mt-5 text-[var(--cream)]/80 text-lg leading-relaxed">
              Pour vos anniversaires, mariages et grands événements, notre pâtissière imagine des créations uniques,
              personnalisées et toujours gourmandes. Parmi nos grands succès : le <strong className="text-[var(--gold)]">Framboisier</strong> et la
              légendaire <strong className="text-[var(--gold)]">Forêt Noire</strong>.
            </p>

            <div className="mt-8 flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl font-display text-[var(--gold)]">4,8<span className="text-2xl text-[var(--cream)]/60">/5</span></div>
              <div>
                <div className="flex gap-1 text-[var(--gold)]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="text-xs text-[var(--cream)]/70 mt-1">Note Google — avis clients vérifiés</div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {REVIEWS.map((r) => (
                <div key={r.name} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-sm italic text-[var(--cream)]/85">"{r.text}"</p>
                  <p className="text-xs text-[var(--gold)] mt-2 font-semibold">— {r.name}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-[var(--bordeaux)] hover:bg-[var(--bordeaux)]/90 text-[var(--cream)] px-6 py-3.5 rounded-full font-semibold transition-all hover:scale-[1.02] shadow-xl"
            >
              Demander un gâteau <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
              <img src={birthday} alt="Gâteau d'anniversaire sur mesure" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img src={framboisier} alt="Framboisier" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img src={foretnoire} alt="Forêt Noire" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Infos() {
  return (
    <section id="infos" className="py-20 md:py-28 bg-[var(--anthracite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            <Wheat size={14} /> Infos pratiques
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white">Venez nous rencontrer</h2>
        </div>

        <div id="contact" className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                lines: ["463 Rue Pasteur", "33290 Le Pian-Médoc"],
              },
              {
                icon: Phone,
                title: "Téléphone",
                lines: [PHONE],
                href: `tel:${PHONE_TEL}`,
              },
              {
                icon: ShoppingBag,
                title: "Service",
                lines: ["Vente à emporter uniquement", "Pas de livraison"],
              },
              {
                icon: Clock,
                title: "Réservations",
                lines: ["Pour réserver un produit ou un gâteau, appelez-nous directement."],
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--bordeaux)]/40 text-[var(--gold)] flex items-center justify-center">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">{item.title}</h3>
                  {item.lines.map((l, i) =>
                    item.href && i === 0 ? (
                      <a key={i} href={item.href} className="block text-[var(--gold)] font-bold text-lg hover:underline">
                        {l}
                      </a>
                    ) : (
                      <p key={i} className="text-[var(--cream)]/70 text-sm">
                        {l}
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>


          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-white/5 border border-white/10 backdrop-blur-sm text-[var(--cream)] p-8 rounded-3xl shadow-2xl"
    >
      <h3 className="font-display text-2xl mb-2">Une question ou une demande de gâteau ?</h3>
      <p className="text-sm text-[var(--cream)]/70 mb-6">
        Laissez-nous un message, nous vous rappelons rapidement.
      </p>

      {sent ? (
        <div className="p-6 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-center">
          <Mail className="mx-auto text-[var(--gold)] mb-3" size={28} />
          <p className="font-semibold text-[var(--gold)]">Message bien reçu !</p>
          <p className="text-sm text-[var(--cream)]/80 mt-1">
            Pour toute demande urgente, appelez-nous au{" "}
            <a href={`tel:${PHONE_TEL}`} className="underline">
              {PHONE}
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nom" name="nom" required />
            <Field label="Téléphone" name="tel" type="tel" required />
          </div>
          <Field label="Type de produit" name="type" placeholder="Ex : gâteau d'anniversaire, framboisier..." />
          <Field label="Date de retrait souhaitée" name="date" type="date" />
          <div>
            <label className="block text-xs font-semibold text-[var(--cream)]/80 mb-2 uppercase tracking-wide">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[var(--cream)] placeholder:text-[var(--cream)]/40 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30 outline-none transition"
              placeholder="Parlez-nous de votre projet..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--bordeaux)] hover:bg-[var(--bordeaux)]/90 text-[var(--cream)] py-3.5 rounded-full font-semibold transition-all hover:scale-[1.01] shadow-lg"
          >
            Envoyer ma demande
          </button>
          <p className="text-xs text-[var(--cream)]/50 text-center">
            Réponse plus rapide par téléphone : <a href={`tel:${PHONE_TEL}`} className="underline">{PHONE}</a>
          </p>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-[var(--cream)]/80 mb-2 uppercase tracking-wide">
        {label} {required && <span className="text-[var(--gold)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[var(--cream)] placeholder:text-[var(--cream)]/40 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30 outline-none transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--anthracite)] text-[var(--cream)]/70 border-t border-white/5 py-10 pb-28 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo compact />
        <p className="text-xs text-center">
          © {new Date().getFullYear()} Boulangerie Blé à Ba — Artisan Boulanger au Pian-Médoc
        </p>
      </div>
    </footer>
  );
}

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=1200&q=80", alt: "Gâteau d'anniversaire à étages" },
  { src: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=1200&q=80", alt: "Pièce montée fleurie" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80", alt: "Entremets chocolat" },
  { src: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=1200&q=80", alt: "Gâteau fruits rouges" },
  { src: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=1200&q=80", alt: "Layer cake gourmand" },
  { src: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=1200&q=80", alt: "Création pâtissière sur mesure" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="realisations" className="py-20 md:py-28 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[var(--bordeaux)] text-xs font-bold uppercase tracking-widest mb-3">
            <Wheat size={14} /> Portfolio
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--anthracite)]">Nos Réalisations Passées</h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            Inspirez-vous de nos créations précédentes pour vos événements. Chaque gâteau est unique et entièrement personnalisable selon vos envies !
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
              aria-label={`Agrandir : ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--anthracite)]/0 group-hover:bg-[var(--anthracite)]/40 transition-colors flex items-center justify-center">
                <ZoomIn className="text-[var(--cream)] opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

function Index() {
  return (
    <div className="bg-[var(--cream)] text-[var(--anthracite)]">
      <Header />
      <main>
        <Hero />
        <Products />
        <Cakes />
        <Gallery />
        <Infos />
      </main>
      <Footer />
      <CallButton />
    </div>
  );
}
