import { describe, it, expect } from "vitest";
import { mongoDBOperationInstance } from "@/service";

describe("MongoDb operation", () => {
  it("Init success", async () => {
    const result = await mongoDBOperationInstance.mongoosePromise;
    expect(result).not.toBeInstanceOf(Error);
  });
});
