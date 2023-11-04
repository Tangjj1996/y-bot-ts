import { createData } from "./service";
import type { XMLMessage } from "./utils";

/**
 * 处理xml消息
 * @param msg
 */
export const handleXMLMsg = async (msg: XMLMessage[]) => {
  await createData(msg);
};
