const express = require('express');

const app = express();

app.use(express.json());

/**
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.post('/users', (request, response) => {

  // const params = request.body;
  const body = request.body;

  console.log(body)

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Flávia Satler'
  });
});

app.listen(3333);
