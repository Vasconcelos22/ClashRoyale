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
    var imc = calcularIMC(peso, altura);

    //acessa e altera o imc
    //var tdImc = paciente.querySelector(".info-imc");
    //tdImc.textContent = imc;

    //variáveis com valor true
    var pesoValido = true;
    var alturaValda = true; 

    if(pesoValido && alturaValda){
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = calcularIMC(peso, altura);
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

//Quando clicar no titulo, apareça um amensagem 
titulo.addEventListener('click' , mostraMensagem);
function mostraMensagem(){
     alert("Este elemento foi clicado");
}

function calcularIMC(peso, altura){
    var imc = 0 
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}


