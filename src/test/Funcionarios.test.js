import request from "supertest";
import app from "../app.js";

describe("GET /funcionarios", () => {
  it("Deve retornar todos os funcionários", async () => {
    const res = await request(app).get("/funcionarios");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /funcionarios/id/:id", () => {
    it("Deve retornar todos os funcionários", async () => {
      const res = await request(app).get("/funcionarios/id/7");
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("GET /funcionarios/email/:email", () => {
    it("Deve retornar todos os funcionários", async () => {
      const res = await request(app).get("/funcionarios/email/paulo.goncalves@rosemaryss.com.br");
      expect(res.statusCode).toEqual(200);
    });
  });