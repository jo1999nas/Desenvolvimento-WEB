### O que é JavaScript?

É uma linguagem de programação de alto nível, interpretada e voltada para objetos, essencial para tornar páginas da web interativas e dinâmicas.

### É a mesma coisa que Java? Se não, quais as semelhanças e quais as diferenças?

JavaScript e Java são linguagens diferentes. Além do nome, a principal semelhança é o fato das duas serem linguagens de alto nível orientadas à objetos. Já sobre as diferenças, podemos destacar que, enquanto Java é uma linguagem compilada para bytecode e executada pela JVM, JavaScript é interpretada. Java é fortemente tipada, já o JavaScript é fracamente tipada. Os propósitos também são distintos, com JavaScript sendo usado para desenvolvimento web, enquanto Java é voltado para aplicações de grande porte.

### Quais são as utilizações mais comuns de JavaScript em HTML básico?

A maior função do JavaScript em HTML básico é tornar as páginas web interativas.

### Qual o nome da notação de objetos em JavaScript? Como ela funciona?

Existem duas formas que variam dependente do contexto. A primeira é o JSON, um formato de texto universal usado para trocar dados entre a página web e um servidor. O JSON utiliza o formato de chaves e valores, exigindo que as chaves estejam sempre entre aspas duplas.

```JSON
{
    "nome": "Jonas",
    "idade": 26
}
```

Também existe a notação de Objeto Literal, que é a forma nativa para criar objetos dentro do código JavaScript. A sintaxe é muito parecida como o JSON, mas sem exigir aspas duplas nas chaves.

```javascript
const pessoa = {
    nome: "Jonas",
    idade: 26
};
```

### Como JavaScript faz referência a objetos? Qual a diferença entre elemento.nome e elemento["nome"]?

Em JavaScript, objetos são manipulados por referência. Isso significa que, ao atribuir um objeto a outra variável, não é criada uma cópia, mas sim uma nova referência para o mesmo espaço de memória. Assim, alterações feitas por uma variável afetam o mesmo objeto acessado pela outra.

```javascript
const a = { nome: "Jonas" };
const b = a;
b.nome = "Maria";
// a.nome também será "Maria"
```

Sobre a diferença entre elemento.nome e elemento["nome"], enquanto a notação de ponto é a forma mais legível e aceita, sendo usada quando o nome da propriedade é conhecido e segue as regras de identificadores (sem espaços ou caracteres especiais), a notação de colchetes permite acessar propriedades usando strings, sendo útil em caso de nome dinâmico (armazenado em variável) ou quando o nome possui caracteres especiais. Em suma, a notação de ponto é simples e direta, enquanto a notação de colchetes é mais flexível.

### O documento HTML pode ser considerado como um conjunto de objetos? É possível manipulá-lo via JavaScript? Como?

Sim, o documento HTML pode ser considerado como um conjunto de objetos organizados em uma estrutura hierárquica chamada DOM (Document Object Model). No DOM, cada elemento HTML sinalizado por uma tag é um objeto, com propriedades e métodos que podem ser acessados e modificados via JavaScript por meio do objeto document.