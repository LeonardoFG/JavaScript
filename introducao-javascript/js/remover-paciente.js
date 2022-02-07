var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

const linhas = document.querySelectorAll('table tbody tr') // linhas, imposibilita a tabela inteira ser removida
const colunas = document.querySelectorAll('table tbody tr td') // colunas, imposibilita a tabela inteira ser removida

tabela.addEventListener("dblclick", function(event) {
    if (event.target.parentNode === "#headtabela"){
        return;
        
    } else {
        event.target.parentNode.classList.add("fadeOut");
        
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500); //faz a função remove aguardar 0,5s para dar para ver a animação
    }

});

/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove(); //o evento está atrelado ao paciente, o this fará referência a ele.
    });
});*/