const request = require("supertest");
const app = require("../src/router");
const sequelize = require("../src/db");

describe("Test API /", () => {
    it("Should hello world api", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toEqual("Hello World!");
    });
});

afterAll(() => {
    // Close database connection
    sequelize.close();
});

describe("Test API /products", () => {
    it("Should get all products from db", async () => {
        const response = await request(app).get("/products");
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(3);
    });
});