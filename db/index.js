const mongoose = require("mongoose");
require("dotenv/config");
const DB_URL =
  process.env.NODE_ENV === "test"
    ? process.env.LOCAL_DB
    : process.env.DB_CONNECTION;

function connect() {
  console.log("DB_URL", DB_URL);
  return new Promise((resolve, reject) => {
    /* test environment */
    if (process.env.NODE_ENV === "test") {
      const Mockgoose = require("mockgoose").Mockgoose;
      const mockgoose = new Mockgoose(mongoose);
      mockgoose.prepareStorage().then(() => {
        mongoose
          .connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true })
          .then((res, err) => {
            if (err) return reject(err);
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    }
    /* test environment */

    /* production environment */
    mongoose
      .connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true })
      .then((res, err) => {
        if (err) return reject(err);
        resolve(res);
      })
      .catch((err) => reject(err));
    /* production environment */
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
