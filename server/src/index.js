require("dotenv").config({ path: ".env" });
const cookieParser = require("cookie-parser");

const createServer = require("./createServer");

const server = createServer();

// Middleware to handle JWT cookies
server.express.use(cookieParser());

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
      origin: ["http://localhost:3000"],
    },
  },
  (deets) => {
    console.log(`server running on port http://localhost:${deets.port}`);
  }
);
