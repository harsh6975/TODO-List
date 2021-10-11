const Task = require("../models/todoSchema");

module.exports.home = function (req, res) {
  Task.find({}, (err, tasklist) => {
    if (err) {
      console.log("error in home render");
    }   
    return res.render("home", {
      tasklist: tasklist,
    });
  });
};

module.exports.create = function (req, res) {
  //console.log(req.body);
  console.log(req.body);
  Task.findOne(req.body, function (err, task) {
    if (err) {
      console.log("error in find");
      return;
    }
    if (task) {
      console.log("task exists");
      return res.redirect("back");
    } else {
      Task.create(req.body, function (err, task) {
        if (err) {
          console.log("error in creating", err);
          return;
        }
        console.log("task added");
        return res.redirect("back");
      });
    }
  });
  return;
};
