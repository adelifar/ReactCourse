const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
const bodyParser = require("body-parser");
const port = 3002;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const MY_SECRET = "MehdiAdeliTosinsoSecret";
const auth = require("./middleware/auth");
let data = [];
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,x-access-token"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

  next();
});
app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    res.status(400).send({ message: "All input is required" });
  console.log(email);
  const existingUser = data.find((u) => u.email == email);
  console.log(existingUser);
  if (
    existingUser &&
    (await bcrypt.compare(password, existingUser.encryptedPassword))
  ) {
    const token = jwt.sign({ email }, MY_SECRET, { expiresIn: "2h" });
    res.send({ email, token });
  } else res.status(400).send({ message: "Invalid Credentials" });
});
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: "All input is required" });
    return;
  }
  if (data.find((u) => u.email === email)) {
    res.status(409).send({ message: "User already exists" });
    return;
  }
  const encryptedPassword = await bcrypt.hash(password, 10);
  const token = jwt.sign({ email }, MY_SECRET, { expiresIn: "2h" });
  let user = { email, encryptedPassword, token };
  data.push(user);
  res.send(user);
  console.log(data);
});
app.post("/profile", auth, (req, res) => {
  res.status(200).send("Welcome " + req.email);
});
app.post("/changePassword", auth, async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({ message: "All input is required" });
    return;
  }
  const userIndex = data.findIndex((u) => u.email === email);
  if (userIndex >= 0) {
    const encryptedPassword = await bcrypt.hash(password, 10);

    data[userIndex].encryptedPassword = encryptedPassword;
    res.send(data[userIndex]);
  } else res.status(400).send({ message: "Invalid Credentials" });
});
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
