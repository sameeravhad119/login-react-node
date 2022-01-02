const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === "development") {
  let pathname = path.resolve(__dirname, "..", ".env.development");
  dotenv.config({ path: pathname });
} else if (NODE_ENV === "production") {
  let pathname = path.resolve(__dirname, "..", ".env.production");
  dotenv.config({ path: pathname });
}

const PORT = process.env.BACKEND_PORT;
app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});

//serving build folder statically. CRA DEployment plus codewithHarry Backend Tutorial: Serving HTML Files using NodeJs | Web Development Tutorials #66 reference
app.use(express.static(path.resolve(__dirname, "..", "build")));

let indexHtml = path.resolve(__dirname, "..", "build/index.html");
console.log(`indexHtml`, indexHtml);

app.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send(indexHtml);
  // res.send("<h1>App is Running</h1>");
});
