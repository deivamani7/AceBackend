const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = __dirname + '/app/views/';
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(express.static(path));
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const db = require("./app/models");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
db.sequelize.sync();

require("./app/routes/item.routes")(app);
app.get("/**", (req, res) => {
  res.sendFile(path + "index.html");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});