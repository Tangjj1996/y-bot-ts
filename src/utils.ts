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

export const parseXML = async (text: string) => {
  const result = await parseStringPromise(text, { trim: true });
};
