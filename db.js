const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://savan:savan@cluster0.t4pim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//promises or async await
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connnected to mongo successfully");
  });
};

module.exports = connectToMongo;
