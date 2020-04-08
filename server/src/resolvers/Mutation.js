const bcrypt = require("bcryptjs");
const { randomBytes } = require("crypto");
const { promisify } = require("util");

const { transport, emailTemplate } = require("../lib/accountVerification");

const mutations = {
  async signup(parent, args, context, info) {
    args.email = args.email.toLowerCase();
    const userName = args.userName;

    // hash the passeord
    const password = await bcrypt.hash(args.password, 10);

    // generate the temp token
    const randomBytesPromisifed = promisify(randomBytes);
    const tempToken = (await randomBytesPromisifed(20)).toString("hex");
    const newUser = await context.db.mutation.createUser(
      {
        data: {
          ...args,
          userName,
          password,
          tempToken,
        },
      },
      info
    );

    // Send verification email
    try {
      await transport.sendMail({
        from: "noreply@test.com",
        to: newUser.email,
        subject: "Account verification",
        html: emailTemplate(`
        <a href="${process.env.FRONTEND_URL}/verify?tempToken=${tempToken}">
          Click here to verify your account
        </a>`),
      });
    } catch (error) {
      console.log("error when sending mail : ", error);
    }
    return newUser;
  },

  async verifyAccount(parent, args, context, info) {
    // check the user and if the tempToken is valid
    const [user] = await context.db.query.users({
      where: {
        email: args.email,
        tempToken: args.tempToken,
      },
    });

    if (!user) {
      throw new Error("something went wrong when verifying this user");
    }
    // update user isVerified field
    const updatedUser = await context.db.mutation.updateUser(
      {
        data: {
          ...args,
          isVerified: true,
          tempToken: null,
        },
        where: {
          email: user.email,
        },
      },
      info
    );
    // return user
    return updatedUser;
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
