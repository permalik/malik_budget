const {Sequelize} = require("sequelize");
const sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define('account', {
    amount: {
      type: Sequelize.DOUBLE
    },
    title: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    frequency: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY
    },
    reoccur: {
      type: Sequelize.BOOLEAN
    },
    note: {
      type: Sequelize.STRING
    },
    important: {
      type: Sequelize.BOOLEAN
    },
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    }
  });
  return Account;
};