import { site } from '../site.config';
import { waLink } from './wa';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="container hero-inner">
        <p className="eyebrow hero-eyebrow">Online Yoga · Live Classes · {site.city} &amp; Beyond</p>
        <h1 className="hero-title">
          Find your
          <span className="word-slot">
            <span className="word w1">breath</span>
            <span className="word w2">balance</span>
            <span className="word w3">flow</span>
            <span className="word w4">stillness</span>
            <span className="word w5">calm</span>
          </span>
        </h1>
        <p className="hero-sub">
          Live online yoga with {site.teacherName} — for every body, from your very first
          pose to a steady daily practice. Your first class is on the house.
        </p>
        <div className="hero-actions">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn">
            {site.freeTrialText}
          </a>
          <a href="#classes" className="btn btn-outline hero-outline">See the classes</a>
        </div>
        <div className="hero-stats">
          <div><strong>{site.yearsExperience}+</strong><span>Years teaching</span></div>
          <div><strong>{site.studentsTaught}+</strong><span>Students guided</span></div>
          <div><strong>4.9★</strong><span>Average rating</span></div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative; overflow: hidden;
          min-height: 92vh; display: flex; align-items: center;
          padding: 90px 0 70px;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80');
          background-size: cover; background-position: center;
          transform: scale(1.05);
          animation: slowzoom 20s ease-in-out infinite alternate;
        }
        @keyframes slowzoom { from { transform: scale(1.05); } to { transform: scale(1.14); } }
        .hero-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to right, rgba(24,34,25,.92) 0%, rgba(24,34,25,.72) 45%, rgba(24,34,25,.35) 100%),
            linear-gradient(to top, rgba(24,34,25,.6), rgba(24,34,25,0) 40%);
        }
        .hero-inner { position: relative; z-index: 2; max-width: 760px; }
        .hero-eyebrow { color: var(--sand); }
        .hero-title {
          font-size: clamp(2.8rem, 8vw, 5rem); color: var(--white);
          margin-bottom: 26px; line-height: 1.05;
        }
        .word-slot {
          display: inline-block; position: relative;
          min-width: 4ch; height: 1.1em; vertical-align: baseline;
          margin-left: .25em;
        }
        .word {
          position: absolute; left: 0; top: 0; white-space: nowrap;
          font-style: italic; color: var(--sand);
          opacity: 0; animation: cycle 15s infinite;
        }
        .w1 { animation-delay: 0s; }
        .w2 { animation-delay: 3s; }
        .w3 { animation-delay: 6s; }
        .w4 { animation-delay: 9s; }
        .w5 { animation-delay: 12s; }
        @keyframes cycle {
          0%      { opacity: 0; transform: translateY(12px); }
          4%, 16% { opacity: 1; transform: translateY(0); }
          20%     { opacity: 0; transform: translateY(-12px); }
          100%    { opacity: 0; }
        }
        .hero-sub {
          font-size: 1.2rem; color: rgba(251,249,244,.86);
          max-width: 500px; margin-bottom: 36px;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }
        .hero-outline { color: var(--white); border-color: rgba(255,255,255,.5); }
        .hero-outline:hover { background: var(--white); color: var(--forest); border-color: var(--white); }
        .hero-stats { display: flex; gap: 44px; }
        .hero-stats strong { display: block; font-family: var(--font-display); font-size: 2rem; color: var(--sand); }
        .hero-stats span { font-size: .85rem; color: rgba(251,249,244,.7); }
        @media (max-width: 720px) {
          .hero { min-height: 90vh; padding: 80px 0 50px; }
          .hero-overlay {
            background:
              linear-gradient(to top, rgba(24,34,25,.94) 0%, rgba(24,34,25,.78) 50%, rgba(24,34,25,.55) 100%);
          }
          .hero-sub { font-size: 1.08rem; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .hero-actions .btn { justify-content: center; }
          .hero-stats { gap: 26px; }
          .hero-stats strong { font-size: 1.6rem; }
        }
      `}</style>
    </header>
  );
}
