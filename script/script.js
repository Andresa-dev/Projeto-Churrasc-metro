let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
  // Armazena os valores digitados pelo usuário nos inputs acima
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  // Calcula a quantidade de carne a ser comprada para o churrasco de acordo com as regras de negócio
  let quantidadeCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);

  // Calcula a quantidade de cerveja a ser comprada para o churrasco de acordo com as regras de negócio
  let quantidadeCerveja = cervejaPorPessoa(duracao) * adultos;

  // Calcula a quantidade de bebidas a serem compradas para o churrasco de acordo com as regras de negócio
  let quantidadeBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

  // Mostra os valores finais de acordo com os resultados de cada cálculo acima
  resultado.innerHTML = `<p>${quantidadeCarne / 1000} kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(quantidadeCerveja / 355)} latas de 355ml de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(quantidadeBebidas / 2000)} garrafas de 2 litros de Bebidas</p>`
}

// Verifica a regra de negócio para o consumo de carne por pessoa
function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

// Verifica a regra de negócio para o consumo de cerveja por pessoa
function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

// Verifica a regra de negócio para o consumo de bebidas por pessoa
function bebidasPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}