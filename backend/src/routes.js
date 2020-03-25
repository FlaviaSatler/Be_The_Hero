const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {

	// const params = request.body;
	const body = request.body;

	console.log(body)

	return response.json({
		evento: 'Semana OmniStack 11.0',
		aluno: 'Cleber Santos'
	});
});

module.exports = routes;