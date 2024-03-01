import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5000;
const uriDb = process.env.DATABASE_URL || "mongodb+srv://hobbies123:ymt6BmKZdKTgucU@hobbies.ocudtg9.mongodb.net/";


const connection = mongoose.connect(uriDb, {
  dbName: "db-masterofcards",
});

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successfull. PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
