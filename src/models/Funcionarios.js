class Funcionario {
  constructor(id, nome, funcao, email, senha, status, demissao) {
    this.id = id;
    this.nome = nome;
    this.email = this._validaEmail(email);
    this.funcao = funcao;
    this.senha = this._validaSenha(senha);
    this.status = status;
    this.admissao = new Date().toLocaleString();
    this.demissao = demissao;
  }

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
}

export default Funcionario;
