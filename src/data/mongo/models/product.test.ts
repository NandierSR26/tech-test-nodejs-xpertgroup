import mongoose from "mongoose";
import { envs } from "../../../config/envs";
import { MongoDatabase } from "../init";
import { ProductModel } from "./Product";

describe("Product model test", () => {
  beforeAll(async () => {
    await MongoDatabase.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME,
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  test("should return LogModel", async () => {
    const productData = {
      name: "test-name",
      price: 20000,
      amount: 20,
    };

    const product = await ProductModel.create(productData);

    expect(product).toEqual(
      expect.objectContaining({
        ...productData,
        id: expect.any(String),
      })
    );

    await ProductModel.findByIdAndDelete(product.id);
  });

  test("should return the schema object", () => {
    const schema = ProductModel.schema.obj;

    expect(schema).toEqual(
      expect.objectContaining( {
        name: { type: expect.any(Function), required: true },
        price: { type: expect.any(Function), required: true },
        amount: { type: expect.any(Function), required: true }
      })
    );
  });
});
