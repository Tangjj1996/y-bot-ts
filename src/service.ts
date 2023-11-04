import mongoose from "mongoose";
import { XMLMessage } from "./utils";
import config from "./config";

interface MongoDBOperationOptions {}

/**
 * 保存到数据库中
 */
export class MongoDBOperation {
  mongoosePromise: Promise<typeof mongoose>;

  constructor(option: MongoDBOperationOptions) {
    const { mongodb_url } = config;
    this.mongoosePromise = mongoose.connect(mongodb_url);
  }

  async create(msg: XMLMessage[]) {
    await this.mongoosePromise;
    console.log("MongoDBOperation msg::", msg);
    const kittySchema = new mongoose.Schema({
      name: String,
    });
    const Kitten = mongoose.model("Kitten", kittySchema);
    const silence = new Kitten({ name: "Silence" });
    console.log(silence.name);
    await silence.save();
    console.log(await Kitten.find(), "++++");
  }

  async retrieve() {
    await this.mongoosePromise;
  }

  async update() {
    await this.mongoosePromise;
  }

  async delete() {
    await this.mongoosePromise;
  }
}

export const mongoDBOperationInstance = new MongoDBOperation({});
