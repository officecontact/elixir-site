// Vercel serverless function: proxies /_next/image?url=/assets/... to the local file
module.exports = (req, res) => {
  const { url } = req.query;
  if (url && url.startsWith('/')) {
    res.writeHead(302, { Location: url });
    res.end();
  } else {
    res.status(400).end('Bad request');
  }
};
