import { site } from '../site.config';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <Reveal className="about-photo">
          <div className="photo-frame">
            <img
              src="/poses/pose-standing.png"
              alt={`${site.teacherName}, yoga teacher`}
            />
          </div>
          <div className="photo-badge">
            <strong>{site.yearsExperience}+ yrs</strong>
            <span>guiding practice</span>
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={120}>
          <p className="eyebrow">Your teacher</p>
          <h2>Meet {site.teacherName}</h2>
          <p>
            For over {site.yearsExperience} years, {site.teacherName} has guided students
            from their very first breath on the mat to a steady, lifelong practice — blending
            traditional foundations with mindful breathwork, always meeting you where you are.
          </p>
          <p>
            Practising online means your own space, your own pace, with the same warmth and
            personal attention as an in-person class. No equipment, no pressure.
          </p>
          <ul className="creds">
            <li>Certified Yoga Instructor (RYT-500)</li>
            <li>Specialised in prenatal &amp; therapeutic yoga</li>
            <li>{site.studentsTaught}+ students across {site.city} and worldwide</li>
          </ul>
        </Reveal>
      </div>

      <style>{`
        .about { background: var(--white); }
        .about-inner { display: grid; grid-template-columns: .9fr 1.1fr; gap: 60px; align-items: center; }
        .about-photo { position: relative; }
        .photo-frame {
          border-radius: 24px;
          background: linear-gradient(160deg, var(--eucalyptus-light), var(--stone-dark));
          aspect-ratio: 4/5; overflow: hidden;
          display: flex; align-items: flex-end; justify-content: center;
          box-shadow: 0 30px 60px rgba(24,34,25,.18);
        }
        .photo-frame img {
          height: 96%; width: auto; object-fit: contain;
          filter: drop-shadow(0 12px 24px rgba(24,34,25,.22));
        }
        .photo-badge {
          position: absolute; bottom: -18px; right: -12px;
          background: var(--forest); color: var(--white);
          padding: 16px 22px; border-radius: 16px; text-align: center;
          box-shadow: 0 16px 34px rgba(24,34,25,.28);
        }
        .photo-badge strong { display: block; font-family: var(--font-display); font-size: 1.4rem; color: var(--sand); }
        .photo-badge span { font-size: .74rem; letter-spacing: .04em; opacity: .85; }
        .about-copy h2 { font-size: clamp(2rem, 4vw, 2.8rem); color: var(--forest); margin-bottom: 20px; }
        .about-copy p { color: var(--ink-soft); margin-bottom: 16px; max-width: 540px; }
        .creds { list-style: none; margin-top: 26px; }
        .creds li { padding-left: 30px; position: relative; margin-bottom: 12px; color: var(--ink); font-weight: 500; }
        .creds li::before { content: '✦'; position: absolute; left: 0; color: var(--brass); }
        @media (max-width: 820px) {
          .about-inner { grid-template-columns: 1fr; gap: 44px; }
          .about-photo { max-width: 360px; margin: 0 auto; }
          .photo-badge { right: 8px; }
        }
      `}</style>
    </section>
  );
}
