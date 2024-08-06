// 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
var nome = prompt("Digite seu nome:");
if (nome.length > 5) {
    console.log("Seu nome tem mais de 5 caracteres.");
}
else {
    console.log("Seu nome tem 5 ou menos caracteres.");
}
// 21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada.
var estadoCivil = prompt("Digite seu estado civil:");
if (estadoCivil.toLowerCase() === "casado" ||
    estadoCivil.toLowerCase() === "casada") {
    console.log("Você é casado(a)");
}
else if (estadoCivil.toLowerCase() === "solteiro" ||
    estadoCivil.toLowerCase() === "solteira") {
    console.log("Você é solteiro(a)");
}
else {
    console.log("Voc\u00EA \u00E9 ".concat(estadoCivil));
}
// 22. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e exiba o resultado.
var baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"));
var alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
var areaRetangulo = baseRetangulo * alturaRetangulo;
console.log("A \u00E1rea do ret\u00E2ngulo \u00E9: ".concat(areaRetangulo));
// 23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S".
var cidade = prompt("Digite sua cidade:");
if (cidade[0].toLowerCase() === "s") {
    console.log("Sua cidade começa com a letra S.");
}
else {
    console.log("Sua cidade não começa com a letra S.");
}
// 24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
var num1 = parseFloat(prompt("Digite o primeiro número decimal:"));
var num2 = parseFloat(prompt("Digite o segundo número decimal:"));
var restoDivisao = num1 % num2;
console.log("O resto da divis\u00E3o \u00E9: ".concat(restoDivisao));
// 25. Solicite ao usuário um número decimal e converta-o em um número inteiro.
var numDecimal = parseFloat(prompt("Digite um número decimal:"));
var numInteiro = Math.floor(numDecimal);
console.log("O n\u00FAmero inteiro \u00E9: ".concat(numInteiro));
// 26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o novamente para uma string antes de exibi-lo.
var strNum = prompt("Digite um número inteiro:");
var numSomado = parseInt(strNum) + 10;
console.log("O n\u00FAmero somado \u00E9: ".concat(numSomado.toString()));
// 27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.
var data = prompt("Digite uma data no formato dd/mm/aaaa:");
var _a = data.split("/").map(function (item) { return parseInt(item); }), dia = _a[0], mes = _a[1], ano = _a[2];
console.log("Dia: ".concat(dia, ", M\u00EAs: ").concat(mes, ", Ano: ").concat(ano));
// 28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma mensagem completa.
var cidadeNome = prompt("Digite o nome da cidade:");
var estadoNome = prompt("Digite o nome do estado:");
console.log("Voc\u00EA mora em ".concat(cidadeNome, ", ").concat(estadoNome, "."));
// 29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de boas-vindas.
var anoNascimento = prompt("Digite seu ano de nascimento:");
console.log("Bem-vindo ao nosso programa, nascido em ".concat(anoNascimento, "!"));
// 30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única string, separando-os com um espaço.
var numeroInteiro = prompt("Digite um número inteiro:");
var texto = prompt("Digite um texto:");
console.log("".concat(numeroInteiro, " ").concat(texto));
// 31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto, adicionando o símbolo de moeda da sua escolha.
var produtoNome = prompt("Digite o nome do produto:");
var produtoPreco = prompt("Digite o preço do produto:");
console.log("".concat(produtoNome, " custa R$").concat(produtoPreco));
// 32. Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.
var numeroDobro = parseInt(prompt("Digite um número inteiro:"));
console.log("O dobro do n\u00FAmero \u00E9: ".concat(numeroDobro * 2));
// 33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.
var email = prompt("Digite seu endereço de e-mail:");
console.log("Obrigado por se cadastrar, ".concat(email));
// 34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente (divisão inteira) entre eles.
var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
console.log("Soma: ".concat(numero1 + numero2));
console.log("Diferen\u00E7a: ".concat(numero1 - numero2));
console.log("Produto: ".concat(numero1 * numero2));
console.log("Quociente: ".concat(Math.floor(numero1 / numero2)));
// 35. Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.
var baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
var alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("A \u00E1rea do tri\u00E2ngulo \u00E9: ".concat(areaTriangulo));
// 36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
var raio = parseFloat(prompt("Digite o raio da circunferência:"));
var perimetro = 2 * Math.PI * raio;
console.log("O per\u00EDmetro da circunfer\u00EAncia \u00E9: ".concat(perimetro));
// 37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o perímetro do retângulo.
var baseRet = parseFloat(prompt("Digite a base do retângulo:"));
var alturaRet = parseFloat(prompt("Digite a altura do retângulo:"));
var perimetroRet = 2 * (baseRet + alturaRet);
console.log("O per\u00EDmetro do ret\u00E2ngulo \u00E9: ".concat(perimetroRet));
// 38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.
var numA = parseFloat(prompt("Digite o primeiro número decimal:"));
var numB = parseFloat(prompt("Digite o segundo número decimal:"));
var numC = parseFloat(prompt("Digite o terceiro número decimal:"));
var media = (numA + numB + numC) / 3;
console.log("A m\u00E9dia aritm\u00E9tica \u00E9: ".concat(media));
// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).
var idade = parseInt(prompt("Digite sua idade:"));
console.log("Voc\u00EA j\u00E1 viveu ".concat(idade * 12, " meses e ").concat(idade * 365, " dias."));
// 40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.
var valorReais = parseFloat(prompt("Digite o valor em reais:"));
var cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));
var valorDolares = valorReais / cotacaoDolar;
console.log("O valor em d\u00F3lares \u00E9: ".concat(valorDolares.toFixed(2)));
// 41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.
var numeroArredondar = parseFloat(prompt("Digite um número decimal:"));
console.log("O n\u00FAmero arredondado \u00E9: ".concat(Math.round(numeroArredondar)));
// 42. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) * n3.
var numX = parseInt(prompt("Digite o primeiro número inteiro:"));
var numY = parseInt(prompt("Digite o segundo número inteiro:"));
var numZ = parseInt(prompt("Digite o terceiro número inteiro:"));
console.log("O resultado da opera\u00E7\u00E3o (n1 + n2) * n3 \u00E9: ".concat((numX + numY) * numZ));
// 43. Peça ao usuário que digite uma temperatura
