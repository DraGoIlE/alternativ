const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("MINIKUBE TOLONG KASIH HAMBA JAWABAN");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
