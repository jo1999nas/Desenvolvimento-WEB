// Pega a tabela
const tabela = document.querySelector('.reportTable');

// Pega o texto dos cabeçalhos
const headers = [...tabela.querySelectorAll('th')]
    .map(th => th.innerText.trim());

// Pega as linhas da tabela
const linhas = [...tabela.querySelectorAll('tr')];

// Monta o resultado
const resultado = linhas
    .filter(tr => tr.querySelectorAll('td').length > 0)
    .map(tr => {
        const valores = [...tr.querySelectorAll('td')]
            .map(td => td.innerText.trim());

        const objeto = {};

        headers.forEach((header, index) => {
            objeto[header] = valores[index];
        });

        return objeto;
    });

// Transforma o array de objetos em JSON
const json = JSON.stringify(resultado);

// Imprime o JSON
console.log(json);
