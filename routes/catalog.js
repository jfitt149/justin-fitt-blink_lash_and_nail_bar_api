import express from "express";

import { Client, Environment, ApiError } from "square";

const router = express.Router();

BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};

router.get("/", async (_req, res) => {
  const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Sandbox,
  });

  try {
    const response = await client.catalogApi.listCatalog();
    console.log(response.result.objects);
    res.json(response.result.objects);
  } catch (e) {
    console.log(e);
  }
});

export default router;
