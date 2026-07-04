'use client';

import { useState, useEffect } from 'react';
import { site } from '../site.config';
import { waLink } from './wa';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { href: '#classes', label: 'Classes' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Reviews' },
  ];

  return (
    <>
      <header className={`navwrap ${scrolled ? 'is-scrolled' : ''}`}>
        <nav className="pill">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>
            {site.teacherName}
          </a>

          <div className="desktop-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          <div className="pill-right">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn nav-cta">
              {site.freeTrialText}
            </a>
            <button
              className={`burger ${open ? 'open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu ${open ? 'show' : ''}`} onClick={() => setOpen(false)}>
        <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
          <nav className="mobile-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </nav>
          <a
            href={waLink()} target="_blank" rel="noopener noreferrer"
            className="btn mobile-cta" onClick={() => setOpen(false)}
          >
            {site.freeTrialText}
          </a>
          <p className="mobile-foot">Live online yoga · {site.city}</p>
        </div>
      </div>

      <style>{`
        .navwrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 60;
          display: flex; justify-content: center;
          padding: 18px 20px;
          transition: padding .3s ease;
        }
        .navwrap.is-scrolled { padding: 10px 20px; }

        .pill {
          width: 100%; max-width: 1000px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px;
          padding: 10px 12px 10px 24px;
          border-radius: 100px;
          background: rgba(251,249,244,.55);
          backdrop-filter: blur(16px) saturate(150%);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          border: 1px solid rgba(255,255,255,.4);
          box-shadow: 0 8px 32px rgba(24,34,25,.12);
          transition: background .3s ease, box-shadow .3s ease;
        }
        .is-scrolled .pill {
          background: rgba(251,249,244,.82);
          box-shadow: 0 10px 34px rgba(24,34,25,.16);
        }

        .brand {
          font-family: var(--font-display); font-size: 1.25rem;
          color: var(--forest); white-space: nowrap; font-weight: 500;
        }
        .desktop-links { display: flex; gap: 30px; }
        .desktop-links a {
          font-weight: 500; font-size: .95rem; color: var(--ink-soft);
          transition: color .2s;
        }
        .desktop-links a:hover { color: var(--forest); }

        .pill-right { display: flex; align-items: center; gap: 10px; }
        .nav-cta { padding: 11px 22px; font-size: .9rem; color: var(--white) !important; box-shadow: none; }

        .burger {
          display: none; width: 44px; height: 44px; border: none;
          background: transparent; cursor: pointer; position: relative;
          border-radius: 50%;
        }
        .burger span {
          position: absolute; left: 11px; right: 11px; height: 2px;
          background: var(--forest); border-radius: 2px;
          transition: transform .3s ease, opacity .2s ease, top .3s ease;
        }
        .burger span:nth-child(1) { top: 15px; }
        .burger span:nth-child(2) { top: 21px; }
        .burger span:nth-child(3) { top: 27px; }
        .burger.open span:nth-child(1) { top: 21px; transform: rotate(45deg); }
        .burger.open span:nth-child(2) { opacity: 0; }
        .burger.open span:nth-child(3) { top: 21px; transform: rotate(-45deg); }

        .mobile-menu {
          position: fixed; inset: 0; z-index: 55;
          background: rgba(24,34,25,.4);
          backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none;
          transition: opacity .3s ease;
        }
        .mobile-menu.show { opacity: 1; pointer-events: auto; }
        .mobile-panel {
          position: absolute; top: 0; right: 0; bottom: 0;
          width: min(80vw, 340px);
          background: var(--stone);
          padding: 110px 32px 40px;
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform .35s cubic-bezier(.4,0,.2,1);
          box-shadow: -20px 0 50px rgba(24,34,25,.25);
        }
        .mobile-menu.show .mobile-panel { transform: translateX(0); }
        .mobile-links { display: flex; flex-direction: column; gap: 6px; margin-bottom: 28px; }
        .mobile-links a {
          font-family: var(--font-display); font-size: 1.7rem; color: var(--forest);
          padding: 12px 0; border-bottom: 1px solid var(--stone-dark);
        }
        .mobile-cta { justify-content: center; width: 100%; }
        .mobile-foot {
          margin-top: auto; font-size: .82rem; color: var(--ink-soft);
          letter-spacing: .04em;
        }

        @media (max-width: 760px) {
          .desktop-links { display: none; }
          .nav-cta { display: none; }
          .burger { display: block; }
          .brand { font-size: 1.15rem; }
          .pill { padding: 10px 8px 10px 20px; }
        }
      `}</style>
    </>
  );
}
