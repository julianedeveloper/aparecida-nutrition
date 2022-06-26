var botaoAdicionar = document.querySelector('#adicionar-paciente'); // aqui eu adiciono paciente.
botaoAdicionar.addEventListener('click', function(event) { //essa função é anônima
    //SEGURA UMA AÇÃO PADRÃO (COMO POR EXEMPLO, LIMPAR O FORMULÁRIO AO CLICAR NO BOTÃO ADICIONAR) PARA QUE EU ATRIBUA UMA NOVA.
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); //aqui eu mstro o quero do mundo html para executar essa função anônima.

    //abaixo vou pegar cada input (campo do form, usando o que foi atribuido em name) do form e pedir pra exibir o valor deles com o '.value'.
    //PEGAR DADOS DO FORM
    var paciente = obtemPacienteDoFormulario(form);
   
    //abaixo eu crio uma linha nova no html através do js
    // CRIAR TR (LINHA)
    var pacienteTr = document.createElement('tr'); // CREATE ELEMENT cria qualquer tag html que eu quiser

    // abaixo vou criar os campos da nova linha (tr)
    //CRIO TD (CAMPOS DA LINHA)
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    //aqui eu atribuo aos campos novos criados, o conteúdo deles. O conteúdo deles será o capturado pelas variáveis que capturam o valor de cada campo.
    //PREENCHENDO OS TD'S (CAMPOS) COM OS VALORES TRAZIDOS DO FORM
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);


    //aqui, com a função APPEND.CHILD, vou colocar dentro da linha PACIENTETR, todos os campos criads com os createElement acima.
    //COLOCANCO TD'S DENTRO DA TR
    pacienteTr.appendChild(nomeTd); 
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild (imcTd);


    //COLOCANCO O TR (LINHA) DENTRO DA TABELA QUE JÁ HAVIA NO FORM
    var tabela = document.querySelector('#tabela-pacientes').appendChild(pacienteTr);
    tabela.appendChild(pacienteTr);

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




