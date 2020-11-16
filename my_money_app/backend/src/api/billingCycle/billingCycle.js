const restfull = require("node-restful");
const mongoose = restfull.mongoose;

const creditSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Report the credit's name."] },
  value: {
    type: Number,
    min: 0,
    required: [true, "Report the value of credit."],
  },
});

const debitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Report the debit's name."] },
  value: {
    type: Number,
    min: 0,
    required: [true, "Report the value of debit."],
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"],
  },
});

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Report operation name."] },
  month: { type: Number, min: 1, max: 12, required: [true, "Report month."] },
  year: {
    type: Number,
    min: 1970,
    max: 2100,
    required: [true, "Report year."],
  },
  credits: [creditSchema],
  debits: [debitSchema],
});

module.exports = restfull.model("BillingCycle", billingCycleSchema);
