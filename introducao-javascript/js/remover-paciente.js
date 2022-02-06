var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("click", function() {
    console.log("Fui clicado");
});

/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove(); //o evento está atrelado ao paciente, o this fará referência a ele.
    });
});*/