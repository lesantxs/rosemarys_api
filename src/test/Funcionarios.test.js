import request from "supertest";
import app from "../app.js";

describe("GET /funcionarios", () => {
  it("Deve retornar todos os funcionários", async () => {
    const res = await request(app).get("/funcionarios");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /funcionario/id/:id", () => {
    it("Deve retornar todos o funcionário", async () => {
      const res = await request(app).get("/funcionario/id/3");
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("GET /funcionario/email/:email", () => {
    it("Deve retornar todos o funcionário", async () => {
      const res = await request(app).get("/funcionario/email/maria.andrade@rosemaryss.com.br");
      expect(res.statusCode).toEqual(200);
    });
  });