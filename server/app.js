const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === "development") {
  let pathname = path.resolve(__dirname, "..", ".env.development");
  dotenv.config({ path: pathname });
} else if (NODE_ENV === "production") {
  let pathname = path.resolve(__dirname, "..", ".env.production");
  dotenv.config({ path: pathname });
}

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});

app.get("/*", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send("<h1>App is Running</h1>");
});
