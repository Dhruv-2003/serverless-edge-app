export default function cached(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400", "max-age=0");
  res.status(200).json({ message: "Accessing a cached response" });
}
