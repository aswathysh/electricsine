export default async function handler(req, res) {
    const response = await fetch("https://electricsign.in/public/api/", {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      // Forward any headers if needed
    },
    body: req.method !== "GET" ? JSON.stringify(req.body) : null,
  });

  const data = await response.json();
  res.status(response.status).json(data);
}