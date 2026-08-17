const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const senha = document.getElementById("senha");
    const confirmar = document.getElementById("confirmar_senha");
    const ano = document.getElementById("ano_de_fabricacao");
    const termos = document.getElementById("aceite_termos");

    // Remove marcações de erro anteriores
    nome.setAttribute("aria-invalid", "false");
    senha.setAttribute("aria-invalid", "false");
    confirmar.setAttribute("aria-invalid", "false");
    ano.setAttribute("aria-invalid", "false");

    // Validação do nome
    if (nome.value.trim().length < 2) {
        nome.setAttribute("aria-invalid", "true");
        alert("Digite um nome válido.");
        nome.focus();
        return;
    }

    // Validação das senhas
    if (senha.value !== confirmar.value) {
        senha.setAttribute("aria-invalid", "true");
        confirmar.setAttribute("aria-invalid", "true");
        alert("As senhas não coincidem.");
        confirmar.focus();
        return;
    }

    // Validação do ano
    const anoFabricacao = Number(ano.value);

    if (anoFabricacao < 1900 || anoFabricacao > 2026) {
        ano.setAttribute("aria-invalid", "true");
        alert("Ano de fabricação inválido.");
        ano.focus();
        return;
    }

    // Validação dos termos
    if (!termos.checked) {
        alert("Você precisa aceitar os termos e condições.");
        termos.focus();
        return;
    }

    alert("Cadastro realizado com sucesso!");

    // Opcional: limpa o formulário após o sucesso
    formulario.reset();
});