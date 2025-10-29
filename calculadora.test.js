const {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  resto,
  potenciacao,
  raizQuadrada
} = require('./calculadora');

// Testes para a função soma 
describe('soma', () => {
  test('deve somar dois números positivos', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('deve somar um número positivo e um negativo', () => {
    expect(soma(5, -2)).toBe(3);
  });
});

// Testes para a função subtracao
describe('subtracao', () => {
  test('deve subtrair dois números', () => {
    expect(subtracao(5, 3)).toBe(2);
  }); 
});

// Testes para a função multiplicacao
describe('multiplicacao', () => {
  test('deve multiplicar dois números', () => {
    expect(multiplicacao(4, 3)).toBe(12);
  });
}); 

// Testes para a função divisao
describe('divisao', () => {
  test('deve dividir dois números', () => {
    expect(divisao(10, 2)).toBe(5);
  });
  test('deve lançar erro ao dividir por zero', () => {
    expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida.");
  });
});

// Testes para a função resto
describe('resto', () => {
  test('deve retornar o resto da divisão de dois números', () => {
    expect(resto(10, 3)).toBe(1);
  });
  test('deve lançar erro ao calcular o resto da divisão por zero', () => {
    expect(() => resto(10, 0)).toThrow("Divisão por zero não é permitida.");
  });
}); 

// Testes para a função potenciacao
describe('potenciacao', () => {
  test('deve calcular a potência de um número', () => {
    expect(potenciacao(2, 3)).toBe(8);
  });
});

// Testes para a função raizQuadrada 
describe('raizQuadrada', () => {
  test('deve calcular a raiz quadrada de um número positivo', () => {
    expect(raizQuadrada(9)).toBe(3);
  });
  test('deve lançar erro ao calcular a raiz quadrada de número negativo', () => {
    expect(() => raizQuadrada(-4)).toThrow("Não é possível calcular a raiz quadrada de número negativo.");
  });
});

