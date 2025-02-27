const mongoose = require("mongoose");
const listing = require("../models/listing.js");
const Insdata = require("./data_sample.js");

main()
  .then((res) => {
    console.log("connection is success");
  })
  .catch((err) => {
    console.log("err");
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}

const Data_Airbnb = async () => {
  await listing.deleteMany({});
  Insdata.data = Insdata.data.map((obj) => ({
    ...obj,
    owner: "67148d6158fb3105d813978e",
  }));
  await listing.insertMany(Insdata.data);
  console.log("Data inserted");
};

Data_Airbnb();
