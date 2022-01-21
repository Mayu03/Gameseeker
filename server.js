const express = require("express");
const mongoose = require("mongoose");
const app = express();
const https = require("http").Server(app);
var cors = require("cors");

const io = require("socket.io")(https, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});
var counter = 0; //Initial counter value

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     credentials: true,
//   })
// );

// app.use(function (req, res, next) {
//   console.log(req);
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

//connecting to mongodb database
mongoose.connect("mongodb://localhost:27017/Games");

//creating schema a structure for data representation
const gameSchema = new mongoose.Schema({
  Game: { type: String },
  Year: { type: Number },
  Genre: { type: String },
  Publisher: { type: String },
  Global: { type: Number },
});

//what model do!, basically it will apply the schema to the database
const gameModel = mongoose.model("gamedatas", gameSchema);

app.get("/", async (req, res) => {
  await gameModel
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// const server = app.listen(5000, () => {
//   console.log("server start");
// });

// const io = socket(server);

io.on("connection", (socket) => {
  // console.log("connected user");
  socket.emit("click_count", counter);

  //when user click the button
  socket.on("clicked", function () {
    counter += 1; //increments global click count
    io.emit("click_count", counter);
  });
});

//send to all users new counter value

https.listen(5000);
