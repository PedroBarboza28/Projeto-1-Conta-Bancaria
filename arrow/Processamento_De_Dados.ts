let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];


console.log("\nmap() - Multiplicar todos os números por 3 e retornar um novo array\n");
 
let NumerosMultiplicadosPor3 = numeros.map(n => n * 3)
console.dir(NumerosMultiplicadosPor3);

console.log("\nfilter() - Listar todos os Estados que contém a palavra Rio\n");

 let EstadosComPalavraRio = estados.filter(estado => estado.includes("Rio"))
 console.log(EstadosComPalavraRio); 
 
console.log("\nincludes() - Checar se existe na lista o Estado de Minas Gerais\n");

let MinasGerais = estados.includes("MinasGerais")
console.log(MinasGerais);
 
console.log("\nreduce() - Remover todos os elementos repetidos do array estados\n");

let RemoverEstadosRepetidos = estados.reduce((acc:string[], estados) => {
if(acc.indexOf(estados) === -1)
acc.push(estados)
return acc
}, [])
 
console.dir(RemoverEstadosRepetidos);

console.log("\nfind() - Encontrar o primeiro número da lista maior do que 9\n");

let NumeroMaior = numerosRepetidos.find(n => n > 9)
console.log(NumeroMaior);
 
console.log("\nfindIndex() - Encontrar o Índice do primeiro número da lista maior do que 9\n");

let MaiorQue9 = numerosRepetidos.findIndex(n => n > 9)
console.log(MaiorQue9)
 
console.log("\nspread - Combinar 2 arrays\n");

/*Se definir "type:any", ele aceita juntar mais de um tipo */

let ArrayCombinado: Array<number> = [...numeros, ...numerosDesordenados]
console.dir(ArrayCombinado);