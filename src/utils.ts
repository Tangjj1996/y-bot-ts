import { parseStringPromise } from "xml2js";

const entityMap = new Map([
  ["&lt;", "<"],
  ["&gt;", ">"],
  ["&amp;", "&"],
  ["&quot;", '"'],
  ["&apos;", "'"],
]);

/**
 * 将html字符编码转换成正常字符
 * @param text
 * @returns
 */
export const decodeText = (text: string) => {
  return text.replace(/&[a-z]+;/g, (entity) => {
    if (entityMap.has(entity)) {
      return entityMap.get(entity)!;
    }
    return entity;
  });
};

export const isNil = (data: any) => {
  // eslint-disable-next-line eqeqeq
  return data == undefined;
};

export interface XMLMessage {
  title: string;
  url: string;
  pub_time: number;
}
/**
 * 提取xml结构化数据
 * @param record
 * @param temp
 * @param ref
 * @returns
 */
const dfsResult = (record: any, temp: XMLMessage[] = [], ref: any[] = []) => {
  if (Array.isArray(record)) {
    for (const item of record) {
      dfsResult(item, temp, ref);
    }
  }
  if (typeof record === "object" && record !== null) {
    if (Object.keys(record).length === 0) {
      return temp;
    }
    if (!isNil(record.title) && !isNil(record.url) && !isNil(record.pub_time)) {
      if (ref.includes(record)) {
        return temp;
      }
      ref.push(record);
      temp.push({
        title: record.title?.[0] ?? "",
        url: record.url?.[0] ?? "",
        pub_time: +record?.pub_time[0],
      });
    }
    for (const key in record) {
      dfsResult(record[key], temp, ref);
    }
  }
  return temp;
};

/**
 * 解析xml
 * @param text
 * @returns
 */
export const parseXML = async (text: string) => {
  const result = await parseStringPromise(text, { trim: true });
  return dfsResult(result);
};

/**
 * 判断xml结构体
 * @param text
 * @returns
 */
export const isXmlMessage = (text: string) => {
  return /^<msg>[\S\s]*<appmsg[\S\s]*title[\S\s]*url[\S\s]*pub_time/.test(text);
};
