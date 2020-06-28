// this file connectes to the remote prisma db
// and gives the ability to query it

const { PrismaClient } = require("@prisma/cli");

const db = new PrismaClient({
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
