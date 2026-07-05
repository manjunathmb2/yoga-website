import Reveal from './Reveal';

const POSES = [
  { src: '/poses/pose-standing.png', label: 'Natarajasana' },
  { src: '/poses/pose-scorpion.png', label: 'Vrschikasana' },
  { src: '/poses/pose-backbend.png', label: 'Deep Backbend' },
  { src: '/poses/pose-inverted.png', label: 'Inversion' },
  { src: '/poses/pose-split-fold.png', label: 'Forward Fold' },
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
          {POSES.map((p, i) => (
            <Reveal key={p.label} className="pose-item" delay={i * 90}>
              <div className="pose-disc">
                <img src={p.src} alt={p.label} loading="lazy" />
              </div>
              <span className="pose-label">{p.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .gallery { background: var(--white); }
        .section-title { font-size: clamp(2rem, 4vw, 2.9rem); color: var(--forest); margin-bottom: 52px; }
        .pose-row {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px;
        }
        .pose-item { display: flex; flex-direction: column; align-items: center; gap: 14px; }
        .pose-disc {
          width: 100%; aspect-ratio: 1; border-radius: 50%;
          background: radial-gradient(circle at 50% 35%, var(--stone), var(--stone-dark));
          display: flex; align-items: flex-end; justify-content: center;
          overflow: hidden; position: relative;
          animation: floaty 6s ease-in-out infinite;
        }
        .pose-item:nth-child(2) .pose-disc { animation-delay: .8s; }
        .pose-item:nth-child(3) .pose-disc { animation-delay: 1.6s; }
        .pose-item:nth-child(4) .pose-disc { animation-delay: 2.4s; }
        .pose-item:nth-child(5) .pose-disc { animation-delay: 3.2s; }
        .pose-disc img {
          height: 90%; width: auto; object-fit: contain;
          filter: drop-shadow(0 8px 16px rgba(24,34,25,.2));
        }
        .pose-label {
          font-size: .82rem; letter-spacing: .06em; color: var(--ink-soft);
          font-weight: 500; text-align: center;
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 820px) {
          .pose-row { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 420px) {
          .pose-row { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
