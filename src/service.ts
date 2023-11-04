import mongoose, { Schema } from "mongoose";
import { XMLMessage } from "./utils";
import config from "./config";
import { DOC_NAME } from "./contance";

await mongoose.connect(config.mongodb_url);
const BotModel = mongoose.model(
  DOC_NAME,
  new Schema({ title: String, url: String, pub_time: Number }),
);

export const createData = async (msg: XMLMessage[]) => {
  await BotModel.insertMany(msg);
};

export const retriveData = () => {};

export const updateData = () => {};

export const deleteData = () => {};
