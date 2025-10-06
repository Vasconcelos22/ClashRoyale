var subtitulo = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
subtitulo.textContent = "Meus Pacientes";
titulo.textContent = "Nutri Clash​";

// acessar a tag tr - paciente Paulo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    //selecionar o peso da tag
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    // acessar altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    // calcula o imc
    var imc = peso / (altura * altura);

    //acessa e altera o imc
    //var tdImc = paciente.querySelector(".info-imc");
    //tdImc.textContent = imc;

    //variáveis com valor true
    var pesoValido = true;
    var alturaValda = true; 

    if(pesoValido && alturaValda){
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc.toFixed(2);
    }

    //d+efine limites de peso e altura 
    if(peso <=  0 || peso >= 1000){
    alert("Peso invalido");
    var pesoValido = false;
    tdImc.textContent = "Peso Inválido!";
    paciente.classList.add("campo-invalido");
    }   

    if(altura <= 0 || altura >= 3.00){
    alert("Altura invalida");
    var alturaValda = false;
    tdImc.textContent = "Altura Inválido";
    paciente.classList.add("campo-invalido");
    }
}

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

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = imc;

//adiciona as tags na tela do usuario
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
});

