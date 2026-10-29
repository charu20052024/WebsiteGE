import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  "Web Design & Dev",
  "Business Automation",
  "Design Creative",
  "Video production",
  "SEO",
  "Performance Marketing",
];

const servicesRow = [...services, ...services, ...services];

const navLinks = ["Services", "Works", "Process"];

export default function Home() {
  return (
    <main className="hero">
      <div className="hero__overlay" />

      <header className="nav">
        <Link href="/" className="nav__logo" aria-label="Home">
          <Image
            src="/logo.png"
            alt="Website GE logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        <nav className="nav__links">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
          <a href="#contact" className="nav__cta">
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <section className="hero__content">
        <p className="hero__eyebrow">Digital Growth Agency</p>
        <h1 className="hero__title">
          We Catalyze
          <br />
          Digital Growth.
        </h1>
        <p className="hero__subtitle">
          We&apos;re A Full-Service Digital Growth Agency — Combining
          Performance Marketing, Intelligent Automation, And Standout Design To
          Grow Businesses That Matter.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--light">
            Start Growing
          </a>
          <a href="#works" className="btn btn--green">
            View Work
          </a>
        </div>
      </section>

      <div className="services">
        <div className="services__track">
          {[0, 1].map((copy) => (
            <div
              className="services__group"
              key={copy}
              aria-hidden={copy === 1}
            >
              {servicesRow.map((service, index) => (
                <Fragment key={`${copy}-${index}`}>
                  {index > 0 && (
                    <span className="services__diamond" aria-hidden />
                  )}
                  <span className="services__item">{service}</span>
                </Fragment>
              ))}
              <span className="services__diamond" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
