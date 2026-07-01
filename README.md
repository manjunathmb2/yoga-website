# Yoga Classes Website (Next.js)

A conversion-focused landing page for an online yoga teacher.
Built for **lead generation** — WhatsApp + contact form, no backend needed.
Hosts **free** on Vercel.

---

## 1. Personalize (5 minutes)

Open **`site.config.js`** — this is the only file you need to edit.
Change:
- `teacherName`, `tagline`, `city`
- `whatsappNumber` — country code + number, no `+` or spaces (e.g. `919876543210`)
- `email` — where contact-form leads should arrive
- `domain` — your bought domain (e.g. `https://www.yourdomain.com`)
- `classes` and `testimonials` — your real content

### Add the teacher's photo
1. Put a photo in the `public/` folder, e.g. `public/teacher.jpg`
2. In `components/About.jsx`, replace the `<div className="photo-placeholder">…</div>`
   block with:
   ```jsx
   <img src="/teacher.jpg" alt={site.teacherName} />
   ```

---

## 2. Set up the contact form (free)

1. Go to https://web3forms.com → enter your email → get a free **Access Key**
2. Paste it into `web3formsKey` in `site.config.js`

That's it — form submissions land in your email. No server required.

---

## 3. Run locally

```bash
npm install
npm run dev
```
Open http://localhost:3000

---

## 4. Deploy free on Vercel

1. Push this folder to a **GitHub** repo
2. Go to https://vercel.com → sign in with GitHub → **Add New → Project**
3. Select the repo → Vercel auto-detects Next.js → **Deploy**
4. Your site is live at `yourproject.vercel.app`

### Connect your bought domain
1. In Vercel → Project → **Settings → Domains** → add your domain
2. At your domain registrar, point the DNS records Vercel shows you
   (usually an `A` record + a `CNAME` for `www`)
3. HTTPS is automatic and free

---

## 5. Get found on Google (lead gen)

1. Create a free **Google Search Console** account
2. Add your domain, verify it
3. Submit `https://yourdomain.com/sitemap.xml`
4. Also create a **Google Business Profile** — huge for local "yoga near me" searches

---

## What's included
- Hero with a calming "breathing" animation + free-trial CTA
- Classes grid (each links to a pre-filled WhatsApp message)
- About / credentials section
- Testimonials
- Contact form (Web3Forms) + WhatsApp alternative
- Floating WhatsApp button on every screen
- SEO metadata, structured data, sitemap, robots.txt
- Fully responsive + accessible (keyboard focus, reduced-motion)
