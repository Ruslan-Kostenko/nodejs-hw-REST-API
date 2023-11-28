const mongoose = require("mongoose");
const app = require('./app');

const DB_URI =
  "mongodb+srv://RuslanKostenko:Vhuf2AKWUrcmEfRc@rk-cluster-01.c9uqsia.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose.connect(DB_URI)
  .then(() => {
  app.listen(3000)
})
  .catch(error => {
    console.log(error.message);
    process.exit(1);
})
