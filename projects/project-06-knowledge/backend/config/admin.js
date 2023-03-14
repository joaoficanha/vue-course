module.exports = (middleware) => {
  return (req, res, next) => {
    if (req.user.admin) {
      middleware(req, res, next);
    } else {
      res.status(403).send("User is not admin.");
    }
  };
};
