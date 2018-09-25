const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const User = require('../models/User')

module.exports = {
  async create (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({ error: 'User/password are incorrect.' })
    }

    if (!(await bcryptjs.compare(password, user.password))) {
      return res.status(401).json({ error: 'User/password are incorrect.' })
    }

    const token = await jwt.sign({ id: user._id }, 'senai')

    return res.json({ user, token })
  },

  async show (req, res) {
    const user = await User.findById(req.userId)

    return res.json(user)
  }
}
