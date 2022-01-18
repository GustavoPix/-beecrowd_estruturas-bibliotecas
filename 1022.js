var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

function soma(dados) {
	var ladoA = dados[0] * dados[6] + dados[4] * dados[2];
	var ladoB = dados[2] * dados[6];

	return `${ladoA}/${ladoB} = ${simplificacao(ladoA, ladoB)}`;
}

function subtracao(dados) {
	var ladoA = dados[0] * dados[6] - dados[4] * dados[2];
	var ladoB = dados[2] * dados[6];

	return `${ladoA}/${ladoB} = ${simplificacao(ladoA, ladoB)}`;
}

function multiplicacao(dados) {
	var ladoA = dados[0] * dados[4];
	var ladoB = dados[2] * dados[6];

	return `${ladoA}/${ladoB} = ${simplificacao(ladoA, ladoB)}`;
}

function divisao(dados) {
	var ladoA = dados[0] * dados[6];
	var ladoB = dados[4] * dados[2];

	return `${ladoA}/${ladoB} = ${simplificacao(ladoA, ladoB)}`;
}

function simplificacao(ladoA, ladoB) {
	var d = 2;
	while (d <= ladoA || d <= ladoB) {
		if (ladoA % d === 0 && ladoB % d === 0) {
			ladoA /= d;
			ladoB /= d;
		}
		else
			d++;
	}
	return `${ladoA}/${ladoB}`;
}

function tda(expressao) {
	var dados = expressao.split(' ');
	for (var i = 0; i < dados.length; i++) {
		if (i % 2 === 0)
			dados[i] = parseInt(dados[i]);
	}

	switch (dados[3]) {
		case '+':
			return soma(dados);
		case '-':
			return subtracao(dados);
		case '*':
			return multiplicacao(dados);
		case '/':
			return divisao(dados);

	}
}

for (var i = 0; i < parseInt(lines[0]); i++) {
	console.log(tda(lines[i + 1]));
}
