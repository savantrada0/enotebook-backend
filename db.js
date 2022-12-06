const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/inotebook?&directConnection=true&tls=false&readPreference=primary";

//promises or async await
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connnected to mongo successfully");
  });
};

module.exports = connectToMongo;
