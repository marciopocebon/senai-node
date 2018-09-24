module.exports = {
  index(req, res) {
    return res.send("index");
  },

  show(req, res) {
    return res.send("show");
  },

  store(req, res) {
    return res.send("store");
  },

  update(req, res) {
    return res.send("update");
  },

  destroy(req, res) {
    return res.send("destroy");
  }
};
