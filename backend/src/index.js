const express = require('express');
const routes = require('./routes'); // "./" pra referenciar um arquivo na mesma pasta "../" para voltar uma pasta
const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);


app.listen(3333);
/*
    ROTA: todo o caminho                                    / recurso
    RECURSO: conteudo após a barra   -> ROTA: localhost:3333/users
*/

/**
 * MÉTODOS HTTP
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end (envia pro backend)
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * TIPOS DE PARAMETROS
  * 
  * Query params: Parametros nomeados enviados na rota após o "?" (Filtros, paginação) http://localhost:3333/users?page=2&nome=Guilherme
  * Route Params: Parametros utilizados para identificar recursos  http://localhost:3333/users/1 -> usuario com id 1
  * Request Body: Corpo da requisição, utilizado pra alterar ou criar recursos
  * 
  * Request: Guarda os dados que vem através de uma requisição
  * Response: Retorna uma resposta pro usuário
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, COuchDB ...
   */

/**
 * Driver: SELECT * FROM users
 * Query Builder: tavle('users').select('*').where()  
*/



