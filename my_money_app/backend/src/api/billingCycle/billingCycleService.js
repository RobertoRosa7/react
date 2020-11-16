const BillingCycle = require("./billingCycle");

BillingCycle.methods(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route("get", (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    !err ? res.json(docs) : res.status(500).json({ errors: [err] });
  });
});
module.exports = BillingCycle;
