const _ = require("lodash");

module.exports = function (req, res, next) {
  if (res.locals.bundle.errors) {
    // const errors = parseErrors(res.locals.bundle.errors);
    res
      .status(500)
      .json({
        errors: Object.keys(res.locals.bundle.errors).map(
          (i) => res.locals.bundle.errors[i].message
        ),
      });
  } else {
    next();
  }
};

function parseErrors(nodeRestErrors) {
  const errors = [];
  _.forIn(nodeRestErrors, function (error) {
    errors.push(error.message);
  });
  return errors;
}
