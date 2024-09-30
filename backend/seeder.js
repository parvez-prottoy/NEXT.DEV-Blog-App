import users from "./data/users.js";
import UserModel from "./src/models/user.model.js";
import connectDB from "./config/db.js";

// note: connect db
connectDB();

// note: import demo users data in mongodb
const importData = async () => {
  try {
    await UserModel.deleteMany();
    // note: insert users data in mongodb
    await UserModel.insertMany(users);
    console.log("Data Imported Successfully.".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
// note: destroy demo users data in mongodb
const destroyData = async () => {
  try {
    await UserModel.deleteMany();
    console.log("Data Destroyed Successfully!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
