const express = require("express");

module.exports = function (app) {
  // url base
  const router = express.Router();
  app.use("/api", router);

  // ciclo de pagamento
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(router, "/billingCycles");
};
