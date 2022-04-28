

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
    const reg = /\S+\.+\S+@\S+\.\S+\.\S/;
    if (
      email == "" ||
      email.indexOf("rosemaryss") == -1 ||
      email.indexOf("@") > email.indexOf("rosemaryss")
    ) {
      throw new Error("Email com domínio ou formataçâo incorreta.");
    } else {
      if (reg.test(email)) {
        return email;
      } else {
        throw new Error("Email com domínio ou formataçâo incorreta.");
      }
    }
  };

  _validaSenha = (senha) => {
    const numeros = /([0-9])/;
    const alfabeto = /([a-zA-Z])/;
    const especiais = /([~,!,@,#,$,%,^,&,*,_,+,=,?,>,<])/;

    if (senha.length < 8) {
      throw new Error(
        "Campo obrigatório. Digite uma senha com no mínimo 8 caracteres."
      );
    } else {
      if(
        senha.match(numeros) &&
        senha.match(alfabeto) &&
        senha.match(especiais)
      ) {
        return senha
      } else {
        throw new Error(
          "A senha precisa conter números, letras e caracteres especiais."
        );
      }
    }
  };

  _validaAtividade = (status) => {
    if (status == "ativo" || status == "Ativo") {
      return status;
    }
    if (status == "inativo" || status == "Inativo") {
      return status;
    } else {
      throw new Error("Campo obrogatório. Informe se o funcionário está ativo ou inativo.");
    }
  };
}

export default FuncionarioSchema;
