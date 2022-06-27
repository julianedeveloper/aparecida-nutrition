var botaoAdicionar = document.querySelector('#adicionar-paciente'); // aqui eu adiciono paciente.
botaoAdicionar.addEventListener('click', function(event) { //essa função é anônima
    //SEGURA UMA AÇÃO PADRÃO (COMO POR EXEMPLO, LIMPAR O FORMULÁRIO AO CLICAR NO BOTÃO ADICIONAR) PARA QUE EU ATRIBUA UMA NOVA.
    event.preventDefault();

var form = document.querySelector("#form-adiciona"); //aqui eu mstro o quero do mundo html para executar essa função anônima.

    //abaixo vou pegar cada input (campo do form, usando o que foi atribuido em name) do form e pedir pra exibir o valor deles com o '.value'.
    //PEGAR DADOS DO FORM
var paciente = obtemPacienteDoFormulario(form);
var pacienteTr = montaTr(paciente); 

 //COLOCANCO O TR (LINHA) DENTRO DA TABELA QUE JÁ HAVIA NO FORM
var tabela = document.querySelector('#tabela-pacientes').appendChild(pacienteTr);

form.reset();

})

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome:form.nome.value,  // captura nome do form
        peso: form.peso.value, // captura peso do form
        altura:form.altura.value, // captura altura do form
        gordura:form.gordura.value, // captura gordura do form
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

// CRIAR TR (LINHA)
function montaTr(paciente){
    var pacienteTr = document.createElement('tr'); // CREATE ELEMENT cria qualquer tag html que eu quiser
    pacienteTr.classList.add('paciente');
    //COLOCANCO TD'S DENTRO DA TR
    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome')); 
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild (montarTd(paciente.imc, 'info-imc'));

    return pacienteTr;
    }   

function montarTd (dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}



