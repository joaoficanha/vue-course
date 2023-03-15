const admin = require("./admin");

module.exports = (app) => {
  app.route("/auth/register").post(app.api.user.persist);
  app.route("/auth/login").post(app.api.auth.login);
  app.route("/auth/validateToken").post(app.api.auth.validateToken);

  app
    .route("/users")
    .all(app.config.passport.authenticate())
    .get(admin(app.api.user.get))
    .post(admin(app.api.user.persist));

  app
    .route("/users/:id")
    .all(app.config.passport.authenticate())
    .get(admin(app.api.user.getById))
    .put(admin(app.api.user.persist))
    .delete(admin(app.api.user.remove));

  app
    .route("/categories")
    .all(app.config.passport.authenticate())
    .get(admin(app.api.category.get))
    .post(admin(app.api.category.persist));

  app
    .route("/categories/tree")
    .all(app.config.passport.authenticate())
    .get(app.api.category.getTree);

  app
    .route("/categories/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.category.getById)
    .put(admin(app.api.category.persist))
    .delete(admin(app.api.category.remove));

  app
    .route("/articles")
    .all(app.config.passport.authenticate())
    .get(admin(app.api.article.get))
    .post(admin(app.api.article.persist));

  app
    .route("/articles/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.article.getById)
    .put(admin(app.api.article.persist))
    .delete(admin(app.api.article.remove));

  app
    .route("/categories/:id/articles")
    .all(app.config.passport.authenticate())
    .get(app.api.article.getByCategory);

  app
    .route("/stats")
    .all(app.config.passport.authenticate())
    .get(app.api.stats.get);
};
