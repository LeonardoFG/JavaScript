// função para adicionar ao formulário assim que for clicado
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);
    pacienteTr.classList.add("paciente");

    //valida paciente, se invalido mostra msg console
    //var pacienteTr = montaTr(paciente);
    var erros = validaPaciente(paciente);
    
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
    }

    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
        return;
    }

    //adicionando o paciente na tabela.
    //var tabela = document.querySelector("#tabela-pacientes");
    //tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    form.reset(); // limpa os campos do formulário
    focusNome(); //para focar no campo nome
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});   // nesse caso é nescessário o ; para encerrar a linha

//para adicionar paciente do JSON botão busca paciente
function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//Extraindo informacoes do paciente do form
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
        //não precisa de ; no final, apenas , separando os elementos
    }
    return paciente;
}

//monta as Tr colocando as devidas classes
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//monta as Td e adiciona devidas classes, para ser chamado no nontatr
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome do pcaciente não pode ser em branco");

    if(!validaPeso(paciente.peso)) erros.push("O Peso é Inválido !!!"); //posso fazer um if simples sem {}'s
    
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida !!!");

    if(paciente.gordura.length == 0) erros.push("A gordura corporal não pode ser em branco.");

    if(paciente.peso.length == 0) erros.push("O peso não pode ser em branco.");

    if(paciente.altura.length == 0) erros.push("A altura não pode ser em branco.");

    // verificação para não aceitar altura com virgula
    if(paciente.altura.textContent == ",") erros.push("Deve ser usado ponto(.) ao invés de virgula(,).");

    return erros;

}

//para focar no campo nome
focusNome = function getFocus() {
    document.getElementById("nome").focus();
  }