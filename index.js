import express from "express";
import cors from "cors";
import catalog from "./routes/catalog.js";

import "dotenv/config";

const app = express();
let { PORT, BACKEND_URL, CROSS_ORIGIN } = process.env;

PORT = PORT || 8081;

app.use(cors({ origin: CROSS_ORIGIN }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("HELLO WORLD");
});

app.use("/catalog", catalog);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
