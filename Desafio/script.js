const formulario = document.querySelector("form");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    mensagem.textContent = "";

    const nome = document.getElementById("nome");
    const senha = document.getElementById("senha");
    const confirmar = document.getElementById("confirmar_senha");
    const ano = document.getElementById("ano_de_fabricacao");
    const termos = document.getElementById("aceite_termos");

    nome.setAttribute("aria-invalid","false");
    senha.setAttribute("aria-invalid","false");
    confirmar.setAttribute("aria-invalid","false");
    ano.setAttribute("aria-invalid","false");

    if(nome.value.trim().length < 2){

        nome.setAttribute("aria-invalid","true");

        mensagem.textContent = "Nome inválido.";

        return;
    }

    if(senha.value !== confirmar.value){

        senha.setAttribute("aria-invalid","true");
        confirmar.setAttribute("aria-invalid","true");

        mensagem.textContent = "As senhas não coincidem.";

        return;
    }

    if(ano.value < 1900 || ano.value > 2026){

        ano.setAttribute("aria-invalid","true");

        mensagem.textContent = "Ano inválido.";

        return;
    }

    if(!termos.checked){

        mensagem.textContent = "Você precisa aceitar os termos.";

        return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";

});