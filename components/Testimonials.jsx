import { site } from '../site.config';
import Reveal from './Reveal';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <Reveal>
          <p className="eyebrow">In their words</p>
          <h2 className="section-title">Students who found their flow</h2>
        </Reveal>
        <div className="t-grid">
          {site.testimonials.map((t, i) => (
            <Reveal key={i} as="figure" className="t-card" delay={i * 100}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .testimonials { background: var(--forest); color: var(--stone); }
        .testimonials .eyebrow { color: var(--sand); }
        .testimonials .section-title { color: var(--white); font-size: clamp(2rem, 4vw, 2.9rem); margin-bottom: 52px; }
        .t-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .t-card {
          background: rgba(251,249,244,.06); border: 1px solid rgba(251,249,244,.14);
          border-radius: 20px; padding: 32px;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .t-card blockquote {
          font-family: var(--font-display); font-size: 1.18rem; line-height: 1.5;
          font-style: italic; margin-bottom: 24px; color: var(--white);
        }
        .t-card figcaption strong { display: block; }
        .t-card figcaption span { font-size: .85rem; color: var(--eucalyptus-light); }
        @media (max-width: 820px) { .t-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
