import { site } from '../site.config';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <p className="eyebrow">In their words</p>
        <h2 className="section-title">Students who found their flow</h2>
        <div className="t-grid">
          {site.testimonials.map((t, i) => (
            <figure key={i} className="t-card">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        .testimonials { background: var(--sage-deep); color: var(--cream); }
        .testimonials .eyebrow { color: var(--clay); }
        .testimonials .section-title { color: var(--cream); }
        .t-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .t-card {
          background: rgba(255,253,248,.06); border: 1px solid rgba(255,253,248,.12);
          border-radius: 18px; padding: 30px;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .t-card blockquote {
          font-family: var(--font-display); font-size: 1.15rem; line-height: 1.5;
          font-style: italic; margin-bottom: 24px; color: var(--white);
        }
        .t-card figcaption strong { display: block; }
        .t-card figcaption span { font-size: .85rem; color: var(--sage-light); }
        @media (max-width: 820px) { .t-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
