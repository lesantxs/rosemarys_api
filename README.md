# Rosemary’s Tattoo Studio API 🌹

![Rosemary](https://user-images.githubusercontent.com/93748083/160220752-b243e841-9f49-4b48-9b33-7f54486bcd96.png)

## Introdução

Projeto de encerramento de módulo 4 do [Resilia Educação](https://www.resilia.com.br/). Consiste na montagem de uma API REST, baseada no tema escolhido pelo grupo e a distribuição das entidades entre os integrantes. 

Esta API se foca na entidade Funcionários, contendo seus dados e sendo possível realizar operações CRUD.

---

## Pré-requistos

- [Node.js](https://nodejs.org/en/) v.16.14.0
- NPM v.8.3.1

## Pacotes utilizados

- [Express](https://www.npmjs.com/package/express) v.4.17.3
- [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
- [SQLite](https://www.npmjs.com/package/sqlite3) v.5.0.0
- [Cors](https://www.npmjs.com/package/cors) v.2.8.5
- [Bcrypt](https://www.npmjs.com/package/bcrypt) v.5.0.1

---

## Instalação da aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

``` 
git clone git@github.com/lesantxs/rosemarys_api.git 
```

Entrando na pasta:

```
cd rosemarys_api
```

Instalando os pacotes:

```
npm install
```

Criando e populando banco de dados:

```
npm run database
```

Iniciando o servidor:

```
npm start
```

---

## **Rotas implementadas**

*Obs.: servidor http://localhost:3000/*

### **Funcionário**

- **GET /funcionarios** 

    Retorna os dados de todos os funcionários.
    
    Schema da resposta:
    
    ```
    {
        funcionarios: [
            {
                "id": <String>,
                "nome": <String>,
                "cargo": <String>,
                "email": <String>,
                "senha": <String>,
                "status": <String>,
                "admissao": <String>
            }
        ],
        erro: <Boleano>
    }
    ```
    
- **GET /funcionario/id/{id}**

    Retorna os dados de somente um funcionário.
    
    Schema da resposta:
    
    ```
    {
        funcionarios: [
            {
                "id": <String>,
                "nome": <String>,
                "cargo": <String>,
                "email": <String>,
                "senha": <String>,
                "status": <String>,
                "admissao": <String>
            }
        ],
        erro: <Boleano>
    }
    ```
    
- **GET /funcionario/email/{email}**

    Retorna os dados de somente um funcionário.
    
    Schema da resposta:
    
    ```
    {
        funcionarios: [
            {
                "id": <String>,
                "nome": <String>,
                "cargo": <String>,
                "email": <String>,
                "senha": <String>,
                "status": <String>,
                "admissao": <String>
            }
        ],
        erro: <Boleano>
    }
    ```
    
- **POST /funcionario**
    
    Adiciona dados de um novo funcionário.
    
    Schema da requisição:
    
    ```
    {
       "nome": <String>,
       "cargo": <String>,
       "email": <String>,
       "senha": <String>,
       "status": <String>
    }
    ```
    
    Schema da resposta:
    
    ```
    {
        mensagem: <String>
        funcionario: {
            "nome": <String>,
            "cargo": <String>,
            "email": <String>,
            "senha": <String>,
            "status": <String>
        },
        erro: <Boleano>
    }
    ```
    
- **PUT /funcionario/funcionario/{id}**
    
    Atualiza os dados de um funcionário.    
    
    Schema da requisição:
    
    ```
    {
        "nome": <String>,
        "cargo": <String>,
        "email": <String>,
        "senha": <String>,
        "status": <String>
    }
    ```
    
    Schema da resposta:
    
    ```
    {
        mensagem: <String>
        funcionario: {
            "nome": <String>,
            "cargo": <String>,
            "email": <String>,
            "senha": <String>,
            "status": <String>
        }
        erro: <Boleano>
    }
    ```
    
- **DELETE /funcionario/id/{id}**

    Deleta os dados de um funcionário. 
    
    Schema da resposta:
    
    ```
    {
        mensagem: <String>
        erro: <Boleano>
    }
    ```
    
---

## Elaboração

Projeto realizado Letícia Santos do Carmo

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardo-chaves-b6544b229/)](https://www.linkedin.com/in/let%C3%ADcia-santos-772358225/)

## Confira também

[API Agenda](https://github.com/LeoAChaves/Rosemary_API)

[API Estoque](https://github.com/thaihc/Rosemarys_API_Estoque)

[API Portifólio](https://github.com/alvesarah/rosemarys_api)



