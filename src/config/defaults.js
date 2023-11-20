
require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  CLIENT: process.env.CLIENT,
};

module.exports = Object.freeze(config);
