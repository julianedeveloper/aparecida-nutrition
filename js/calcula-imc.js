var titulo = document.querySelector('.titulo').textContent = 'Aparecida Nutricionista'; // pego o campo no html
var pacientes = document.querySelectorAll('.paciente'); //aqui defino que quero o campo #primeiro-paciente

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector('.info-peso'); // aqui eu digo que quero do campo paciente o campo info-peso
    var peso = tdPeso.textContent; // aqui eu peço o conteúdo do campo tdPeso
    var tdAltura = paciente.querySelector('.info-altura'); // aqui eu peço do campo paciente o campo info-altura
    var altura =  tdAltura.textContent; // aqui eu exibo o conteúdo do tdAltura
    console.log(altura);
    var pesoValido = validaPeso(peso);
    console.log(pesoValido);
    var alturaValida = validaAltura(altura);
    console.log(alturaValida);
    var tdImc = paciente.querySelector('.info-imc'); // aqui eu defino que quero que ele pegue o campo info-imc
    console.log(tdImc);

    if (!validaPeso) {

        pesoValido = false;
        tdImc.textContent = 'Peso inválido!'
        tdImc.style.fontWeight = "bolder";
        paciente.classList.add("paciente-invalido");

        console.log('Peso Inválido.')

    }

    if (!validaAltura) {

        alturaValida = false;
        tdImc.textContent = 'Altura inválida!'
        tdImc.style.fontWeight = 'bolder';
        paciente.classList.add("paciente-invalido");

        console.log('Altura Inválida.');

    }

    if (alturaValida && pesoValido) {

        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc; // aqui é atribuido um novo valor ao imc do campo e com toFixed defini em (2) que quero, no máximo, dois numeros após a virgula

    }

    if (alturaValida === false && pesoValido === false) {

        tdImc.textContent = 'Dados inválidos!';
        tdImc.style.fontWeight = 'bold';
        tdImc.style.backgroundColor = 'lightcoral';

    }

    function validaPeso (peso) {

        if(peso <= 0 && peso >= 400){
            return true;
        } else {
            return false;
        }
    }

    function validaAltura (altura) {

        if(altura <= 0 || altura <= 3.00){
            return true;
        } else {
            return false;
        }
    }
    
    function calculaImc(peso, altura){

        var imc = 0;
        imc = peso / (altura * altura); // aqui eu sobreescrevi o valor anterior
    
        return imc.toFixed(2); //exibe duas casa depois da vírgula

    }

    
}

