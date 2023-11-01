import { mongoDBOperationInstance } from "./service";
import type { XMLMessage } from "./utils";

/**
 * 处理xml消息
 * @param msg
 */
export const handleXMLMsg = async (msg: XMLMessage[]) => {
  await mongoDBOperationInstance.create(msg);
};
