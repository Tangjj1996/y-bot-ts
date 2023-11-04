import { describe, it, expect } from "vitest";
import { mongoDBOperationInstance } from "@/service";

describe("MongoDb operation", () => {
  it(
    "Init successfully",
    async () => {
      const result = await mongoDBOperationInstance.mongoosePromise;
      expect(result).not.toBeInstanceOf(Error);
    },
    { timeout: 100_000 },
  );

  it("Create succcessfully", async () => {
    const result = await mongoDBOperationInstance.create([
      { title: "hhhh", url: "xxx", pub_time: 100_000 },
    ]);
    expect(result).not.toBeInstanceOf(Error);
  });
});
