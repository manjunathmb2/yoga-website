import Reveal from './Reveal';

const POSES = [
  { src: '/poses/pose-standing.png', label: 'Natarajasana', tag: 'Balance', note: 'The dancer\u2019s pose \u2014 grace, focus, and a steady standing balance.' },
  { src: '/poses/pose-scorpion.png', label: 'Vrschikasana', tag: 'Strength', note: 'The scorpion \u2014 deep backbend and control built over years of practice.' },
  { src: '/poses/pose-backbend.png', label: 'Deep Backbend', tag: 'Flexibility', note: 'Opening the spine and chest with a slow, mindful backbend.' },
  { src: '/poses/pose-inverted.png', label: 'Inversion', tag: 'Focus', note: 'Turning the world upside down \u2014 calm and clarity through inversion.' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Practice in motion</p>
          <h2 className="section-title">Strength, balance, grace</h2>
        </Reveal>
      </div>

      <div className="stack">
        {POSES.map((p, i) => (
          <div className="stack-item" key={p.label} style={{ top: `${90 + i * 26}px` }}>
            <div className="stack-card">
              <div className="card-media">
                <img src={p.src} alt={p.label} loading="lazy" />
              </div>
              <div className="card-copy">
                <span className="card-tag">{p.tag}</span>
                <h3>{p.label}</h3>
                <p>{p.note}</p>
                <span className="card-num">0{i + 1} / 0{POSES.length}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gallery { background: var(--white); padding-bottom: 60px; }
        .section-title { font-size: clamp(2rem, 4vw, 2.9rem); color: var(--forest); margin-bottom: 20px; }

        .stack { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
        .stack-item {
          position: sticky;
          height: 78vh;
          display: flex; align-items: center;
        }
        .stack-card {
          width: 100%;
          background: linear-gradient(150deg, var(--stone), var(--stone-dark));
          border-radius: 28px;
          box-shadow: 0 24px 60px rgba(24,34,25,.18);
          display: grid; grid-template-columns: 1fr 1fr;
          overflow: hidden;
          min-height: 60vh;
          border: 1px solid rgba(255,255,255,.5);
        }
        .card-media {
          display: flex; align-items: flex-end; justify-content: center;
          padding: 20px 10px 0;
        }
        .card-media img {
          height: 100%; max-height: 56vh; width: auto; object-fit: contain;
          filter: drop-shadow(0 14px 26px rgba(24,34,25,.28));
        }
        .card-copy {
          padding: 48px; display: flex; flex-direction: column; justify-content: center;
        }
        .card-tag {
          align-self: flex-start;
          font-size: .72rem; letter-spacing: .12em; text-transform: uppercase;
          color: var(--brass-deep); background: rgba(176,141,87,.14);
          padding: 6px 14px; border-radius: 100px; font-weight: 600; margin-bottom: 18px;
        }
        .card-copy h3 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); color: var(--forest); margin-bottom: 14px; }
        .card-copy p { color: var(--ink-soft); font-size: 1.05rem; max-width: 360px; margin-bottom: 24px; }
        .card-num { font-size: .85rem; color: var(--eucalyptus); font-weight: 600; letter-spacing: .05em; }

        @media (max-width: 760px) {
          .stack-item { height: auto; min-height: 84vh; padding: 8px 0; }
          .stack-card {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .card-media { padding: 28px 20px 0; }
          .card-media img { max-height: 42vh; }
          .card-copy { padding: 28px 28px 36px; text-align: center; }
          .card-tag { align-self: center; }
          .card-copy p { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
}
