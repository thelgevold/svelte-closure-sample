const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression({ level: 1 }));

app.use("/build", express.static("./public/build"));

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

app.get("/closure", (_req, res) => {
  res.sendFile("index-closure.html", { root: "./public" });
});

app.get("/rollup", (_req, res) => {
  res.sendFile("index-rollup.html", { root: "./public" });
});

app.get("/closure-map", (_req, res) => {
  res.sendFile("closure-map.html", { root: "./public" });
});

app.get("/rollup-map", (_req, res) => {
  res.sendFile("rollup-map.html", { root: "./public" });
});

app.get("/angular-http1", (_req, res) => {
  res.json({ greeting: 'hello-world1' });
});

app.get("/angular-http2", (_req, res) => {
  res.json({ greeting: 'hello-world2' });
});

app.post("/angular-http-post", (_req, res) => {
  res.json({ greeting: 'Hello from post' });
});

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`Example app listening on port ${port}`));