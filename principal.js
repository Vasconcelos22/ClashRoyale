//muda o nome a paritr do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";  
var Enzin = document.querySelector(".titulo");
Enzin.textContent = "Enzin nutriçao";
//acessar a tag tr
var Pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < Pacientes.length; i++){
 var paciente = Pacientes [i];
   //seleciona o peso
var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;
            
var tdaltura = paciente.querySelector(".info-altura")
var altura = tdaltura.textContent;
            
//calcula o imc
var imc = peso / (altura * altura);
//váriaveis com valor true
var pesoValido = true;
var alturaValida = true; 
//define limites de peso e altura
if(pesoValido && alturaValida){
// acessa e altera o imc
var tdimc = paciente.querySelector(".info-imc");
tdimc.textContent = imc.toFixed(2);
 }
 if(peso < 0 || peso > 1000){
var pesoValido = false;
tdimc.textContent = "peso invalido"
paciente.classList.add("campo-invalido");
}
if(altura <= 0 || altura >= 3.00){
var alturaValida = false;
tdimc.textContent = "altura invalida";
paciente.classList.add("campo-invalido");
}
}
//quando clicar no titulo, apareça uma mensagem
Enzin
addEventListener('click', mostraMensagem);

function mostraMensagem(){
        alert("Este elemento foi clicado");
}
//acessa o botao
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//executa os codigos ao clicar no botao
botaoAdicionar.addEventListener('click', function(event){
        event.preventDefault();

//acessa o formulario
var formulario = document.querySelector("#form-adiciona");

//captura os valores
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//crai a tag <tr>
var pacienteTr = document.createElement("tr");
//cria a tag <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = imc;

});

