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
