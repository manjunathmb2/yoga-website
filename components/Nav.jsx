import { site } from '../site.config';
import { waLink } from './wa';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">{site.teacherName}</a>
        <div className="nav-links">
          <a href="#classes">Classes</a>
          <a href="#about">About</a>
          <a href="#testimonials">Reviews</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn nav-cta">
            {site.freeTrialText}
          </a>
        </div>
      </div>
      <style>{`
        .nav {
          position: sticky; top: 0; z-index: 40;
          background: rgba(245,241,232,.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--cream-dark);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 70px; }
        .brand { font-family: var(--font-display); font-size: 1.35rem; color: var(--sage-deep); }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a { font-weight: 500; font-size: .95rem; color: var(--ink-soft); transition: color .2s; }
        .nav-links a:hover { color: var(--sage-deep); }
        .nav-cta { padding: 10px 22px; font-size: .9rem; color: var(--white) !important; }
        @media (max-width: 720px) {
          .nav-links a:not(.nav-cta) { display: none; }
          .nav-inner { height: 60px; gap: 12px; }
          .brand { font-size: 1.1rem; white-space: nowrap; }
          .nav-cta { padding: 9px 16px; font-size: .82rem; }
        }
        }
      `}</style>
    </nav>
  );
}
