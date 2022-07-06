/*
var buscarPaciente = document.querySelector('#buscar-paciente');
buscarPaciente.addEventListener('click', function () {
    console.log('Vou buscar paciente...');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes'); //pega esse link
    xhr.addEventListener('load', function () { // e quando ele carregar exiba a o texto que vier como resposta

        var erroAjax = document.querySelector('#error-ajax');

        if (xhr.status == 200) { //status é o erro que aparece na tela pra o user. Tem o mais comum que é o error 404.
            erroAjax.classList.add('invisivel');
            console.log(erroAjax);
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove('invisivel');
        }
        xhr.send(); // e então, envia      
    })
})
*/

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api-pacientes.herokuapp.com/paci11111entes");

xhr.addEventListener("load", function() {
    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    } else {
        erroAjax.classList.remove("invisivel");
    }
    xhr.send();
})



