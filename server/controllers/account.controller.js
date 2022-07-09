// const express = require('express');
// const accountRoutes = express.Router();
//
// accountRoutes.route('/listings/recordSwipe').post(function (req, res {
//   const dbConnect = dbo.getDb();
//   const matchDocument = {
//     listing_id: req.body.id,
//     last_modified: new Date(),
//     session_id: req.body.session_id,
//     direction: req.body.direction
//   };
//
//   dbConnect
//     .collection('matches')
//     .insertOne(matchDocument, function (err, result) {
//       if (err) {
//         res.status(400).send('Error inserting matches.');
//       } else {
//         console.log(`Added a new match with id ${result.insertedId}`);
//         res.status(204).send();
//       }
//     });
// });
// )

const db = require('../models');
const Account = db.accounts;

exports.create = (req, res) => {
  if (!req.body.amount) {
    res.status(400).send({
        message: 'Amount cannot be empty!'
      }
    );
    return;
  }
  if (!req.body.title) {
    res.status(400).send({
        message: 'Title cannot be empty!'
      }
    );
    return;
  }
  if (!req.body.type) {
    res.status(400).send({
        message: 'Type cannot be empty!'
      }
    );
    return;
  }
  if (!req.body.status) {
    res.status(400).send({
        message: 'Status cannot be empty!'
      }
    );
    return;
  }
  if (!req.body.frequency) {
    res.status(400).send({
        message: 'Frequency cannot be empty!'
      }
    );
    return;
  }
  if (!req.body.date) {
    res.status(400).send({
        message: 'Date cannot be empty!'
      }
    );
    return;
  }
  const account = new Account({
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
  });

  account
    .save(account)
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
  const title = req.query.title;
  let condition = title ? {
    title: {
      $regex: new RegExp(title),
      $options: 'i'
    }
  } : {};

  Account.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || 'An error occurred while retrieving accounts.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Account.findById(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res
          .status(404)
          .send({
            message: `Cannot find account with ID = ${id}.`
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: `Error retrieving Account with ID = ${id}`
        });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({
        message: 'Data to update cannot be empty!'
      });
  }

  const id = req.params.id;

  Account.findByIdAndUpdate(id, req.body, {userFindAndModify: false})
    .then(data => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Cannot update Account with ID = ${id}. Maybe Account was not found or body is empty.`
          });
      } else res.send({
        message: 'Account was successfully updated.'
      });
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || `Error updating Account with ID = ${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
  Account.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} accounts were successfully deleted.`
      });
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || 'An error occurred when deleting all accounts.'
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Account.findByIdAndRemove(id, {useFindAndModify: false})
    .then(data => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Cannot delete Account with id = ${id}. Maybe Account was not found!`
          });
      } else {
        res.send({
          message: 'Account was successfully deleted!'
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        message: `Could not delete Account with id = ${id}`
      });
    });
} ;