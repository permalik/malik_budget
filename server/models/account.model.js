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
};

// module.exports = mongoose => {
//   var schema = mongoose.Schema(
//     {
//       title: String,
//       description: String,
//       published: Boolean
//     },
//     {timestamps: true}
//   );
//
//   schema.method("toJSON", function () {
//     const {__v, _id, ...object} = this.toObject();
//     object.id = _id;
//     return object;
//   });
//
//   const Tutorial = mongoose.model("tutorial", schema);
//   return Tutorial;
// };

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