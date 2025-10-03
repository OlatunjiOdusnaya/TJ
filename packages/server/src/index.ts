import express from "express";

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/hello", (req, res) => {
  const name = String(req.query.name || "world");
  res.json({ message: `hello ${name}` });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
