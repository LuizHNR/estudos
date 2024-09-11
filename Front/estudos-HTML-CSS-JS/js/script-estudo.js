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
        alert("!!!Não use alert por ser utrapassado!!!")
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
console.log(parseFloat(numString));

//---Para mudar o tipo da variavel para string utiliza {nomeDaVariavel.toString() }---

let nmFloat = 123.456
console.log(nmFloat.toString());

//---Para conferir o conversão dos valores utiliza o verificador { typeof }
let nmint = 10
let nmString = nmint.toString()
let verificar = typeof nmString
console.log(verificar);

//--Para substituir um trecho do texto utiliza { replace() }
let txt = "Estão chegando as provas"
console.log(txt.replace("provas", "avalições"))

//--O método {toUpperCase()} transforma tudo em maiuscula e { toLowerCase() } transforma em minuscula
let txt2 = "Estão chegando as provas"
console.log(txt2.toUpperCase);
console.log(txt2.toLowerCase);

//------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------IF ELSE IF ELSE--------------------------------------------------------


//-- && = 3, || = ou
function idade(){
    let idade = 18
    if(idade >= 5 && idade <= 12){
        document.write("É uma criança")
    }else if(idade <= 17){
        document.write("É um adolescente")
    }else if(idade <= 29){
        document.write("É um jovem")
    }else{
        document.write("É um adulto")
    }
}


//------------------------------------------------------------------------------------------------------------------------