const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcryptjs");

module.exports = (app) => {
  const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Please enter your email and password.");
    }

    const user = await app
      .db("users")
      .where({ email: req.body.email })
      .whereNull("deletedAt")
      .first();

    if (!user) {
      return res.status(400).send("User not found.");
    }

    const isMatch = bcrypt.compareSync(req.body.password, user.password);

    if (!isMatch) {
      return res.status(401).send("Email/Password invalid.");
    }

    const now = Math.floor(Date.now() / 1000);

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      iat: now,
      exp: now + 60 * 60 * 24 * 3,
    };

    res.json({
      ...payload,
      token: jwt.encode(payload, authSecret),
    });
  };

  const validateToken = (req, res) => {
    const userData = req.body || null;

    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);

        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true);
        }
      }
    } catch (error) {}

    res.send(false);
  };

  return { login, validateToken };
};
