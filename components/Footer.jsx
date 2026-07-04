import { site } from '../site.config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">{site.teacherName}</p>
          <p className="footer-tag">Online yoga, rooted in breath.</p>
        </div>
        <div className="footer-links">
          <a href="#classes">Classes</a>
          <a href="#about">About</a>
          <a href="#contact">Free Trial</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {site.teacherName}. All rights reserved.
      </div>
      <style>{`
        .footer { background: var(--forest); color: var(--stone); padding: 56px 0 28px; }
        .footer-inner { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 24px; padding-bottom: 32px; border-bottom: 1px solid rgba(255,253,248,.15); }
        .footer-brand { font-family: var(--font-display); font-size: 1.4rem; }
        .footer-tag { color: var(--eucalyptus-light); font-size: .9rem; }
        .footer-links { display: flex; gap: 26px; flex-wrap: wrap; align-items: center; }
        .footer-links a { color: var(--stone); font-size: .92rem; }
        .footer-links a:hover { color: var(--brass); }
        .footer-bottom { padding-top: 22px; font-size: .82rem; color: var(--eucalyptus-light); }
      `}</style>
    </footer>
  );
}
