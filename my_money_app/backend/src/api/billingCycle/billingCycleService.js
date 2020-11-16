const BillingCycle = require("./billingCycle");
const errorsHandler = require("../common/errorsHandler");

BillingCycle.methods(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({ new: true, runValidators: true });
BillingCycle.after("post", errorsHandler).after("put", errorsHandler);

BillingCycle.route("get", (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    !err ? res.json(docs) : res.status(500).json({ errors: [err] });
  });
});

BillingCycle.route("count", (req, res, next) => {
  BillingCycle.count((err, value) => {
    !err ? res.json({ value }) : res.status(500).json({ errors: [err] });
  });
});

BillingCycle.route("summary", (req, res, next) => {
  BillingCycle.aggregate(
    [
      {
        $project: {
          credit: { $sum: "$credits.value" },
          debt: { $sum: "$debits.value" },
        },
      },
      {
        $group: {
          _id: null,
          credit: { $sum: "$credit" },
          debt: { $sum: "$debt" },
        },
      },
      {
        $project: { _id: 0, credit: 1, debt: 1 },
      },
    ],
    (error, result) => {
      if (error) {
        res.status(500).json({ errors: [error] });
      } else {
        res.json(result[0] || { credit: 0, debt: 0 });
      }
    }
  );
});
module.exports = BillingCycle;
