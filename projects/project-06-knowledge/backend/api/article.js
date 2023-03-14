const queries = require("./queries");

module.exports = (app) => {
  const { exists } = app.api.validators;

  const persist = (req, res) => {
    const article = { ...req.body };

    if (req.params.id) {
      article.id = req.params.id;
    }

    try {
      exists(article.name, "Name not informed.");
      exists(article.description, "Description not informed.");
      exists(article.categoryId, "Category not informed.");
      exists(article.userId, "Author not informed.");
      exists(article.content, "Content not informed.");
    } catch (error) {
      return res.status(400).send(error);
    }

    if (article.id) {
      app
        .db("articles")
        .update(article)
        .where({ id: article.id })
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).send(error));
    } else {
      app
        .db("articles")
        .insert(article)
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).send(error));
    }
  };

  const remove = async (req, res) => {
    try {
      const rowsDeleted = await app
        .db("articles")
        .where({ id: req.params.id })
        .del();

      exists(rowsDeleted, "Article not found.");
      res.status(204).send();
    } catch (error) {
      res.status(400).send(error);
    }
  };

  const limit = 10;

  const get = async (req, res) => {
    const page = req.query.page || 1;
    const response = await app.db("articles").count("id").first();
    const count = parseInt(response.count);
    const offset = page * limit - limit;

    app
      .db("articles")
      .select("id", "name", "description")
      .limit(limit)
      .offset(offset)
      .then((articles) =>
        res.json({
          data: articles,
          count,
          limit,
          page,
        })
      )
      .catch((error) => res.status(500).send(error));
  };

  const getById = (req, res) => {
    app
      .db("articles")
      .where({ id: req.params.id })
      .first()
      .then((article) => {
        article.content = article.content.toString();
        res.json(article);
      })
      .catch((error) => res.status(500).send(error));
  };

  const getByCategory = async (req, res) => {
    const page = req.query.page || 1;
    const categoryId = req.params.id;
    const categories = await app.db.raw(
      queries.categoryWithChildren,
      categoryId
    );
    const ids = categories.rows.map((category) => category.id);
    const offset = page * limit - limit;

    app
      .db({
        a: "articles",
        u: "users",
      })
      .select("a.id", "a.name", "a.description", "a.imageUrl", {
        author: "u.name",
      })
      .limit(limit)
      .offset(offset)
      .whereRaw("?? = ??", ["u.id", "a.userId"])
      .whereIn("categoryId", ids)
      .orderBy("a.id", "desc")
      .then((articles) => res.json(articles))
      .catch((error) => res.status(500).send(error));
  };

  return { persist, remove, get, getById, getByCategory };
};
