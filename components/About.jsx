import { site } from '../site.config';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-photo" aria-hidden="true">
          {/* Replace this block with an <img> of your wife.
              Put the photo in /public and use:
              <img src="/teacher.jpg" alt={site.teacherName} /> */}
          <div className="photo-placeholder">
            <span>Your photo here</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Your teacher</p>
          <h2>Meet {site.teacherName}</h2>
          <p>
            For over {site.yearsExperience} years, {site.teacherName} has guided students
            from their very first downward dog to a steady, lifelong practice. Her classes
            blend traditional Hatha foundations with mindful breathwork, always meeting
            you exactly where you are.
          </p>
          <p>
            Teaching online means you practice in your own space, at your own pace —
            with the same warmth and personal attention as an in-person class. No fancy
            equipment, no pressure. Just you, your breath, and a teacher who cares.
          </p>
          <ul className="creds">
            <li>Certified Yoga Instructor (RYT-500)</li>
            <li>Specialized in prenatal &amp; therapeutic yoga</li>
            <li>{site.studentsTaught}+ students across {site.city} and worldwide</li>
          </ul>
        </div>
      </div>
      <style>{`
        .about-inner { display: grid; grid-template-columns: .85fr 1.15fr; gap: 56px; align-items: center; }
        .photo-placeholder {
          aspect-ratio: 4/5; border-radius: 20px;
          background: linear-gradient(160deg, var(--sage-light), var(--sage));
          display: flex; align-items: center; justify-content: center;
          color: var(--cream); font-family: var(--font-display); font-style: italic;
        }
        .about-photo img { width: 100%; border-radius: 20px; object-fit: cover; aspect-ratio: 4/5; }
        .about-copy h2 { font-size: clamp(2rem, 4vw, 2.6rem); color: var(--sage-deep); margin-bottom: 20px; }
        .about-copy p { color: var(--ink-soft); margin-bottom: 16px; max-width: 540px; }
        .creds { list-style: none; margin-top: 24px; }
        .creds li {
          padding-left: 28px; position: relative; margin-bottom: 12px;
          color: var(--ink); font-weight: 500;
        }
        .creds li::before {
          content: '✦'; position: absolute; left: 0; color: var(--clay);
        }
        @media (max-width: 820px) {
          .about-inner { grid-template-columns: 1fr; }
          .about-photo { max-width: 320px; }
        }
      `}</style>
    </section>
  );
}
