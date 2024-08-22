import express from "express";
import path from "path";

const app = express();
//const path = path();
//const router = app.router();
/*
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/sitemap", function (req, res) {
  res.sendFile(path.join(__dirname + "/sitemap.html"));
});
*/
app.get("/probeersels", function (req, res) {
  res.sendFile(path.join(__dirname + "/HyperBubbles.html"));
});

//add the router
//app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
