const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    question: {
      type: String,
      required: [true, "Question is Required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is Required"],
    },
  },
  {
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
});

  const History = mongoose.model("History", historySchema);

  module.exports = History;