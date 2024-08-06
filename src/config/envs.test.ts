import { envs } from "./envs";

describe("envs.plugin.ts", () => {
  test("should return env options", () => {
    expect(envs).toEqual({
      PORT: 3000,
      MONGO_URL: "mongodb://nandier:nandier123@localhost:27018",
      MONGO_DB_NAME: "XpertgroupProducts",
      MONGO_USER: "nandier",
      MONGO_PASS: "nandier123",
    });
  });

  test("should return error if not found env", async () => {
    jest.resetModules();
    process.env.PORT = "ABC";

    try {
      await import("./envs");
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
  });
});
