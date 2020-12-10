const compression = require('compression')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = __dirname + '/app/views/';
const app = express();
const logger = require('morgan');
app.use(compression())
var corsOptions = {
  origin: "http://localhost:8081"
};

//app.use(express.static(path));
let time = 24 * 60 * 60 * 1000*360;
app.use('/', express.static(path, { maxAge: time }));
app.use(cors(corsOptions));
app.use(logger('dev'))

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
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = server