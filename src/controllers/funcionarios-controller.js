import Funcionario from "../models/Funcionario.js";
// import res from "express/lib/response";

const funcionarioController = (app, bd) => {
  const funcionarioModel = new Funcionario(bd);

  app.get("/funcionarios", async (req, res) => {
    try {
      const resposta = await funcionarioModel.pegaTodosFuncionarios();
      res.status(200).json({
        "funcionarios": resposta,
        "erro": false,
      });
    } catch (error) {
      res.status(400).json({
        "mensagem": error.message,
        "erro": true,
      });
    }
  });

  app.get("/funcionario/id/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const resposta = await funcionarioModel.pegaUmFuncionarioId(id);
      res.status(200).json({
        "funcionarios": resposta,
        "erro": false,
      });
    } catch (error) {
      res.status(400).json({
        "mensagem": error.message,
        "erro": true,
      });
    }
  });

  app.get("/funcionario/email/:email", async (req, res) => {
    const email = req.params.email;

    try {
      const resposta = await funcionarioModel.pegaUmFuncionario(email);
      res.status(200).json({
        "funcionarios": resposta,
        "erro": false,
      });
    } catch (error) {
      res.status(400).json({
        "mensagem": error.message,
        "erro": true,
      });
    }
  });

  
  app.post('/funcionario',async (req, res)=>{
    const body = req.body
    try {
        const resposta = await funcionarioModel.insereFuncionario(body)
        res.status(201)
        .json({
            "mensagem" : resposta,
            "funcionario": body,
            "erro" : false
        })
    } catch (error) {
        res.status(400)
        .json({
            "mensagem" : error.message,
            "erro" : true
        })
    }
})

app.post('/funcionario/login',async (req, res)=>{
  const {email, senha} = req.body
 
  try {
      const resposta = await funcionarioModel._verificaLogin(email, senha)

      if (!resposta) {
        res.status(422).json({"message": "Email ou senha estão incorretos, verifique e tente novamente"})
        return
      }
      res.status(201)
      .json({
          "mensagem" : "entrou",
          "cliente": resposta

      })
  } catch (error) {
      res.status(400)
      .json({
          "mensagem" : error.message,
          "erro" : true
      })
  }
}) 

  app.delete("/funcionario/id/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const resposta = await funcionarioModel.deletaFuncionario(id);
      res.status(200).json({
        "mensagem": resposta,
        "erro": false,
      });
    } catch (error) {
      res.status(400).json({
        "mensagem": error.message,
        "erro": true,
      });
    }
  });


  app.put("/funcionario/id/:id", async (req, res) => {
    const id = req.params.id;

    const body = req.body;

    try {
      const resposta = await funcionarioModel.atualizaFuncionario(id, body);
      res.status(200).json({
        "mensagem": resposta,
        "funcionario": body,
        "erro": false
      });
    } catch (error) {
      res.status(400).json({
        "mensagem": error.message,
        "erro": true
      });
    }
  });
};
export default funcionarioController;
