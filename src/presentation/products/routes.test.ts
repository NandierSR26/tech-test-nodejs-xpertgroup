import mongoose from "mongoose";
import { ProductModel } from "../../data/mongo/models/Product";
import { testServer } from "./../server-test";
import request from "supertest";

describe("Products route testing", () => {
  beforeAll(async () => {
    await testServer.start();

    const url = process.env.MONGO_URL!;
    await mongoose.connect(url);
  }, 20000);

  afterAll(async () => {
    testServer.close();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await ProductModel.deleteMany();
  }, 20000);

  const product1 = {
    name: "product 1",
    price: 12000,
    amount: 34,
  };
  const product2 = {
    name: "product 2",
    price: 10000,
    amount: 34,
  };

  test("should return Products api/todos ", async () => {
    await ProductModel.create([product1, product2]);
    const { body } = await request(testServer.app)
      .get("/api/v1/products")
      .expect(200);

    expect(body).toBeInstanceOf(Array);
    expect(body.length).toBe(2);
  });

  test("should return a Product by id api/todos/:id", async () => {
    const product = await ProductModel.create(product2);

    const { body } = await request(testServer.app)
      .get(`/api/v1/products/${product.id}`)
      .expect(200);

    expect(body).toEqual({
      id: expect.any(String),
      name: product.name,
      price: product.price,
      amount: product.amount,
    });
  });

  test("should return a 404 NotFound api/products/:id", async () => {
    const todoId = "66b24fd3dd020e225da1ebb4";
    const { body } = await request(testServer.app)
      .get(`/api/v1/products/${todoId}`)
      .expect(400);

    expect(body).toEqual({ error: "Product not found" });
  });

  test("should return a new Product api/products", async () => {
    const { body } = await request(testServer.app)
      .post("/api/v1/products")
      .send(product1)
      .expect(200);

    expect(body).toEqual({
      id: expect.any(String),
      name: product1.name,
      price: product1.price,
      amount: product1.amount,
    });
  });

  test("should return an error if some property isn't present api/products", async () => {
    const { body } = await request(testServer.app)
      .post("/api/v1/products")
      .send({})
      .expect(400);

    expect(body).toEqual({ error: "Name Property is required" });
  });

  test("should return an error if some property is empty api/products", async () => {
    const { body } = await request(testServer.app)
      .post("/api/v1/products")
      .send({ name: "" })
      .expect(400);

    expect(body).toEqual({ error: "Name Property is required" });
  });

  test("should return an updated products api/products/:id", async () => {
    const todo = await ProductModel.create(product1);

    const { body } = await request(testServer.app)
      .put(`/api/v1/products/${todo.id}`)
      .send({
        name: "Product updated",
        price: 45000,
        amount: 50,
      })
      .expect(200);

    expect(body).toEqual({
      id: expect.any(String),
      name: "Product updated",
      price: 45000,
      amount: 50,
    });
  });

  // // TODO: realizar la operación con errores personalizados
  test("should return 404 if TODO not found", async () => {
    const { body } = await request(testServer.app)
      .put(`/api/v1/products/66b24fd3dd020e225da1ebb4`)
      .send({
        name: "Product updated",
        price: 45000,
        amount: 50,
      })
      .expect(400);

    expect(body).toEqual({ error: 'Product not found' });
  });

  test("should delete a TODO api/products/:id", async () => {
    const todo = await ProductModel.create(product1);

    const { body } = await request(testServer.app)
      .delete(`/api/v1/products/${todo.id}`)
      .expect(200);

    expect(body).toEqual({
      id: expect.any(String),
      name: product1.name,
      price: product1.price,
      amount: product1.amount
    });
  });

  test("should return 404 if product do not exist api/products/:id", async () => {
    const { body } = await request(testServer.app)
      .delete(`/api/v1/products/66b24fd3dd020e225da1ebb4`)
      .expect(400);

    expect(body).toEqual({ error: 'Product not found' });
  });
});
