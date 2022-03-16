const funcionarioController = (app) => {
  app.get("/funcionarios", (req, res) => {
    res.json({
      "funcionarios": [],
    });
  });

  app.post("/funcionarios", (req, res) => {
    res.json({
      "msg": "Funcionário cadastrado com sucesso",
    });
  });
};

export default funcionarioController;
