export default async function handler(req, res) {
  // Simple Vercel/Netlify-style serverless handler that forwards form submissions to Mailgun
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  try {
    const { name, email, message, _gotcha } = req.body || {};

    // Honeypot check
    if (_gotcha) return res.status(400).json({ ok: false, error: 'Spam detected' });

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' });
    }

    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
    const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL || process.env.MAILGUN_FROM;

    if (!MAILGUN_DOMAIN || !MAILGUN_API_KEY || !DESTINATION_EMAIL) {
      console.error('Missing Mailgun env vars');
      return res.status(500).json({ ok: false, error: 'Server not configured' });
    }

    // Mailgun expects form-encoded body
    const params = new URLSearchParams();
    params.append('from', `Portfolio Contact <no-reply@${MAILGUN_DOMAIN}>`);
    params.append('to', DESTINATION_EMAIL);
    params.append('subject', `New message from ${name}`);
    params.append('text', `${message}\n\nReply to: ${email}`);
    params.append('html', `<p>${message}</p><p>Reply to: <a href="mailto:${email}">${email}</a></p>`);

    const resp = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error('Mailgun error', resp.status, text);
      return res.status(502).json({ ok: false, error: 'Mailgun send failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error', err);
    return res.status(500).json({ ok: false, error: 'Internal error' });
  }
}
