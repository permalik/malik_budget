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