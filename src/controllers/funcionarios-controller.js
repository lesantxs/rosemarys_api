import Funcionario from "../models/Funcionarios.js";

const funcionarioController = (app, bd) => {

  app.get("/funcionarios", (req, res) => {
    const todosFuncionarios = bd.funcionarios

    res.json({
      "funcionarios": todosFuncionarios,
      "erro": false
    })
  })

  app.get("/funcionarios/email/:email"), (req, res)=>{
    const email = req.params.email

    const funcionarioEncontrado = bd.funcionarios.filter(funcionario=>(funcionario.email == email))

    res.json({
      "funcionario": funcionarioEncontrado,
      "erro": false
    })
  }

  app.post("/funcionarios", (req, res) => {
    const body = req.body

    try{
      const novoFuncionario = new Funcionario(body.id, body.nome, body.funcao, body.email, body.senha, body.status, body.demissao)

      bd.funcionarios.push(novoFuncionario)

      res.json({
        "msg": `Funcionário ${novoFuncionario.nome} admitido`,
        "funcionario": novoFuncionario,
        "erro": false
      })
    }
    catch(error){
      res.json({
        "msg": error.message,
        "erro": true
      })
    }

  })

  app.delete("/funcionarios/email/:email", (req, res)=>{
    const email = req.params.email

    const novoDB = bd.funcionarios.filter(funcionario =>(funcionario.email !== email))

    bd.funcionarios = novoDB

    res.json({
      "msg": `Email ${email} e seus dados deletados.`,
      "erro": false
    })
  })

  app.put("/funcionarios/email/:email", (req, res)=>{
    const email = req.params.email

    const body = req.body

    try{
      const atualizarFuncionario = new Funcionario(body.id, body.nome, body.funcao, body.email, body.senha, body.status, body.demissao)

      bd.funcionarios = bd.funcionarios.map(funcionario => {
        if(funcionario.email === email){
          return atualizarFuncionario
        }
        return funcionario
      })
      res.json({
        "msg": `Informações do ${atualizarFuncionario.email} atualizadas.`,
        "funcionario": atualizarFuncionario,
        "erro": false
      })
    } catch(error){
      res.json({
        "msg": error.message,
        "erro": true
      })
    }
  })
} 

export default funcionarioController;
