import sqlite3 from 'sqlite3'
sqlite3.verbose()

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'

const db = new sqlite3.Database(filePath);

//==== Funcionários
const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CARGO" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64),
    "STATUS" varchar(64),
    "ADMISSAO" varchar(64)
  );`;

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS (ID, NOME, CARGO, EMAIL, SENHA, STATUS, ADMISSAO)
VALUES 
    (1, 'Maria Andrade', 'tatuador', 'maria.andrade@rosemaryss.com.br', '*******', 'Ativo', '22/01/2002'),
    (2, 'Roberto Marinho', 'tatuador', 'roberto.marinho@rosemaryss.com.br', '********', 'Ativo', '22/01/2002'),
    (3, 'Bianca Ferreira', 'perfurador','bianca.ferreira@rosemaryss.com.br', '********', 'Ativo', '22/01/2002')
`

function criaTabelaFunc() {
    db.run(FUNCIONARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de funcionários.");
    });
}


function populaTabelaFunc() {
    db.run(ADD_FUNCIONARIOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de funcionários.");
    });
}

db.serialize( ()=> {
    criaTabelaFunc();
    populaTabelaFunc();
});