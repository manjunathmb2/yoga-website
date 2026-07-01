import { site } from '../site.config';

export function waLink(message) {
  const text = encodeURIComponent(
    message || `Hi ${site.teacherName}, I'm interested in your online yoga classes. Can you share the details?`
  );
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
