import { site } from '../site.config';
import { waLink } from './wa';

export default function Classes() {
  return (
    <section id="classes" className="classes">
      <div className="container">
        <p className="eyebrow">What we practice</p>
        <h2 className="section-title">Classes for every stage of your practice</h2>
        <div className="class-grid">
          {site.classes.map((c) => (
            <div key={c.name} className="class-card">
              <span className="level-tag">{c.level}</span>
              <h3>{c.name}</h3>
              <p className="class-desc">{c.desc}</p>
              <p className="class-time">{c.time}</p>
              <a
                href={waLink(`Hi, I'd like to join the "${c.name}" class. Can you tell me more?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="class-link"
              >
                Ask about this class →
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .classes { background: var(--white); }
        .section-title { font-size: clamp(2rem, 4vw, 2.8rem); color: var(--sage-deep); margin-bottom: 48px; max-width: 620px; }
        .class-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .class-card {
          background: var(--cream); border-radius: 18px; padding: 32px;
          border: 1px solid var(--cream-dark);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .class-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(61,74,62,.1); }
        .level-tag {
          display: inline-block; font-size: .72rem; letter-spacing: .1em; text-transform: uppercase;
          color: var(--clay-deep); background: var(--cream-dark);
          padding: 5px 12px; border-radius: 100px; font-weight: 600; margin-bottom: 16px;
        }
        .class-card h3 { font-size: 1.5rem; color: var(--ink); margin-bottom: 10px; }
        .class-desc { color: var(--ink-soft); margin-bottom: 18px; }
        .class-time { font-weight: 600; color: var(--sage-deep); font-size: .9rem; margin-bottom: 18px; }
        .class-link { color: var(--clay-deep); font-weight: 600; font-size: .95rem; }
        .class-link:hover { text-decoration: underline; }
        @media (max-width: 720px) { .class-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
