const express = require("express");
const route = require("./routes/indexRouter");

const app = express();
const port = 3000;

//setting view engine
app.use('view engine','ejs');
app.use('views','./views');

//aloowing assests folder
app.use(express.static('./assets'));

//routes
app.use("/", route);

//conecting to server
app.listen(port, function (err) {
  if (err) {
    return console.log("Error in starting server ", err);
  }
  return console.log("Server running in port : ", port);
});
