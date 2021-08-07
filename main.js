//AULA 1

/*var nome ="Rafael Galliani";
var idade =29;
var idade2 =10;
var frase ="Japao é o melhor time do mundo";*/

//alert("Bemvindo " + nome + " voce tem " + idade + " anos");

//alert(idade + idade2);

/*console.log("Olá " + nome);
console.log("voce tem " + idade + " anos");
console.log(frase.replace("Japao","Brasil"));*/

//alert(frase);
//alert(frase.replace("Japao","Brasil"));

//console.log(frase.toUpperCase());
//console.log(frase.toLocaleLowerCase());

//AULA 2

/* var lista= ["maca", "pera", "uva"];
console.log(lista[2]);

lista.push("banana");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log (lista.join("**"));*/

/*var fruta={nome:"maca", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);*/

/*var frutas = [{nome:"maca", cor:"vermelho"},{nome:"uva", cor:"roxo"}];
console.log (frutas)
console.log(frutas[1].nome);*/


//ESTRUTURA CONDICIONAL
//var idade = 18;
/*
var idade = prompt("Qual sua idade?");
if (idade >=18){
    alert("Voce é maior de idade");
} else {
    alert("Voce é minor de edade");
    }
*/

// LACO DE REPETICAO WHILE

/* var count=1;
while (count<=5) {
    console.log (count);
    alert(count);
    count++;
};*/

// ESTRUTURA DE REPETICAO COM FOR

/*var count;
for (count=0; count <=5; count++){
    alert(count);
};*/

//FUNCOES DATE

/* var d=new Date();
alert (d);
alert(d.getDate());
alert(d.getDay());
alert(d.getMonth());
alert(d.getHours());
alert(d.getFullYear());*/

//var d=new Date();
//console.log("hoje é " + d.getDate() +"/" + d.getMonth());

/*console.log (d);
console.log("hoje é " + d.getDate() +"/" + (d.getMonth()+1));
*/


/*var1 = "Simplicity is the ultimate sophiication. ";
var2 = "Leonardo Da Vinci. ";
console.log(var1 + var2 + 1425 + "-" + 1519);

var test = "HOOOOLAAA";
alert(test);*/

/*var count;
for (count=0; count <=5; count++){
    alert(count);}*/

/*var lista = ["Alemanha", "Inglaterra", "Escocia"];
lista.push("Polonia");
lista.pop("Inglaterra");
alert(lista);*/

/*var trajeto = ["mae", "floresta", "avó"];
console.log(trajeto.join(">"));
console.log(trajeto.toString());*/

/*function soma(n1,n2) {
    return n1+n2;
};
alert(soma(45,10));*/

/*function SETREPLACE(frase,nome, novo_nome) {
    return frase.replace (nome, novo_nome);
};
alert("Vai Brasil");
alert(SETREPLACE("Vai Brasil", "Brasil", "Venezuela"));*/

/*var validar=0;
function VALIDAIDADE(idade) {
    if (idade>=18) {
        validar=true
    } else { 
        validar=false
    }
};

var idade = prompt("Qual sua idade?");
VALIDAIDADE (idade);
alert(validar);*/

/*function clicou() {
    alert ("Obrigado por clicar")
};*/

/*function clicou() {
    document.getElementById("agradecimento");
   console.log(document.getElementById("agradecimento"));
};*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar meu querido";
}
function redireccionar() {
    /*window.open ("https://digitalinnovation.one/");*/
    window.location.href= "https://digitalinnovation.one/";
    
}
function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse Cara!";
}
function voltar() {
    document.getElementById("voltar").innerHTML = "Passa o mouse aqui gatooo!!";
}