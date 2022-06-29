require('dotenv').config();
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false
    }
  }
});

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been successfully established.");
    sequelize.close()
  } catch (error) {
    console.log("Unable to connect to db:", error);
  }
};

main();