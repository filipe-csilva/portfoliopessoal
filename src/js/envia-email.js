document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("meuFormulario");
    const resultado = document.getElementById("resultado");
    const botaoLimpar = document.querySelector("input[type='reset']");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Você pode fazer validações aqui, se necessário

        // Envie os dados para o servidor
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "jacobethan-seesaw.000webhostapp.com/envia-email.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
                    alert ("E-mail enviado com sucesso!");
                    botaoLimpar.click();
        };
        xhr.send(`nome=${nome}&email=${email}&mensagem=${mensagem}`);
        
       
       
    });
});