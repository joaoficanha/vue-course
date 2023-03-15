const bcrypt = require("bcryptjs");

module.exports = (app) => {
  const { exists, notExists, equals } = app.api.validators;

  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  //TODO passar todas as validações do objecto de usuario aqui
  const validate = (user) => {};

  //TODO fix error validation
  const persist = async (req, res) => {
    const user = { ...req.body };

    if (req.params.id) {
      user.id = req.params.id;
    }

    if (!req.originalUrl.startsWith("/users")) {
      user.admin = false;
    }

    if (!req.user || !req.user.admin) {
      user.admin = false;
    }

    try {
      exists(user.name, "Name not informed.");
      exists(user.email, "Email not informed.");
      exists(user.password, "Password not informed.");
      exists(user.confirmPassword, "Confirm password not informed.");
      equals(user.password, user.confirmPassword, "Passwords differ.");

      const userFromDB = await app
        .db("users")
        .where({ email: user.email })
        .first();

      if (!user.id) {
        notExists(userFromDB, "User already registered.");
      }
    } catch (error) {
      return res.status(400).send(error);
    }

    user.password = encryptPassword(user.password);
    delete user.confirmPassword;

    if (user.id) {
      app
        .db("users")
        .update(user)
        .where({ id: user.id })
        .whereNull("deletedAt")
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).send(error));
    } else {
      app
        .db("users")
        .insert(user)
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).send(error));
    }
  };

  const get = (req, res) => {
    app
      .db("users")
      .select("id", "name", "email", "admin")
      .whereNull("deletedAt")
      .then((users) => res.json(users))
      .catch((error) => res.status(500).send(error));
  };

  const getById = (req, res) => {
    app
      .db("users")
      .select("id", "name", "email", "admin")
      .where({ id: req.params.id })
      .whereNull("deletedAt")
      .first()
      .then((user) => res.json(user))
      .catch((error) => res.status(500).send(error));
  };

  const remove = async (req, res) => {
    try {
      const articles = await app.db("articles").where({ id: req.params.id });
      notExists(articles, "User has articles.");

      const rowsUpdated = await app
        .db("users")
        .update({ deletedAt: new Date() })
        .where({ id: req.params.id });

      exists(rowsUpdated, "User not found.");
      res.status(204).send();
    } catch (error) {
      res.status(400).send(error);
    }
  };

  return { persist, get, getById, remove };
};
