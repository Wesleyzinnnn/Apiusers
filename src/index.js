const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const port = 3000;

mongoose.connect('mongodb+srv://wesleyrafaelbastos79:789456123@minhaapi.gm67ex1.mongodb.net/?retryWrites=true&w=majority', {
});

const User = mongoose.model('User', {
      name: String,
      email: String,
      password: String,
});

app.get("/", async (req, res) => {
    const newUser = await User.find()
     return res.send(newUser);
});

app.delete("/:id", async(req,res) => {
    const newUser = await User.findByIdAndDelete(req.params.id)
    return res.send(newUser)
})

app.put("/:id", async(req, res) => {
    const newUser = await User.findByIdAndUpdate(req.params.id, {
      name: String,
      email: String,
      password: String,
    })
    return res.send(newUser)
})

app.post("/", async (req, res) => {
  try {
    const newUser = new User({
      name: String,
      email: String,
      password: String,
    });

    await newUser.save();
    return res.send(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log("App running");
});
