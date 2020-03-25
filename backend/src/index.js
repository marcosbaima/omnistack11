/**
 * Rota / Recurso
 */

 /**
  * 
  * GET: buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT:Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmentros:
   * 
   * Query Params: Parâmetros nomeados enviadps na rota após "?" (Filtros, Paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */
  /**
   * SQL: MySQL,SQLite, PostgreSQL,Oracle,Microsoft SQL Server
   * NoSQL: MongoDB,CouchDB etc
   */
const express=require('express');
const cors = require('cors'); 
const routes=require('./routes');

const app =express();
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

