module.exports = (app) => {
  const Stat = app.mongoose.model("Stat", {
    users: Number,
    categories: Number,
    articles: Number,
    createdAt: Date,
  });

  const get = (req, res) => {
    Stat.findOne({}, {}, { sort: { createdAt: -1 } })
      .then((stat) => res.json(stat))
      .catch((error) => res.status(500).send(error));
  };

  return { Stat, get };
};
