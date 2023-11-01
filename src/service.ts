import { XMLMessage } from "./utils";

interface MongoDBOperationOptions {}

/**
 * 保存到数据库中
 */
export class MongoDBOperation {
  constructor(option: MongoDBOperationOptions) {
    console.log("This is option:", option);
  }

  async create(msg: XMLMessage[]) {
    console.log("You have successfully create", msg);
    await Promise.resolve(msg);
  }

  async retrieve() {}

  async update() {}

  async delete() {}
}

export const mongoDBOperationInstance = new MongoDBOperation({});
