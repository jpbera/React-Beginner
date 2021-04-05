const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Replace this with your MONGOURI.
const MONGOURI = process.env.DB_CONNECT;

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;