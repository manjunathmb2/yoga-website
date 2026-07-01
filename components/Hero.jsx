import { site } from '../site.config';
import { waLink } from './wa';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Online Yoga · Live Classes · {site.city} &amp; Beyond</p>
          <h1>{site.tagline}</h1>
          <p className="hero-sub">
            Practice from anywhere with {site.teacherName}. Small live classes for every
            body — beginners welcome. Your first class is on the house.
          </p>
          <div className="hero-actions">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn">
              {site.freeTrialText}
            </a>
            <a href="#classes" className="btn btn-outline">See the classes</a>
          </div>
          <div className="hero-stats">
            <div><strong>{site.yearsExperience}+</strong><span>Years teaching</span></div>
            <div><strong>{site.studentsTaught}+</strong><span>Students guided</span></div>
            <div><strong>4.9★</strong><span>Average rating</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="breath-ring ring-1"></div>
          <div className="breath-ring ring-2"></div>
          <div className="breath-core">
            <span className="breath-label">breathe</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero { padding: 80px 0 100px; overflow: hidden; }
        .hero-inner { display: grid; grid-template-columns: 1.1fr .9fr; gap: 50px; align-items: center; }
        .hero-copy h1 { font-size: clamp(2.6rem, 6vw, 4.2rem); color: var(--sage-deep); margin-bottom: 22px; }
        .hero-sub { font-size: 1.15rem; color: var(--ink-soft); max-width: 480px; margin-bottom: 32px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }
        .hero-stats { display: flex; gap: 40px; }
        .hero-stats strong { display: block; font-family: var(--font-display); font-size: 1.9rem; color: var(--clay-deep); }
        .hero-stats span { font-size: .85rem; color: var(--ink-soft); }

        .hero-visual {
          position: relative; aspect-ratio: 1; display: flex;
          align-items: center; justify-content: center;
        }
        .breath-ring {
          position: absolute; border-radius: 50%;
          border: 1.5px solid var(--sage-light);
          animation: breathe 8s ease-in-out infinite;
        }
        .ring-1 { width: 78%; height: 78%; border-color: var(--sage); opacity: .6; }
        .ring-2 { width: 100%; height: 100%; animation-delay: .4s; opacity: .35; }
        .breath-core {
          width: 62%; height: 62%; border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, var(--sage), var(--sage-deep));
          display: flex; align-items: center; justify-content: center;
          animation: breathe 8s ease-in-out infinite;
          box-shadow: 0 20px 50px rgba(61,74,62,.3);
        }
        .breath-label {
          font-family: var(--font-display); color: var(--cream);
          font-size: 1.25rem; letter-spacing: .04em; font-style: italic;
          white-space: nowrap;
        }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(.86); }
          50% { transform: scale(1.04); }
        }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-visual { max-width: 340px; margin: 10px auto 0; order: -1; }
          .hero-stats { gap: 28px; }
        }
      `}</style>
    </header>
  );
}
