// Vercel serverless function — receives contact form submissions
// For production: wire to email service (Resend, SendGrid) or CRM (HubSpot, Pipedrive)
export default function handler(req, res){
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, email, company, role, message, nda } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  // Log to Vercel function logs — visible in dashboard
  console.log('[CONTACT]', JSON.stringify({
    ts: new Date().toISOString(),
    name, email, company, role, message,
    nda: nda ? 'yes' : 'no',
    ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress
  }));
  // TODO: forward to email/CRM
  return res.status(200).json({ ok: true });
}
