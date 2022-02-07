var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    //event.target.parentNode.remove();
});

/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove(); //o evento está atrelado ao paciente, o this fará referência a ele.
    });
});*/