var paciente = document.querySelector("h2");
			paciente.textContent = "Meus Pacientes";
			var paciente = document.querySelector("h1");
			paciente.textContent = "Nutri Clash​";
            
            // acessar a tag tr - paciente Paulo
            var paciente = document.querySelector("#primeiro-paciente");
            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;
            
            // acessar altura
            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;
            
            // calcula o imc
            var imc = peso / (altura * altura);

            //acessa e altera o imc
            var tdImc = paciente.querySelector(".info-imc");
            tdImc.textContent = imc;

            if(peso < 0 || peso > 1000){
                alert("Peso invalido");
            }
            if(altura < 0 || altura > 3.00){
                alert("Altura invalida");
            }