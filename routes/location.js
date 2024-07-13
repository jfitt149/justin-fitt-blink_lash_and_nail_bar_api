/*
Copyright 2021 Square Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const express = require("express");
const router = express.Router();
const JSONBig = require("json-bigint");
require("dotenv").config();

const locationId = process.env["SQ_LOCATION_ID"];

const { locationsApi } = require("../util/square-client");

/**
 * GET /locations
 *
 * This endpoint is in charge of retrieving the current location.
 */
router.get("/", async (_req, res, next) => {
  try {
    let {
      result: { location },
    } = await locationsApi.retrieveLocation(locationId);

    // res.render("pages/select-service", { cancel, items });
    res.json(location);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
