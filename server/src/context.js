// this file connectes to the remote prisma db
// and gives the ability to query it

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function createContext() {
  return { prisma }
}

module.exports = {
  createContext
}