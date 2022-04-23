import request from "supertest";
import app from "../app.js";

describe("GET /funcionarios", () => {
  it("Deve retornar todos os funcionários", async () => {
    const res = await request(app).get("/funcionarios");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /funcionario/id/:id", () => {
    it("Deve retornar um funcionário pelo id", async () => {
      const res = await request(app).get("/funcionario/id/3");
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("GET /funcionario/email/:email", () => {
    it("Deve retornar um funcionário pelo email", async () => {
      const res = await request(app).get("/funcionario/email/maria.andrade@rosemaryss.com.br");
      expect(res.statusCode).toEqual(201);
    });
  });

  describe("POST /funcionario", () => {
    it("Deve inserir um novo funcionário", async () => {
      const res = await request(app).post("/funcionario").send({
        nome: "Eli Gabriel",
	    cargo: "Adminstrador",
	    email: "eli.gabriel@rosemaryss.com.br",
	    senha: "dftgvhjbk656#",
	    status: "ativo"
      });
      expect(res.statusCode).toEqual(201);
    });
  });