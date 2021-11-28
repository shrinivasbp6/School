const express = require("express");
const path = require("path");
const app = express();
const { port } = require("./config/config");
const cors = require("cors");
const db = require("./models");
const CreateUser = require("./controllers/user/create-user-query");
const GetAllUsers = require("./controllers/user/get-user-query");
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});
app.use(cors());
app.set("json spaces", 4);

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static(path.join(__dirname, "./public")));

app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "./public"));
app.set("view engine", "html");

app.set("json spaces", 4);

app.get("/", (req, res) => {
    res.render("./index.html");
});

app.get("/admin", (req, res) => {
    res.render("./admin.html");
});

app.post("/check-bmi", async (req, res) => {
    const { name, height, weight } = req.body;
    const resp = await CreateUser(name, height, weight);
    res.status(200).json(resp);
});

app.get("/getall", async (req, res) => {
    const resp = await GetAllUsers();
    res.status(200).json(resp);
});

app.use((req, res, next) => {
    res.status(404).json({ message: "NOT FOUND" });
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "TRY AGAIN LATER" });
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Sever listening at ${process.env.PORT}`);
});
