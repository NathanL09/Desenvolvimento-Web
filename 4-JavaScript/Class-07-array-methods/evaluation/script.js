// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo: String, Number, Boolean, Function, Array, Object

const name = "nathan"
const num = 18/2
const number2 = 2 >= 4
const F = 123
const A = [
    {name: "nathan"},
    {name: "laisa"},
    {name: "franci"},
];
const O = {age: 12}

console.log(name);
console.log(num);
console.log(number2);
console.log(F);
console.log(A);
console.log(O);


// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

const n1 = 12; 
const n2 = 4; 

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);

const A1 = 12;
const B1 = 3
console.log(A1 ** B1);

let sqrt = 144
console.log(Math.sqrt(sqrt));



// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.

function average (g1, g2) {
    return (g1 + g2) / 2
}

const a = average(9, 7)
console.log(a);


// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.



// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.


// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:


// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h


// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa
// const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const newSalary = 