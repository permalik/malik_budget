const {findAll} = require("../controllers/account.controller");
module.exports = app => {
  const accounts = require('../controllers/account.controller');
  let router = require('express').Router();

  router.post('/', accounts.create);
  router.get('/', findAll);
  router.get(':/id', accounts.findOne);
  router.put(':/id', accounts.update);
  router.delete(':/id', accounts.delete);
  router.delete('/', accounts.deleteAll);
};