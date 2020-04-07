const bcrypt = require("bcryptjs");

const generateToken = require("../lib/generateToken");

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
          password,
        },
      },
      info
    );

    // Generate jWT token
    generateToken(context, newUser.id);
    return newUser;
  },

  // TODO check if the user is logged in
  async createItem(parent, args, context, info) {
    const item = await context.db.mutation.createItem(
      {
        data: { ...args },
      },
      info
    );
    return item;
  },
};

module.exports = mutations;
