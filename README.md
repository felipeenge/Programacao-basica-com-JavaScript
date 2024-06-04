# PROGRAMAÇÃO BÁSICA COM JAVASCRIPT

Javascript é uma linguagem de programação que adiciona interatividade em páginas web.
É uma linguagem de programação que pode ser executada no navegador, ou seja, é possível manipular o conteúdo de uma página web após ela ter sido carregada.
Utilizando o Javascript em um navegador.  Basta ir em inspecionar a página, e clicar e console, que terá acesso.

No exemplo abaixo, temos variáveis.

**Variável**: é um contêiner que armazena um valor ou conjunto de valores na memória de um computador e atribui a eles um nome exclusivo.
Em Javascript para criarmos uma variável fazemos da seguinte maneira *let + nome da variável*.
No exemplo abaixo criamos a variável *x* e atribuímos o valor dessa variável *10*.
`Let x = 10`

Podemos dar o valor e nome que quisermos. 
Mas temos que ter cuidado ao dar nome a uma variável, não podemos ter espaços.

Ex: Se quisermos colocar uma variável chamada marcas de carros. Não podemos deixar separadas, podemos fazer da seguinte maneira marcaDeCarro, _MarcaDeCarros_.

### Tipos de dados:
**Strings:** São textos, números. 
Obs: Strings devem está entre aspas duplas “ “ ou aspas simples ‘ ‘
Se iniciar uma string com aspas dupla, deve fecha-las com aspas duplas, a mesma coisa para aspas simples, se começar a string com aspas simples, fechar com aspas simples.
`Ex: let name = “Teste”`
`let = name1 = ‘Teste’`

 
Para saber o tipo de dado basta digitar o _typeof_
O _console.log ()_ é a forma de imprimir o que foi digitado.

![Tipo-de-dado](https://github.com/felipeenge/Caso-de-teste/assets/121561336/5f62c067-f105-4d0c-8838-6c1292100977)
 
**Números**: São valores numéricos, incluindo inteiros ou com casas decimais.
Obs: Se caso tiver um número e esse número estiver entre aspas, esse não é um dado do tipo número, mas sim, do tipo string. 
Ex: _let numero = 10_     < esse é um dado do tipo número
_let numero1 = “10”_    <esse é um dado do tipo string
 
![image](https://github.com/felipeenge/Caso-de-teste/assets/121561336/70547fb6-f2af-473f-a706-32dc1506440d)

**Booleans**: é um tipo de dado que retorna true or false. É frequentemente usado para representar uma condição lógica

![image](https://github.com/felipeenge/Caso-de-teste/assets/121561336/d97e6ef4-ab81-46a2-bf21-eb05fc0964ef)
 
**Array**: é um tipo de dado utilizado para guardar de dados, incluindo outros arrays.
Obs: arrays abre e fecha colchetes *[ ]*
let array = [1, 2, 4, "teste", false]
Object: Representa uma coleção de pares chave-valor, onde cada chave é uma string e o valor pode ser qualquer tipo de dado.
`let object = {name: “João”, idade: 20, pais: “Brasil”}`

Em javascript o índex começa pelo valor 0 (zero) e não a partir do número 1.

### Condições:

Uma condição é uma expressão que avalia se uma condição é _verdadeira_ ou _falsa_. É usado para tomar uma decisão no código. Condições são normalmente usadas em instruções de fluxo de controle para determinar qual código deve ser executado com base no fato ou condição a ser atendida.
*Declaração if*: 
Executa um bloco de código se essa condição for verdadeira.
```
if (condição) {
    código será executado se a condição for verdadeira
}
```
*Declaração else*:
Executa um bloco de código se uma condição for verdadeira e outro bloco de código se a condição for falsa
```
if (condição) {
    código será executado se a condição for falsa
}
    else {
    executa o código se a condição for falsa
}
```

*Declaração else if*:
Especifica uma nova condição para testar se a primeira condição for falsa.
```
if (condição1) {
  // código será executado se a condição1 for verdadeira
} else if (condition2) {
  // código será executado se a condição2 for verdadeira
} else {
  // código será executado se ambas as condições forem falsa
}
```

*Declaração switch*:
Permite que você execute diferentes ações com base em diferentes condições.
```
switch (expressão) {
    case valor1:
        // código será executado se expressão === valor1
    case value2:
        // código será executado se expressão === valor2
    default:
        // código será executado se nenhuma dos casos corresponderem
}
```

### Loops:
Loops são instruções de fluxo de controle que executam repetidamente um bloco de códigos. Loops são essenciais para executar tarefas repetitivas e iterar estruturas de dados, tais como arrays ou objetos.
*Loop for*:
Repete um bloco de código por um determinado número de vezes
```
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Saída: 0, 1, 2, 3, 4
```

*Loop while*:
Executa o código enquanto uma condição específica for verdadeira
```
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Saída: 0, 1, 2, 3, 4
```

*Loop do while*:
É similar ao loop while, mas executa o bloco de código uma vez antes de verificar a condição.
```
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Saída: 0, 1, 2, 3, 4
```

### DOM
O Document Object Model (DOM) em JavaScript é uma interface de programação para documentos da web. Ele representa a página para que os programas possam alterar a estrutura, o estilo e o conteúdo do documento. O DOM fornece uma representação estruturada do documento como uma árvore de objetos, que pode ser manipulada usando JavaScript.
Alguns exemplos do que DOM pode fazer:

*Alteração de conteúdo*
Altera o conteúdo do texto de um elemento com o id __"texto"__
`document.getElementById("texto").textContent = "Hello, World!";`

*Mudar Styles*:
Altera a cor de todos os elementos com a classe __"destaques"__
const elements = document.getElementsByClassName("destaques");
```
for (const element of elements) {
  element.style.color = "blue";
}
```

Obs: Todos essas condições e tipos de dados, tem exemplos na pasta códigos