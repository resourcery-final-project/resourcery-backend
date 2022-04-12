const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = class UserService {
  static async insert({ username, password }) {
    const passwordHash = bcrypt.hashSync(
      password,
      Number(process.env.SALT_ROUNDS)
    );
    return User.insert({ username, passwordHash });
  }

  static async signIn({ username, password }) {
    const user = await User.findByUsername(username);
    if (!user) throw new Error('Username incorrect please try again.');

    const passwordsMatch = bcrypt.compareSync(password, user.passwordHash);
    if (!passwordsMatch) throw new Error('Password incorrect please try again');

    return user;
  }
};
