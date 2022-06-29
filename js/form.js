var botaoAdicionar = document.querySelector('#adicionar-paciente').addEventListener('click', function(event) { 
//IMPEDE AÇÃO PADRÃO (EXEMPLO: LIMPAR O FORMULÁRIO AO CLICAR EM ADICIONAR) PARA QUE EU ATRIBUA UMA NOVA.
    event.preventDefault();
var form = document.querySelector("#form-adiciona"); //vem mundo html para executar essa função anônima.
//PEGAR DADOS DO FORM
var paciente = obtemPacienteDoFormulario(form);
var pacienteTr = montaTr(paciente); 
var erro = validaPaciente(paciente);

    if(erro.length > 0){
        
        var mensagemErro = document.querySelector('#mensagem-erro');
        mensagemErro.textContent = erro;
        return; //esse return evita o preenchimento da tabela com dados inválidos
    }
//COLOCANCO O TR (LINHA) DENTRO DA TABELA QUE JÁ HAVIA NO FORM
var tabela = document.querySelector('#tabela-pacientes').appendChild(pacienteTr);
form.reset();
})
//pego cada input (usando o que foi atribuido em name) do form e peço pra exibir o valor deles com o '.value'.
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
    //COLOCANCO TD'S DENTRO DA TR E JÁ ATRIBUO CLASSE ATRAVÉS DA FUNCTION montarTd
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

function validaPaciente(paciente) { // esse parâmetro 'paciente' está vindo da function obtemPacienteDoFormulario acima.
    if(validaPeso(paciente.peso)){
        return true; 
    } else {
        return ('Peso inválido!');
    }
}



