### É possível representar tabelas em HTML?

Sim.

<table>
    <caption>Lista da padaria</caption>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Pão</td>
            <td>R$ 5,00</td>
        </tr>
        <tr>
            <td>Manteiga</td>
            <td>R$ 6,00</td>
        </tr>
        <tr>
            <td>Queijo</td>
            <td>R$ 17,00</td>
        </tr>
        <tr>
            <td>Presunto</td>
            <td>R$ 15,00</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>R$ 43,00</td>
        </tr>
    </tfoot>
</table>

``` HTML
<table>
    <caption>Lista da padaria</caption>
	<thead>
		<tr>
			<th>Produto</th>
			<th>Preço</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Pão</td>
			<td>R$ 5,00</td>
		</tr>
		<tr>
			<td>Manteiga</td>
			<td>R$ 6,00</td>
		</tr>
		<tr>
			<td>Queijo</td>
			<td>R$ 17,00</td>
		</tr>
		<tr>
			<td>Presunto</td>
			<td>R$ 15,00</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>R$ 43,00</td>
		</tr>
	</tfoot>
</table>
```

### Como estruturar as tags para representar o conteúdo de uma tabela?

Usamos uma tag table para definir uma tabela. As linhas da tabela serão definidas pela tag tr. Os cabeçalhos da tabela, onde geralmente se encontram os nomes dos dados em cada coluna são definidos por th. Por fim, a tag td define o conteúdo de uma célula da tabela.

### Existe diferença entre as tags de cabeçalho e rodapé e as demais tags? Se sim, qual?

Sim, essas tags servem para ajudar a organizar a tabela. thead define o cabeçalho, onde normalmente vão os títulos das colunas, tbody o corpo da tabela, onde vão os dados e tfoot o rodapé da tabela, geralmente usado para totais ou resumos.

### Como se faz para incluir legenda em uma tabela?

Para incluir legendas na tabela, usamos a tag caption.

### É possível representar em HTML tabelas em que uma coluna corresponde a mais de uma linha (ou o contrário)? Se sim, como?

Sim, usando os atributos de rowspan para que uma célula ocupe mais de uma linha e colspan para que uma célula ocupe mais de uma coluna.

<table border="1">
	<tr>
		<th>Nome</th>
		<th colspan="2">Contato</th>
	</tr>
	<tr>
		<td rowspan="2">Jonas</td>
		<td>Email</td>
		<td>jonas@email.com</td>
	</tr>
	<tr>
		<td>Telefone</td>
		<td>99999-9999</td>
	</tr>
</table>

``` HTML
<table border="1">
	<tr>
		<th>Nome</th>
		<th colspan="2">Contato</th>
	</tr>
	<tr>
		<td rowspan="2">Jonas</td>
		<td>Email</td>
		<td>jonas@email.com</td>
	</tr>
	<tr>
		<td>Telefone</td>
		<td>99999-9999</td>
	</tr>
</table>
```
