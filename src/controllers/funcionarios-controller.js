const funcionarioController = (app) => {
  app.get("/funcionarios", (req, res) => {
    res.send("Rota GET para entidade Funcionários");
  });
};

export default funcionarioController;
