import Reveal from './Reveal';

const POSES = [
  { src: '/poses/pose-standing.png', label: 'Natarajasana' },
  { src: '/poses/pose-scorpion.png', label: 'Vrschikasana' },
  { src: '/poses/pose-backbend.png', label: 'Deep Backbend' },
  { src: '/poses/pose-inverted.png', label: 'Inversion' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Practice in motion</p>
          <h2 className="section-title">Strength, balance, grace</h2>
        </Reveal>
        <div className="pose-row">
          {POSES.map((p) => (
            <div className="pose-item" key={p.label}>
              <div className="pose-card">
                <img src={p.src} alt={p.label} loading="lazy" />
              </div>
              <span className="pose-label">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .gallery { background: var(--white); }
        .section-title { font-size: clamp(2rem, 4vw, 2.9rem); color: var(--forest); margin-bottom: 52px; }
        .pose-row {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px;
        }
        .pose-item { display: flex; flex-direction: column; align-items: center; gap: 16px; }
        .pose-card {
          width: 100%; aspect-ratio: 3/4; border-radius: 20px;
          background: linear-gradient(165deg, var(--stone), var(--stone-dark));
          display: flex; align-items: flex-end; justify-content: center;
          overflow: hidden; position: relative;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .pose-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(24,34,25,.14); }
        .pose-card img {
          height: 94%; width: auto; object-fit: contain;
          filter: drop-shadow(0 8px 16px rgba(24,34,25,.22));
        }
        .pose-label {
          font-size: .9rem; letter-spacing: .05em; color: var(--ink-soft);
          font-weight: 500; text-align: center;
        }
        @media (max-width: 820px) {
          .pose-row { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .section-title { margin-bottom: 36px; }
        }
      `}</style>
    </section>
  );
}
