var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500); //faz a função remove aguardar 0,5s para dar para ver a animação

});

/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove(); //o evento está atrelado ao paciente, o this fará referência a ele.
    });
});*/