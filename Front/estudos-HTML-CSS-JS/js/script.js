//-------------------------------------------------Horas em js------------------------------------------------------------
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
    greeting = "Good evening!";
}else if (hourNow > 12){
    greeting = "Good Afternoon!";
}else if (hourNow > 0){
    greeting = "Good morning!";
}else{
    greeting = "Welcome!";
}

var el = document.getElementById("hora");
el.textContent = greeting;

//-----------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------Variaveis e tipos-------------------------------------------------------
let nome; //Cria uma variavel com valor indefinido
let disciplina = null; // Cria uma variável vazia
let texto = "Este é um exemplo"; // Cria uma variável com um valor

let meuNome = "luiz Henrique"; // {string} = Variaveis de texto. elas devem ser representadas entre aspas
let minhaIdade = 18; // {int} = números inteiros
let valorProdutos = 5.35; // {float} = Numeros flutuantes com casas decimais
let namorando = true; // {booleanos} = Que recebe os valores falso ou verdadeiro

let linguagens = ["HTML", "CSS", "JAVA SCRIPT"] // {Arrays} = Conjunto de elementos

//-----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------Objetos-------------------------------------------------------------

let aluno = {
    nome: "Luiz",
    idade: 18,
    estadoCivil: "solteiro",
    estado: "Estudando",
    aviso: function(){
        alert("!!!Não usar alert por ser utrapassado!!!")
    }
}

console.log(aluno.nome);
aluno.aviso()

//------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------Manipulando Textos e Números------------------------------------------------

//---Para mudar o tipo da variavel para int ou float utiliza {parse-int ou float-(nome da variavel)}---
let numFloat = 123.456
console.log(parseInt(numFloat))

let numString = "123.456"
console.log(parseFloat(numString))

//---Para mudar o tipo da variavel para string utiliza {toString(nome da variavel)}---

let nmFloat = 123.456
console.log(toString(nmFloat))

//---Para conferir o conversão dos valores utiliza o verificador { typeof }
let nmint = 10
let nuString = nmint.toString
let verificar = typeof nmString
console.log(verificar);

//------------------------------------------------------------------------------------------------------------------------