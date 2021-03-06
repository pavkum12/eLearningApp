const express = require("express");
const connect = require("./database/connection");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 8080;

// create express instance
const app = express();
app.use(express.json());
app.use(cors());

// database connection
connect();

if (process.env.NODE_ENV === "production") {
  console.log("in production");
  app.use(express.static("../build/"));
}

// routes
// app.use('/api', require('./router/router'));
const router = require("express").Router();

const controller = require("./controller/controller");
const auth = require("./middleware/auth");

app.use(express.static(path.join(__dirname, "../build")));
console.log("in Router");
app.post("/api/register", controller.registerUser);
app.post("/api/login", controller.login);
app.post("/api/admin", controller.admin);
app.delete("/api/delete", auth, controller.delete);
app.post("/api/addCourse", controller.addCourse);
app.post("/api/addQuestion", controller.addQuestion);
app.get("/api/getQuestion", controller.getQuestion);
app.get("/api/getCourse", controller.getCourse);
app.post("/api/addUpdate", controller.addUpdate);
app.get("/api/getUpdate", controller.getUpdate);
app.post("/api/deleteCourse", controller.deleteCourse);
app.post("/api/deleteUpdate", controller.deleteUpdate);
app.post("/api/deleteQuestion", controller.deleteQuestion);
app.post("/api/addAdmin", controller.addAdmin);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
