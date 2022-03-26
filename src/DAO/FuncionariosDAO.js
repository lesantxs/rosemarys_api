class FuncionarioDAO{
    constructor(db){
        this.db = db
    }

    pegaTodosFuncionarios = ()=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM FUNCIONARIOS', (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })
    }

    pegaUmFuncionario = (email)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM FUNCIONARIOS WHERE EMAIL = ?',
            email,
            (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })

    }

    pegaUmFuncionarioId = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM FUNCIONARIOS WHERE ID = ?',
            id,
            (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })

    }

    insereFuncionario = (novoFuncionario) =>{

        return new Promise((resolve, reject)=>{
            this.db.run("INSERT INTO FUNCIONARIOS(NOME, CARGO, EMAIL, SENHA, STATUS, ADMISSAO) VALUES (?, ?, ?, ?, ?, ?)",
                novoFuncionario.nome, novoFuncionario.cargo, novoFuncionario.email, novoFuncionario.senha, novoFuncionario.status, novoFuncionario.admissao,
                (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(`Funcionário ${novoFuncionario.nome} inserido com sucesso`)
                }
            })
        })

    }

    deletaFuncionario = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM FUNCIONARIOS WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(`Funcionário de id ${id} deletado com sucesso`)
                }
            })
        })
    }

    atualizaFuncionario = (id, funcionario)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE FUNCIONARIOS SET NOME = ?, CARGO = ?, EMAIL = ?, SENHA = ?, STATUS = ?, ADMISSAO = ? WHERE ID = ?',
            funcionario.nome, funcionario.cargo, funcionario.email, funcionario.senha, funcionario.status, funcionario.admissao,
            id,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(`Funcionário de id ${id} atualizado com sucesso`)
                }
            })
        })
    }
}

export default FuncionarioDAO