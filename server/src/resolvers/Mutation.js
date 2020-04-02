const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mutations = {
  async signup(parent, args, context, info) {
    args.email = args.email.toLowerCase();
    const userName = args.userName;
    // hash the passeord
    const password = await bcrypt.hash(args.password, 10);
    const newUser = context.db.mutation.createUser(
      {
        data: {
          ...args,
          userName,
          password
        }
      },
      info
    );

    // Generate jWT token
    const token = jwt.sign({ userId: newUser.id }, process.env.APP_SECRET);
    // Send the token on the response as a cookie
    context.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 12
    });
    return newUser;
  },

  // TODO check if the user is logged in
  async createItem(parent, args, context, info) {
    const item = await context.db.mutation.createItem(
      {
        data: { ...args }
      },
      info
    );
    return item;
  }
};

module.exports = mutations;
