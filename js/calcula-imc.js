var titulo = document.querySelector('.titulo'); // pego o campo no html
titulo.textContent = 'Aparecida Nutricionista'; // aqui mudo o campo que peguei no html

var pacientes = document.querySelectorAll('.paciente'); //aqui defino que quero o campo #primeiro-paciente
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    console.log(paciente);

    var tdPeso = paciente.querySelector('.info-peso'); // aqui eu digo que quero do campo paciente o campo info-peso
var peso = tdPeso.textContent; // aqui eu peço o conteúdo do campo tdPeso
console.log(peso);

var tdAltura = paciente.querySelector('.info-altura'); // aqui eu peço do campo paciente o campo info-altura
var altura =  tdAltura.textContent; // aqui eu exibo o conteúdo do tdAltura
console.log(altura);

var pesoValido = true;
var alturaValida = true;

var tdImc = paciente.querySelector('.info-imc'); // aqui eu defino que quero que ele pegue o campo info-imc e atribua o valor após o cálculo

if (peso <= 0 || peso >= 1000) {

    console.log('Peso inválido!');
    pesoValido = false;
    tdImc.textContent = 'Peso inválido!'
    tdImc.style.fontWeight = "bolder";

    paciente.classList.add("paciente-invalido");

}

if (altura <= 0 || altura >= 3.00) {

    console.log('Altura inválida!');
    alturaValida = false;
    tdImc.textContent = 'Altura inválida!'

    paciente.classList.add("paciente-invalido");

}

if (alturaValida && pesoValido) {

    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; // aqui é atribuido um novo valor ao imc do campo e com toFixed defini em (2) que quero, no máximo, dois numeros após a virgula

}

if (alturaValida === false && pesoValido === false) {

    tdImc.textContent = 'Dados inválidos!';
    tdImc.style.fontWeight = 'bold';
    tdImc.style.backgroundColor = 'lightcoral';
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

}

