const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const classSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  createdBy: {
    type: ObjectId, 
    ref: "User", 
  },
  campusId: {
    type: ObjectId,
    required: true,
    ref: "Campus"
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

const Class = mongoose.model("Class", classSchema);

exports.Class = Class;
exports.classSchema = classSchema;


// [
//   {
//       "userType": "admin",
//       "_id": "5ccd526bcbee3203844d264b",
//       "email": "onojamat@gmail.com",
//       "salt": "b83bde30-6e49-11e9-9bfc-e96da32673e8",
//       "hashed_password": "4d0983282fa3abb5675338c2a8a93e4435f737f9",
//       "name": "Onoja Igoche",
//       "createdAt": "2019-05-04T08:50:51.412Z",
//       "__v": 0
//   },
//   {
//       "userType": "admin",
//       "_id": "5ccd529ecbee3203844d264c",
//       "email": "onojamat1@gmail.com",
//       "salt": "d6cda4a0-6e49-11e9-9bfc-e96da32673e8",
//       "hashed_password": "c19e1eecf6791d3488fa75fa2aa2f57fdaed7643",
//       "name": "Matthew Elizabeth",
//       "createdAt": "2019-05-04T08:51:42.699Z",
//       "__v": 0
//   },
//   {
//       "userType": "admin",
//       "_id": "5ccd52c6cbee3203844d264d",
//       "email": "lizy@gmail.com",
//       "salt": "ee6e3a20-6e49-11e9-9bfc-e96da32673e8",
//       "hashed_password": "261d7de23757ac0dd1309505c83e2ed29ab2f396",
//       "name": "Matthew Elizabeth Love",
//       "createdAt": "2019-05-04T08:52:22.339Z",
//       "__v": 0
//   }
// ]