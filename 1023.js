var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var i = 0;
var cidade = 1;

function printConsumo(casas) {
	var aux = "";
	for (var i = 0; i < casas.length; i++) {
		aux += `${casas[i][0]}-${Math.floor(casas[i][1] / casas[i][0])}`;
		if (i < casas.length - 1)
			aux += ' ';
	}
	return aux;
}

while (lines[i] != 0) {
	var size = parseInt(lines[i]);
	var casas = [];
	console.log(`Cidade# ${cidade}:`);
	i++;
	for (var j = 0; j < size; j++) {
		casas.push(lines[i].split(' '));
		i++;
	}
	for (var j = 0; j < casas.length; j++) {
		casas[j][0] = parseInt(casas[j][0]);
		casas[j][1] = parseInt(casas[j][1]);
	}
	casas.sort((a, b) => (a[1] / a[0]) - (b[1] / b[0]));
	console.log(`${printConsumo(casas)}\n`);
	cidade++;
}
