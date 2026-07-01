import { waLink } from './wa';

export default function WhatsAppFloat() {
  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-float"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.5-.4zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2z" />
        </svg>
      </a>
      <style>{`
        .wa-float {
          position: fixed; bottom: 24px; right: 24px; z-index: 50;
          width: 60px; height: 60px; border-radius: 50%;
          background: #25D366; color: #fff;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px rgba(37,211,102,.4);
          animation: wa-pulse 2.5s infinite;
          transition: transform .2s ease;
        }
        .wa-float:hover { transform: scale(1.08); }
        @keyframes wa-pulse {
          0% { box-shadow: 0 6px 20px rgba(37,211,102,.4); }
          50% { box-shadow: 0 6px 28px rgba(37,211,102,.7); }
          100% { box-shadow: 0 6px 20px rgba(37,211,102,.4); }
        }
        @media (max-width: 600px) {
          .wa-float { width: 54px; height: 54px; bottom: 18px; right: 18px; }
        }
      `}</style>
    </>
  );
}
