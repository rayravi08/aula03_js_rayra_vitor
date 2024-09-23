var lista = ["aluno1", "aluno2", 100];
console.log(lista);
//consumindo um elemento especifico do array
console.log(lista[2]);

//descobrindo o tamanho do array
console.log(lista.length);

//saber se um elemento esta ou nao no array
console.log(lista.indexOf("aluno3"));

//alterar uma informação dentro do array
lista[0] = "vitor";
console.log(lista);
lista[1] = "rayra";
console.log(lista);
lista[2] = 3;
console.log(lista);

//inserir novo elemento dentro do array
lista.push("Vitor");

//excluir elemento do array
lista.shift();
console.log(lista);

//excluir o ultimo elemento do array
lista.pop();
console.log(lista);

//retornar os itens de dentro do array com um separador
console.log(lista.join(" / "));
