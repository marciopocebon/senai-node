const User = require("../models/User");

module.exports = {
  index(req, res) {
    return res.send("index");
  },

  show(req, res) {
    return res.send("show");
  },

  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  },

  update(req, res) {
    return res.send("update");
  },

  destroy(req, res) {
    return res.send("destroy");
  }
};
