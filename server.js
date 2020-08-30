const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());

app.use("/build", express.static("./public/build"));

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
