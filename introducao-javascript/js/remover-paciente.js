var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove(); //o evento está atrelado ao paciente, o this fará referência a ele.
    });
});