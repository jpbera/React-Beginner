const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const db = require("../models");
const Role = db.role;

// Replace this with your MONGOURI.
const MONGOURI = process.env.DB_CONNECT;

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB !!");
    initial();
    
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;

const initial=()=> {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to Role collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to Role collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to Role collection");
      });
    }
  });
}