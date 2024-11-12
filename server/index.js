const express = require("express");
var cors = require("cors");
const app = express();
const route = require("./routes/route");
const port = 3000;

//........cors ......
app.use(cors());
app.use(express.json());

//........routes............
app.use("/", route);
app.get("/", (req, res) => {
  res.send("my server is  started");
});

//.........My server is started...........
app.listen(port, () => {
  console.log("Server is started on this", port);
});
