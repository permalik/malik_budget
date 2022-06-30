const db = require('../models');
const Account = db.accounts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.amount) {
    res.status(400).send({
        message: 'Amount cannot be empty!'
      }
    );
  }
  if (!req.body.title) {
    res.status(400).send({
        message: 'Title cannot be empty!'
      }
    );
  }
  if (!req.body.type) {
    res.status(400).send({
        message: 'Type cannot be empty!'
      }
    );
  }
  if (!req.body.status) {
    res.status(400).send({
        message: 'Status cannot be empty!'
      }
    );
  }
  if (!req.body.frequency) {
    res.status(400).send({
        message: 'Frequency cannot be empty!'
      }
    );
  }
  if (!req.body.date) {
    res.status(400).send({
        message: 'Date cannot be empty!'
      }
    );
  }
  const account = {
    amount: req.body.amount,
    title: req.body.title,
    type: req.body.type,
    status: req.body.status,
    frequency: req.body.frequency,
    date: req.body.date,
    reoccur: req.body.reoccur ? req.body.reoccur : false,
    note: req.body.note,
    important: req.body.important ? req.body.important : false,
    tags: req.body.tags
  };
  Account.create(account)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || 'An error occurred while creating the account.'
      });
    });
};

exports.findAll = (req, res) => {

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};