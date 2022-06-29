var botaoAdicionar = document.querySelector('#adicionar-paciente').addEventListener('click', function(event) { 
//IMPEDE AÇÃO PADRÃO (EXEMPLO: LIMPAR O FORMULÁRIO AO CLICAR EM ADICIONAR) PARA QUE EU ATRIBUA UMA NOVA.
    event.preventDefault();
var form = document.querySelector("#form-adiciona"); //vem mundo html para executar essa função anônima.
//PEGAR DADOS DO FORM
var paciente = obtemPacienteDoFormulario(form);
var pacienteTr = montaTr(paciente); 
var erros = validaPacientes(paciente);
    console.log(erros);
    if(erros.length > 0){
        
        exibeMensagemDeErro(erros);
        return; //esse return evita o preenchimento da tabela com dados inválidos
    }
//COLOCANCO O TR (LINHA) DENTRO DA TABELA QUE JÁ HAVIA NO FORM
var tabela = document.querySelector('#tabela-pacientes').appendChild(pacienteTr);
form.reset();
var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";
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

function validaPacientes(paciente) { // esse parâmetro 'paciente' está vindo da function obtemPacienteDoFormulario acima.

    var erros = [];

    if(validaPeso(paciente.peso)){
         erros.push('O peso é inválido!');
    }
        
    if(validaAltura(paciente.altura)) {
        erros.push('A altura é inválida!');
    }

    if(paciente.nome.length == 0){
        erros.push('Preencha o campo nome.');
    }

    if(paciente.peso.length == 0){
        erros.push('Preencha o peso.');
    }

    if(paciente.altura.length == 0) {
        erros.push('Preencha a altura');
    }

    if(paciente.gordura.length == 0){
        erros.push('Preencha o campo gordura!');
    }


    return erros;
}

function exibeMensagemDeErro(erros){

    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    })
    
}





