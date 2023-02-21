const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/GIT_COLAB"

const connectDB = async () => {
  try {
  await mongoose
      .connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`mongodb connected`))
      .catch((err) => console.log("mongo connecting err : ", err.message));
  } catch (error) {
    console.log(error.message)
  }
};
mongoose.set('strictQuery', true);

module.exports = connectDB
