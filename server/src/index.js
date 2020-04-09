require("dotenv").config({ path: ".env" });
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const createServer = require("./createServer");

const server = createServer();

// Middleware to handle JWT cookies
server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    console.log("token ; ", userId);
  }
  next();
});

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
