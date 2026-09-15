var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var servico = document.getElementById("servico").value;

    if (nome == "" || telefone == "" || servico == "") {
        alert("Preencha todos os campos obrigatorios!");
    } 
    else {
        alert("Obrigado " + nome + "! Seu pedido foi enviado.");
        
        formulario.reset();
    }

});
