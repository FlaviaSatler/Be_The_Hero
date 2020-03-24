const express = require('express');

const app = express();

app.get('/', (request, response) => {
  //   return response.send('Hello Express!');
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Flávia Satler'
  });
});

app.listen(3333);
