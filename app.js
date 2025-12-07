const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("NGROK WEBHOOK TESTING PART 3");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
