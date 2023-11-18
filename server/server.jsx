const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const { loginUsername, loginPassword } = req.body;

  try {
    if (!loginUsername || !loginPassword) {
      return res.status(400).json({ error: "Username and password are required" });
    }

    const user = await User.findOne({ username: loginUsername });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(loginPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bcrypt = require("bcrypt");

// const app = express();
// const PORT = process.env.PORT || 5000;
// MONGODB_URI="mongodb+srv://viswanadhamandala:aJRqlczXqUWdfn6G@cluster0.cnyjvfe.mongodb.net/myapp"
// require('dotenv').config();
// // ...

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// // mongoose
// //   .connect(
// //     "mongodb+srv://viswanadhamandala:aJRqlczXqUWdfn6G@cluster0.cnyjvfe.mongodb.net/myapp",
// //     {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     }
// //   )
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);


// app.use(cors());
// app.use(bodyParser.json());


// app.post("/signup", async (req, res) => {
//   const { username, password } = req.body;

//   try {
  
//     const existingUser = await User.findOne({ username });

//     if (existingUser) {
//       return res.status(400).json({ error: "Username already exists" });
//     }

    
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const newUser = new User({
//       username,
//       password: hashedPassword,
//     });

    
//     await newUser.save();

//     res.status(200).json({ message: "User signed up successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.post("/login", async (req, res) => {
//   const { loginUsername, loginPassword } = req.body;

//   try {
//     const user = await User.findOne({ username: loginUsername });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const passwordMatch = await bcrypt.compare(loginPassword, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ error: "Incorrect password" });
//     }
//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
