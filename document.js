document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Pegar os valores dos campos
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    
    // Verificar se o número B é maior que o número A
    if (campoB > campoA) {
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").innerHTML = "O número B deve ser maior que o número A.";
        document.getElementById("mensagem").style.color = "red";
    }
});