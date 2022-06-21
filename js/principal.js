var titulo = document.querySelector('.titulo'); // pego o campo no html
titulo.textContent = 'Aparecida Nutricionista'; // aqui mudo o campo que peguei no html

var paciente = document.querySelector('#primeiro-paciente'); //aqui defino que quero o campo #primeiro-paciente

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

}

if (altura <= 0 || altura >= 3.00) {

    console.log('Altura inválida!');
    alturaValida = false;
    tdImc.textContent = 'Altura inválida!'

}

if (alturaValida && pesoValido) {

    var imc = peso / (altura * altura); //mostrar a conta a ser feita primeira, colocando o parênteses para destacar ao JS. Isso é a ordem dos operadores.
    console.log(imc);
    tdImc.textContent = imc; // aqui é atribuido um novo valor ao imc do campo

}

if (alturaValida === false && pesoValido === false) {

    tdImc.textContent = 'Dados inválidos!';
}