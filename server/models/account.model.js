const {Sequelize} = require("sequelize");
const sequelize = require("sequelize");
module.exports = mongoose => {
  const Account = mongoose.model(
    'account',
    mongoose.Schema(
      {
        title: String,
        amount: Number,
        type: String,
        status: String,
        frequency: String,
        date: Date,
        reoccur: Boolean,
        note: String,
        important: Boolean,
        tags: Array
      },
      {timestamps: true}
    ));
  return Account;
};
//     type: {
//       type: Sequelize.STRING
//     },
//     status: {
//       type: Sequelize.STRING
//     },
//     frequency: {
//       type: Sequelize.STRING
//     },
//     date: {
//       type: Sequelize.DATEONLY
//     },
//     reoccur: {
//       type: Sequelize.BOOLEAN
//     },
//     note: {
//       type: Sequelize.STRING
//     },
//     important: {
//       type: Sequelize.BOOLEAN
//     },
//     tags: {
//       type: Sequelize.ARRAY(Sequelize.STRING)
//     }
//   });
// };