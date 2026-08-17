# Desafio

### Passo inicial
Estudar a tag `<form>` e os atributos `action`, `method` e `autocomplete`, e aplicá-los conforme a necessidade dos passos do trabalho

**Opcional**: Estilização básica com CSS (apenas como complemento após concluir as demais partes)

### Criar um formulário.

O formulário deve utilizar:

- TODAS as tags a seguir (fazendo sentido no contexto) e respectivos atributos que considerar pertinentes:
```html
<input>
<textarea>
<select>
<option>
<button>
<label>
```
- TODOS os tipos a seguir (fazendo sentido no contexto!):
```html
text
email
password
number
date
time
datetime-local
tel
url
search
color
range
file
radio
checkbox
hidden
```
O formulário deve capturar o evento submit
- Ler valores dos campos.
- Validar informações com JavaScript (escolher quais - apenas algumas).
- Exibir mensagens de erro e de sucesso.

O formulário deve ser acessível
- Utilizar corretamente a tag `<label>`, `for` e `id`
- Incluir atributos aria mais comuns
- Considerar boas práticas de navegação por teclado
    - Considerar o básico: assumir a ausência de um mouse e a agilidade na interação

O formulário deve:
- Utilizar os seguintes atributos HTML5 relacionados a validação nativa:
```HTML
required
placeholder
min
max
minlength
maxlength
pattern
step
readonly
disabled
```