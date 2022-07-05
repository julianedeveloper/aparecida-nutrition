/*

var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick',function(){
        console.log('Fui clicado duplamente!');
        this.remove();
    })
})

*/

var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
event.target.parentNode.classList.add('fadeOut'); //aqui eu adiciono (classList.add) o efeito criado no css (fadeOut)

setTimeout(function() {
    event.target.parentNode.remove();
}, 1000);


})                                                                              