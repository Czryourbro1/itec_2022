const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
async function main() {
  await mongoose.connect(
    "mongodb+srv://Czryourbro:12345@cluster0.8efmu.mongodb.net/database?retryWrites=true&w=majority"
  );
}
main();
const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Username alraedy available"],
    required: [true, "Username is required"],
  },
  pass: {
    type: String,
    required: [true, "Username is required"],
  },
  diagnostic: {
    type: Array,
  },
  chosen_symptoms: {
    type: Array,
  },
});

const account = mongoose.model("account", accountSchema);

const express = require("express");
const app = express();
const port = 3000;

let cors = require("cors");
app.use(cors());

app.use(express.json());

app.post("/register", async (req, res) => {
  let body = req.body;
  let user;
  const salt = await bcrypt.genSalt(10);
  body.pass = await bcrypt.hash(body.pass, salt);
  console.log(body);
  try {
    const newAccount = new account(body);
    await newAccount.save();
    user = await account.findOne({ email: body.email });
  } catch (error) {
    res.send("acest cont exista deja");
    return;
  }
  res.send(user._id);
});

app.post("/login", async (req, res) => {
  const body = req.body;
  const user = await account.findOne({ email: body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.pass, user.pass);
    if (validPassword) {
      res.send(user._id);
    } else {
      res.send("Invalid Password");
    }
  } else {
    res.send("User does not exist");
  }
});

app.post("/addsymptom", async (req, res) => {
  const body = req.body;
  const user = await account.findOne({ _id: body[0] });
  console.log(body[0]);
  for (let i = 1; i < body.length; i++) {
    user.chosen_symptoms.push(body[i]);
  }
  await user.save();
  res.send(user.chosen_symptoms);
});

app.post("/diagnostic", async (req, res) => {
  const body = req.body;
  const user = await account.findOne({ _id: body[0] });
  console.log(body[0]);

  user.diagnostic.push(body[1]);

  await user.save();
  res.send(user.diagnostic);
});

app.get("/history", async (req, res) => {
  const history = await account.find();
  console.log(history);
  res.send(history);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
