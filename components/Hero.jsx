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
          <div className="word-stage">
            <span className="find-your">find your</span>
            <div className="word-slot">
              <span className="word w1">Breathe</span>
              <span className="word w2">Balance</span>
              <span className="word w3">Flow</span>
              <span className="word w4">Stillness</span>
              <span className="word w5">Strength</span>
              <span className="word w6">Calm</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero { padding: 60px 0 90px; overflow: hidden; }
        .hero-inner { display: grid; grid-template-columns: 1.1fr .9fr; gap: 50px; align-items: center; }
        .hero-copy h1 { font-size: clamp(2.6rem, 6vw, 4.2rem); color: var(--sage-deep); margin-bottom: 22px; }
        .hero-sub { font-size: 1.15rem; color: var(--ink-soft); max-width: 480px; margin-bottom: 32px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }
        .hero-stats { display: flex; gap: 40px; }
        .hero-stats strong { display: block; font-family: var(--font-display); font-size: 1.9rem; color: var(--clay-deep); }
        .hero-stats span { font-size: .85rem; color: var(--ink-soft); }

        .hero-visual { display: flex; align-items: center; justify-content: center; }
        .word-stage { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 30px; }
        .find-your {
          font-family: var(--font-body); font-size: 1rem; letter-spacing: .28em;
          text-transform: uppercase; color: var(--sage); opacity: .8;
        }
        .word-slot { position: relative; height: 90px; min-width: 260px; display: flex; align-items: center; justify-content: center; }
        .word {
          position: absolute;
          font-family: var(--font-display); font-style: italic;
          font-size: clamp(3rem, 8vw, 4.6rem); color: var(--sage-deep);
          opacity: 0; white-space: nowrap;
          animation: cycle 15s infinite;
        }
        .w1 { animation-delay: 0s; }
        .w2 { animation-delay: 2.5s; }
        .w3 { animation-delay: 5s; }
        .w4 { animation-delay: 7.5s; }
        .w5 { animation-delay: 10s; }
        .w6 { animation-delay: 12.5s; }
        @keyframes cycle {
          0%      { opacity: 0; transform: translateY(14px) scale(.96); }
          3%, 14% { opacity: 1; transform: translateY(0) scale(1); }
          17%     { opacity: 0; transform: translateY(-14px) scale(.96); }
          100%    { opacity: 0; }
        }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-visual { order: -1; margin-bottom: 6px; }
          .word-slot { height: 72px; min-width: 220px; }
          .hero-stats { gap: 28px; }
        }
      `}</style>
    </header>
  );
}
