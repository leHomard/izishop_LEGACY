require("dotenv").config({ path: ".env" });
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const createServer = require("./createServer");
const sign_s3 = require("./controllers/sign_s3");

const server = createServer();

// Middleware to handle JWT cookies
server.express.use(cookieParser());

// Middleware to parse request body
// this will let us get data from a POST
server.express.use(bodyParser.urlencoded({ extended: true }));
server.express.use(bodyParser.json());
server.express.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

server.express.use("/sign_s3", sign_s3.sign_s3);

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
