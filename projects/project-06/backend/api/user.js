module.exports = (app) => {
  const create = (req, res) => {
    res.send("user created.");
  };

  return { create };
};
