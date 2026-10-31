import { LawnComparison } from "../components/LawnComparison";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Leaf,
  MapPin,
  Menu,
  Pause,
  Phone,
  Play,
  Plus,
  Star,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const phone = "tel:+12092028558";
const maps =
  "https://www.google.com/maps/place/Muniz+Lawn+Care+and+Maintenance+LLC/@37.4657979,-121.1467318,17z/data=!4m6!3m5!1s0x8091b3de37feaaab:0x94fa317a5007f634!8m2!3d37.4657979!4d-121.1467318!16s%2Fg%2F11g03c6rgz";
const booking =
  "https://clienthub.getjobber.com/hubs/3c27cb72-edfc-4872-9e47-2e30fc6de9ff/public/requests/2082381/new";
const nav = [
  { label: "Our services", id: "services" },
  { label: "Our story", id: "story" },
  { label: "How it works", id: "process" },
  { label: "Reviews", id: "reviews" },
];

function Instagram({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Muniz Lawn Care home"
    >
      <img
        src="/images/logo.webp"
        alt="Muñiz Lawn Care & Maintenance LLC"
        width="1800"
        height="1080"
      />
    </a>
  );
}

function LawnAccent({ clippings = false }: { clippings?: boolean }) {
  return (
    <svg
      className={`lawn-accent ${clippings ? "lawn-clippings" : "lawn-grass"}`}
      viewBox="0 0 140 80"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {clippings ? (
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M20 25q12 1 18-10M63 12q-3 13 4 20M104 19q8 5 17 2M38 61q-2-12-12-17M78 58q10-2 14-13M115 65q-8-4-9-12" />
        </g>
      ) : (
        <g fill="currentColor">
          <path d="M37 73Q32 46 11 37Q36 40 47 73ZM48 73Q44 31 32 14Q57 33 58 73ZM60 73Q58 25 78 3Q68 37 71 73ZM75 73Q83 34 109 25Q89 45 87 73ZM92 73Q108 51 131 54Q107 63 103 73Z" />
          <path d="M16 76Q69 71 126 76Q71 80 16 76Z" opacity=".45" />
        </g>
      )}
    </svg>
  );
}

function MowerReveal() {
  return (
    <span className="mow-pass" aria-hidden="true">
      <svg className="hero-mower" viewBox="0 0 90 65" fill="none">
        <g
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g className="mow-clippings" stroke="#b4c887">
            <path d="M21 39l-7-5M16 47l-9 2M25 29l-3-7" />
          </g>
          <path d="M30 45l5-15h35l10 15Z" fill="var(--gold)" />
          <path d="M42 30V20h18v10M36 30L22 7H10" />
          <circle cx="39" cy="48" r="7" fill="var(--forest)" />
          <circle cx="70" cy="48" r="7" fill="var(--forest)" />
          <path d="M39 46v4m31-4v4" stroke="var(--gold)" />
        </g>
      </svg>
    </span>
  );
}

function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const manuallyPaused = useRef(false);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry?.isIntersecting &&
          !reduced.matches &&
          !manuallyPaused.current
        )
          void element.play().catch(() => setPlaying(false));
        else element.pause();
      },
      { threshold: 0.1 },
    );
    const onPreference = () => {
      if (reduced.matches) element.pause();
    };
    reduced.addEventListener("change", onPreference);
    observer.observe(element);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", onPreference);
    };
  }, []);
  function toggle() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      manuallyPaused.current = false;
      void element.play().catch(() => setPlaying(false));
    } else {
      manuallyPaused.current = true;
      element.pause();
    }
  }
  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        ref={video}
        className="hero-video"
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero.webp"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-hidden="true"
      >
        <source src="/muniz-mowing.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade" />
      <div className="hero-content wrap">
        <h1 id="hero-title">
          <span className="mow-line">
            <span className="mow-words">Come home</span>
            <MowerReveal />
          </span>
          <span className="mow-line">
            <span className="mow-words">
              <em>proud.</em>
            </span>
            <MowerReveal />
          </span>
        </h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-subtitle">
              <span className="mow-line">
                <span className="mow-words">Love what you pull up to.</span>
                <MowerReveal />
              </span>
              <span className="mow-line">
                <span className="mow-words">
                  Give the neighbors something to admire.
                </span>
                <MowerReveal />
              </span>
            </p>
            <a className="button button-cream" href="#contact">
              Get my estimate <ArrowUpRight size={19} />
            </a>
          </div>
          <a
            className="scroll-link"
            href="#services"
            aria-label="Explore our services"
          >
            <span>See what sets us apart</span>
            <span className="round-icon">
              <ArrowDown size={20} />
            </span>
          </a>
        </div>
      </div>
      <div className="hero-meta wrap">
        <span>
          <MapPin size={14} /> Patterson, California & surrounding communities
        </span>
        <button
          onClick={toggle}
          className="video-control"
          aria-label={
            playing ? "Pause background video" : "Play background video"
          }
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          <span>{playing ? "Pause" : "Play"} film</span>
        </button>
      </div>
    </section>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="header-cta">
          Get an estimate <ArrowUpRight size={18} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={20} />
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Get an estimate <ArrowUpRight size={20} />
          </a>
          <a href={phone}>(209) 202-8558</a>
        </nav>
      )}
    </header>
  );
}

function Services() {
  return (
    <section id="services" className="services section wrap">
      <LawnAccent clippings />
      <div className="section-intro">
        <h2>
          Raise the standard.
          <br />
          Reclaim your outdoors.
        </h2>
        <p>
          From a consistently crisp lawn to a complete yard refresh, give your
          property the attention it deserves. We handle the details. You enjoy
          the difference.
        </p>
      </div>
      <div className="service-features">
        <article className="service-feature">
          <img
            src="/images/lawn.webp"
            alt="Freshly mowed lawn with crisp edges beside a row of cypress trees"
            width="1000"
            height="1000"
            loading="lazy"
          />
          <div className="service-overlay">
            <span className="service-tag">SIGNATURE LAWN CARE</span>
            <h3>
              A sharper lawn,
              <br />
              week after week.
            </h3>
            <a
              href="#contact"
              aria-label="Get an estimate for recurring lawn care"
            >
              <ArrowUpRight size={28} />
            </a>
          </div>
          <div className="service-description">
            <p>Crisp edges. Consistent care. Curb appeal that lasts.</p>
            <span>Mowing & edging · Fertilizing · Weed control</span>
          </div>
        </article>
        <article className="service-feature">
          <img
            src="/images/landscape.webp"
            alt="Patterson front yard with lawn, planted borders and a clean walkway"
            width="1000"
            height="1000"
            loading="lazy"
          />
          <div className="service-overlay">
            <span className="service-tag">YARD TRANSFORMATIONS</span>
            <h3>
              Your yard.
              <br />
              Reimagined.
            </h3>
            <a
              href="#contact"
              aria-label="Get an estimate for yard improvements"
            >
              <ArrowUpRight size={28} />
            </a>
          </div>
          <div className="service-description">
            <p>Turn an overlooked yard into a standout outdoor space.</p>
            <span>Sod · Mulch · Cleanups & hauling · Pruning</span>
          </div>
        </article>
      </div>
      <div className="service-details">
        {[
          {
            name: "Mowing & lawn maintenance",
            text: "Weekly or biweekly mowing, edging and blowing, with seasonal attention to the way your lawn grows.",
          },
          {
            name: "Fertilizing & weed control",
            text: "Seasonal fertilizer applications and weed management to help your grass grow strong and keep garden beds looking cared for.",
          },
          {
            name: "Sod, mulch & yard cleanups",
            text: "Fresh sod, refreshed beds, pruning and cleanup with debris hauling. Tell us what you have in mind for your outdoor space.",
          },
          {
            name: "Sprinkler repair",
            text: "Help for the irrigation that keeps your landscape growing. We’ll take a look at the problem and discuss the repairs your yard needs.",
          },
        ].map((s) => (
          <details key={s.name}>
            <summary>
              {s.name}
              <Plus size={21} />
            </summary>
            <p>{s.text}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="story">
      <div className="wrap story-grid">
        <figure>
          <img
            src="/images/team.webp"
            alt="Rodrigo Muniz and the lawn care crew together in their truck"
            width="750"
            height="1000"
            loading="lazy"
          />
          <figcaption>Local roots. Pride in every detail.</figcaption>
        </figure>
        <div className="story-copy">
          <LawnAccent />
          <h2>
            Rooted here.
            <br />
            Invested in every
            <br />
            <em>yard.</em>
          </h2>
          <p>
            In the summer of 2008, Rodrigo Muniz started restoring neglected
            lawns around Patterson while working toward his college degree.
          </p>
          <p>
            That hands-on beginning shaped the business he runs today: attentive
            service, careful work, and pride in the finished result.
          </p>
          <p>
            From routine maintenance to a fresh start, Rodrigo and his crew
            focus on the details that make your entire property feel cared for.
          </p>
          <div className="signature">
            <span>Rodrigo Muniz</span>
            <span>Owner, Muniz Lawn Care & Maintenance</span>
          </div>
          <a
            href="https://www.instagram.com/munizlawncare/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            See our work up close <Instagram size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProcessIllustration({ scene }: { scene: "plan" | "mow" | "enjoy" }) {
  return (
    <svg
      className="process-illustration"
      viewBox="0 0 240 150"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="120"
        cy="123"
        rx="100"
        ry="17"
        fill="currentColor"
        opacity=".07"
      />
      <g
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {scene === "plan" ? (
          <>
            <path d="M63 25l78-8 11 105-78 8z" fill="var(--paper)" />
            <path d="M89 25l24-3 1 10-24 3z" fill="var(--gold)" />
            <path d="M85 63l24-20 28 16M91 60l4 28 34-4-3-27M107 86l-1-15 11-1 1 15" />
            <path d="M88 104l12-1m8-1 23-2M163 94V49l8-10 7 10v45l-7 16z" />
            <path d="M163 94h15M163 51h15" />
          </>
        ) : scene === "mow" ? (
          <>
            <path
              d="M29 118h61m-49-9h42m-24-9h24"
              stroke="var(--muted)"
              opacity=".6"
            />
            <path d="M93 108l8-22h64l19 22z" fill="var(--gold)" />
            <path d="M112 85V69h34v17M121 69v-7h17v7M161 87l24-60h24M181 39h22" />
            <circle cx="108" cy="113" r="12" fill="var(--paper)" />
            <circle cx="169" cy="113" r="12" fill="var(--paper)" />
            <circle cx="108" cy="113" r="3" fill="currentColor" />
            <circle cx="169" cy="113" r="3" fill="currentColor" />
            <path d="M194 119l3-13 6 13 9-20 2 20" />
          </>
        ) : (
          <>
            <path d="M77 53l22 47h58l22-47M86 72h84M94 89h68M99 100l-15 25m73-25 15 25M105 100l52 25m-6-25-48 25" />
            <path d="M76 52h104" stroke="var(--gold)" strokeWidth="8" />
            <path d="M36 121l3-12 6 12m151 0 4-16 5 16 8-10" />
            <circle cx="189" cy="30" r="12" fill="var(--gold)" stroke="none" />
            <path d="M52 101h22m-11 0v23m-7-36h14l-2 14h-10zM65 87l3-10h6" />
          </>
        )}
      </g>
    </svg>
  );
}

function Process() {
  const steps = [
    {
      art: <ProcessIllustration scene="plan" />,
      title: "Picture the possibilities.",
      text: "Tell us about your property and your priorities. Choose ongoing lawn care, a yard transformation, or both.",
    },
    {
      art: <ProcessIllustration scene="mow" />,
      title: "Leave it to our crew.",
      text: "Once we’ve agreed on the work and estimate, our crew gets to work on the cuts, edges, and finishing touches.",
    },
    {
      art: <ProcessIllustration scene="enjoy" />,
      title: "Take your weekends back.",
      text: "Let our crew handle the work. Come home to a polished outdoor space without giving up your weekends.",
    },
  ];
  return (
    <section id="process" className="process section wrap">
      <LawnAccent clippings />
      <div className="section-intro">
        <h2>
          Better curb appeal
          <br />
          starts right here.
        </h2>
        <a className="text-link" href="#contact">
          Request my estimate <ArrowUpRight size={20} />
        </a>
      </div>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step.title}>
            {step.art}
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="areas">
      <img
        src="/images/garden.webp"
        alt="A cared-for front lawn and planted garden at a local home"
        width="1800"
        height="1350"
        loading="lazy"
      />
      <div className="areas-content">
        <MapPin size={30} strokeWidth={1.3} />
        <h2>
          Local expertise.
          <br />
          Standout results.
        </h2>
        <p>
          Based in Patterson. Caring for yards
          <br />
          across our surrounding communities.
        </p>
        <a href="#contact" className="button button-cream">
          Check my service area <ArrowUpRight size={18} />
        </a>
        <span className="area-note">Patterson, California · Since 2008</span>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      quote:
        "“Every detail was considered and the installation was flawless. Very professional!”",
      author: "Eric Halsted",
      context: "Outdoor lighting installation",
    },
    {
      quote: "“he went above and beyond what I expected for the price”",
      author: "James bodiford",
      context: "Yard maintenance",
    },
    {
      quote:
        "“Always reliable and everyone on the crew is respectful and a damn hard worker.”",
      author: "Brian Reyes",
      context: "Lawn care",
    },
  ];
  return (
    <section id="reviews" className="reviews section wrap">
      <div className="section-intro">
        <h2>
          The details matter.
          <br />
          Our clients notice.
        </h2>
        <a className="rating" href={maps} target="_blank" rel="noreferrer">
          <span className="rating-score">
            4.9{" "}
            <span className="stars" aria-label="4.9 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </span>
          </span>
          <span>
            30 reviews on Google <ArrowUpRight size={14} />
          </span>
        </a>
      </div>
      <div className="review-grid">
        {reviews.map((r) => (
          <figure className="review" key={r.author}>
            <div className="stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <blockquote>{r.quote}</blockquote>
            <figcaption>
              <span className="avatar" aria-hidden="true">
                {r.author[0]}
              </span>
              <span>
                <strong>{r.author}</strong>
                <span>{r.context}</span>
              </span>
              <span className="google-mark" aria-label="Google">
                G
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="reviews-footer">
        <span>Selected excerpts · Google rating checked October 30, 2026</span>
        <a href={maps} target="_blank" rel="noreferrer" className="text-link">
          Read all reviews <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <LawnAccent />
          <h2>
            Your property.
            <br />
            At its
            <br />
            <em>very best.</em>
          </h2>
          <p>
            Ready for a yard that makes an impression?
            <br />
            Let’s put a plan behind it.
          </p>
          <a href={phone} className="contact-phone">
            <Phone size={20} />
            (209) 202-8558
          </a>
          <p className="hours">
            Monday–Friday · 6am–4pm
            <br />
            Saturday · 6am–2pm
          </p>
        </div>
        <div className="form-panel">
          <h3>Start your yard’s next chapter.</h3>
          <p>Tell us what you have in mind. Request your estimate below.</p>
          <form onSubmit={submit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="First and last name"
                  required
                  maxLength={120}
                />
              </label>
              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="(209) 555-0123"
                  required
                  maxLength={40}
                />
              </label>
            </div>
            <label>
              Email address
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
              />
            </label>
            <label>
              Property address
              <input
                name="address"
                autoComplete="street-address"
                placeholder="Street address, city and ZIP"
                required
                maxLength={300}
              />
            </label>
            <label>
              I’m interested in
              <div className="select-wrap">
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Recurring lawn care</option>
                  <option>Yard cleanup or transformation</option>
                  <option>Fertilizing & weed control</option>
                  <option>Sod & mulch</option>
                  <option>Sprinkler repair</option>
                  <option>A little of everything</option>
                </select>
                <ChevronDown size={18} />
              </div>
            </label>
            <label>
              A little about your yard
              <textarea
                name="message"
                rows={3}
                placeholder="What would you love to change?"
                maxLength={3000}
              />
            </label>
            <button className="button button-green" type="submit">
              Request my estimate <ArrowUpRight size={19} />
            </button>
            <p className="form-note">
              Local design preview: this form doesn’t send requests yet.
            </p>
            {submitted && (
              <div className="form-feedback" role="status">
                <Check size={20} />
                <p>
                  Your form is ready. Nothing was sent from this preview. For a
                  real request,{" "}
                  <a href={booking} target="_blank" rel="noreferrer">
                    use Muniz’s existing booking form
                  </a>{" "}
                  or call (209) 202-8558.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="trust-strip">
          <span>Locally rooted since 2008</span>
          <Leaf size={18} />
          <span>Precision in every detail</span>
          <Leaf size={18} />
          <span>Your property. Our pride.</span>
        </div>
        <Services />
        <LawnComparison />
        <Story />
        <Process />
        <Areas />
        <Reviews />
        <Contact />
      </main>
      <a
        className="floating-contact"
        href="#contact"
        aria-label="Contact us — go to the estimate form"
      >
        <Phone size={25} aria-hidden="true" />
      </a>
      <footer className="footer wrap">
        <div className="footer-top">
          <Brand footer />
          <p>A higher standard. Right outside.</p>
          <a
            href="https://www.instagram.com/munizlawncare/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="Muniz Lawn Care on Instagram"
          >
            <Instagram size={22} />
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Muniz Lawn Care & Maintenance LLC</span>
          <span>Patterson, California</span>
          <a href="#">
            Back to top <ArrowRight size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}
