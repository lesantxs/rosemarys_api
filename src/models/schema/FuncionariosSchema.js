class FuncionarioSchema {
  constructor(id, nome, cargo, email, senha, status) {
    this.id = id;
    this.nome = this._validaNome(nome);
    this.cargo = this._validaCargo(cargo);
    this.email = this._validaEmail(email);
    this.senha = this._validaSenha(senha);
    this.status = this._validaAtividade(status);
    this.admissao = new Date().toLocaleString();
  }


  _validaNome = (nome) => {
    if (nome == "" || nome.length < 3) {
      throw new Error("Campo obigatório. Digite um nome válido.");
    } else {
      return nome;
    }
  };

  _validaCargo = (cargo) => {
    if (cargo == "") {
      throw new Error("Campo obrigatório. Digite o cargo do funcionário.");
    } else {
      return cargo;
    }
  };

  _validaEmail = (email) => {
    if (
      email == "" ||
      email.indexOf("@") == -1 ||
      email.indexOf("rosemaryss.com.br") == -1
    ) {
      throw new Error("Email com domínio ou formataçâo incorreta.");
    } else {
      return email;
    }
  };

  _validaSenha = (senha) => {
    if (senha.length >= 6) {
      return senha;
    } else {
      throw new Error("A senha precisa ter mais de 6 caracteres");
    }
  };

  _validaAtividade = (status) => {
    if (status == "ativo" || status == "Ativo") {
      return status;
    }
    if (status == "inativo" || status == "Inativo") {
      return status;
    } else {
      throw new Error("Informe o status do funcionário.");
    }
  };
}

export default FuncionarioSchema;
