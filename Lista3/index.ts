// 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
let nome: string = prompt("Digite seu nome:");
if (nome.length > 5) {
  console.log("Seu nome tem mais de 5 caracteres.");
} else {
  console.log("Seu nome tem 5 ou menos caracteres.");
}

// 21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada.
let estadoCivil: string = prompt("Digite seu estado civil:");
if (
  estadoCivil.toLowerCase() === "casado" ||
  estadoCivil.toLowerCase() === "casada"
) {
  console.log("Você é casado(a)");
} else if (
  estadoCivil.toLowerCase() === "solteiro" ||
  estadoCivil.toLowerCase() === "solteira"
) {
  console.log("Você é solteiro(a)");
} else {
  console.log(`Você é ${estadoCivil}`);
}

// 22. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e exiba o resultado.
let baseRetangulo: number = parseFloat(prompt("Digite a base do retângulo:"));
let alturaRetangulo: number = parseFloat(
  prompt("Digite a altura do retângulo:")
);
let areaRetangulo: number = baseRetangulo * alturaRetangulo;
console.log(`A área do retângulo é: ${areaRetangulo}`);

// 23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S".
let cidade: string = prompt("Digite sua cidade:");
if (cidade[0].toLowerCase() === "s") {
  console.log("Sua cidade começa com a letra S.");
} else {
  console.log("Sua cidade não começa com a letra S.");
}

// 24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
let num1: number = parseFloat(prompt("Digite o primeiro número decimal:"));
let num2: number = parseFloat(prompt("Digite o segundo número decimal:"));
let restoDivisao: number = num1 % num2;
console.log(`O resto da divisão é: ${restoDivisao}`);

// 25. Solicite ao usuário um número decimal e converta-o em um número inteiro.
let numDecimal: number = parseFloat(prompt("Digite um número decimal:"));
let numInteiro: number = Math.floor(numDecimal);
console.log(`O número inteiro é: ${numInteiro}`);

// 26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o novamente para uma string antes de exibi-lo.
let strNum: string = prompt("Digite um número inteiro:");
let numSomado: number = parseInt(strNum) + 10;
console.log(`O número somado é: ${numSomado.toString()}`);

// 27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.
let data: string = prompt("Digite uma data no formato dd/mm/aaaa:");
let [dia, mes, ano] = data.split("/").map((item) => parseInt(item));
console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);

// 28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma mensagem completa.
let cidadeNome: string = prompt("Digite o nome da cidade:");
let estadoNome: string = prompt("Digite o nome do estado:");
console.log(`Você mora em ${cidadeNome}, ${estadoNome}.`);

// 29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de boas-vindas.
let anoNascimento: string = prompt("Digite seu ano de nascimento:");
console.log(`Bem-vindo ao nosso programa, nascido em ${anoNascimento}!`);

// 30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única string, separando-os com um espaço.
let numeroInteiro: string = prompt("Digite um número inteiro:");
let texto: string = prompt("Digite um texto:");
console.log(`${numeroInteiro} ${texto}`);

// 31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto, adicionando o símbolo de moeda da sua escolha.
let produtoNome: string = prompt("Digite o nome do produto:");
let produtoPreco: string = prompt("Digite o preço do produto:");
console.log(`${produtoNome} custa R$${produtoPreco}`);

// 32. Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.
let numeroDobro: number = parseInt(prompt("Digite um número inteiro:"));
console.log(`O dobro do número é: ${numeroDobro * 2}`);

// 33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.
let email: string = prompt("Digite seu endereço de e-mail:");
console.log(`Obrigado por se cadastrar, ${email}`);

// 34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente (divisão inteira) entre eles.
let numero1: number = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2: number = parseInt(prompt("Digite o segundo número inteiro:"));
console.log(`Soma: ${numero1 + numero2}`);
console.log(`Diferença: ${numero1 - numero2}`);
console.log(`Produto: ${numero1 * numero2}`);
console.log(`Quociente: ${Math.floor(numero1 / numero2)}`);

// 35. Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.
let baseTriangulo: number = parseFloat(prompt("Digite a base do triângulo:"));
let alturaTriangulo: number = parseFloat(
  prompt("Digite a altura do triângulo:")
);
let areaTriangulo: number = (baseTriangulo * alturaTriangulo) / 2;
console.log(`A área do triângulo é: ${areaTriangulo}`);

// 36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
let raio: number = parseFloat(prompt("Digite o raio da circunferência:"));
let perimetro: number = 2 * Math.PI * raio;
console.log(`O perímetro da circunferência é: ${perimetro}`);

// 37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o perímetro do retângulo.
let baseRet: number = parseFloat(prompt("Digite a base do retângulo:"));
let alturaRet: number = parseFloat(prompt("Digite a altura do retângulo:"));
let perimetroRet: number = 2 * (baseRet + alturaRet);
console.log(`O perímetro do retângulo é: ${perimetroRet}`);

// 38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.
let numA: number = parseFloat(prompt("Digite o primeiro número decimal:"));
let numB: number = parseFloat(prompt("Digite o segundo número decimal:"));
let numC: number = parseFloat(prompt("Digite o terceiro número decimal:"));
let media: number = (numA + numB + numC) / 3;
console.log(`A média aritmética é: ${media}`);

// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).
let idade: number = parseInt(prompt("Digite sua idade:"));
console.log(`Você já viveu ${idade * 12} meses e ${idade * 365} dias.`);

// 40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.
let valorReais: number = parseFloat(prompt("Digite o valor em reais:"));
let cotacaoDolar: number = parseFloat(prompt("Digite a cotação do dólar:"));
let valorDolares: number = valorReais / cotacaoDolar;
console.log(`O valor em dólares é: ${valorDolares.toFixed(2)}`);

// 41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.
let numeroArredondar: number = parseFloat(prompt("Digite um número decimal:"));
console.log(`O número arredondado é: ${Math.round(numeroArredondar)}`);

// 42. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) * n3.
let numX: number = parseInt(prompt("Digite o primeiro número inteiro:"));
let numY: number = parseInt(prompt("Digite o segundo número inteiro:"));
let numZ: number = parseInt(prompt("Digite o terceiro número inteiro:"));
console.log(
  `O resultado da operação (n1 + n2) * n3 é: ${(numX + numY) * numZ}`
);

// 43. Peça ao usuário que digite uma temperatura
