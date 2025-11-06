//Quando clicar bo titulo, apareça um amensagem 
titulo.addEventListener('click' , mostraMensagem);
function mostraMensagem(){
     alert("Este elemento foi clicado");
}

//acessa o botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//executa os códigos ao clicar no botão
botaoAdicionar.addEventListener('click', function(event){
event.preventDefault();

//acessa o formulario
var formulario = document.querySelector("#form-adiciona");

//captura os valores digitados
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//cria a tag tr
var pacienteTr = document.createElement("tr");

//cria as tagas td
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");
//adiciona valores as tags
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaIMC(peso,altura);

//adiciona as tags na tela do usuario
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
});