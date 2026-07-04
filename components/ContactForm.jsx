'use client';

import { useState } from 'react';
import { site } from '../site.config';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = {
      access_key: site.web3formsKey,
      subject: `New yoga lead from ${form.name.value}`,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus(json.success ? 'done' : 'error');
      if (json.success) form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">Start today</p>
          <h2>Book your free trial class</h2>
          <p>
            Tell us a little about yourself and {site.teacherName} will reach out to
            schedule your first session — completely free, no commitment.
          </p>
          <p className="contact-alt">
            Prefer to chat? Message us on{' '}
            <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{' '}
            or email{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>

        <div className="form-wrap">
          {status === 'done' ? (
            <div className="form-success">
              <h3>Thank you! 🙏</h3>
              <p>Your message is on its way. We'll be in touch very soon to set up your free class.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Name
                <input name="name" type="text" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required placeholder="you@email.com" />
              </label>
              <label>
                Phone / WhatsApp
                <input name="phone" type="tel" placeholder="+91 ..." />
              </label>
              <label>
                What would you like to practice?
                <textarea name="message" rows="3" placeholder="e.g. I'm a complete beginner interested in morning classes" />
              </label>
              <button type="submit" className="btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Request my free class'}
              </button>
              {status === 'error' && (
                <p className="form-error">Something went wrong. Please try WhatsApp or email instead.</p>
              )}
            </form>
          )}
        </div>
      </div>
      <style>{`
        .contact { background: var(--white); }
        .contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
        .contact-copy h2 { font-size: clamp(2rem, 4vw, 2.6rem); color: var(--forest); margin-bottom: 18px; }
        .contact-copy p { color: var(--ink-soft); margin-bottom: 16px; max-width: 440px; }
        .contact-alt a { color: var(--brass-deep); font-weight: 600; }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .contact-form label { display: flex; flex-direction: column; gap: 6px; font-weight: 500; font-size: .9rem; color: var(--ink); }
        .contact-form input, .contact-form textarea {
          font-family: var(--font-body); font-size: 1rem; padding: 13px 16px;
          border: 1.5px solid var(--stone-dark); border-radius: 12px;
          background: var(--stone); color: var(--ink); resize: vertical;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          outline: none; border-color: var(--eucalyptus);
        }
        .contact-form .btn { margin-top: 6px; justify-content: center; }
        .form-success {
          background: var(--stone); border-radius: 18px; padding: 40px;
          text-align: center; border: 1px solid var(--stone-dark);
        }
        .form-success h3 { font-size: 1.6rem; color: var(--forest); margin-bottom: 10px; }
        .form-success p { color: var(--ink-soft); }
        .form-error { color: #b3261e; font-size: .9rem; }
        @media (max-width: 820px) { .contact-inner { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
