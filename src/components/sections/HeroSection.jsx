import { ArrowDown, ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { hero, personal } from "@/data/personal";

// The hero animates with CSS (globals.css: .enter, .word-mask) so the most
// important content never waits for JavaScript. Words are split on the server;
// the text content (and what screen readers announce) is unchanged.
export default function HeroSection() {
  const words = hero.headline.split(" ");
  const afterHeadline = words.length * 70 + 300;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div data-parallax className="cover-grid absolute inset-0 opacity-60" />
      </div>

      <Container className="pt-16 pb-section sm:pt-24 lg:pt-32">
        <p className="enter flex items-center gap-3 text-caption text-muted uppercase">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          {personal.name} · {personal.title}
        </p>

        <h1 id="hero-title" className="mt-6 max-w-[13ch] text-hero text-balance sm:mt-8">
          {words.map((word, index) => (
            <span key={`${word}-${index}`}>
              <span className="word-mask">
                <span style={{ "--word-index": index }}>{word}</span>
              </span>
              {index < words.length - 1 && " "}
            </span>
          ))}
          <span
            aria-hidden="true"
            className="enter inline-block text-accent"
            style={{ "--enter-delay": `${afterHeadline - 150}ms` }}
          >
            .
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <p
            className="enter max-w-xl text-body-lg text-pretty text-muted lg:col-span-6"
            style={{ "--enter-delay": `${afterHeadline}ms` }}
          >
            {hero.description}
          </p>
          <div
            className="enter flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end"
            style={{ "--enter-delay": `${afterHeadline + 100}ms` }}
          >
            <Button href={hero.primaryCta.href} size="lg" icon={ArrowRight}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="secondary" icon={ArrowDown}>
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <dl
          className="enter mt-14 grid gap-6 border-t border-border pt-6 sm:grid-cols-3 lg:mt-20"
          style={{ "--enter-delay": `${afterHeadline + 200}ms` }}
        >
          {hero.meta.map((item) => (
            <div key={item.label}>
              <dt className="text-caption text-muted uppercase">{item.label}</dt>
              <dd className="mt-1.5 font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
