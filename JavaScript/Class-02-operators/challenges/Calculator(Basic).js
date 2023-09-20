// Solicite 2 números e apresente:
// As operaçôes e os resultados escrevendo no documento (função write).
// Crie constantes e atribua as operações de:
// +, -, *, /, %, ** e raiz para os números solicitados.

const number1 = (prompt("Digite o primeiro número para calcular: "))
const number2 = (prompt("Agora digite o segundo número: "))

alert(`Os números são ${number1} e ${number2}!`)

const add = number1 + number2
const sub = number1 - number2
const mul = number1 * number2
const div = number1 / number2
const rem = number1 % number2
const exp = number1 ** number2
const sqr = number1 **  (1 / number2)

document.write (`A soma de ${number1} e ${number2} é de: ${add} <br>`);
document.write (`A subtração de ${number1} e ${number2} é de: ${sub} <br>`);
document.write (`A multiplicação de ${number1} e ${number2} é de: ${mul} <br>`);
document.write (`A divisão de ${number1} e ${number2} é de: ${div} <br>`);
document.write (`O resto da divisão de ${number1} e ${number2} é de: ${rem} <br>`);
document.write (`A potência de ${number1} elevado a ${number2} é de: ${exp} <br>`);
document.write (`A raiz ${number1} de ${number2} é de: ${sqr} <br>`);