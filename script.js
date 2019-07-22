// let nomeCapivara = "Jureusko"; 
// let contador = 0;

// while(contador<3){
// console.log(nomeCapivara);
// contador ++;
//    }

// for(let contador=0; contador<4; contador++){
// console.log(contador);
// }

// let listaChamada = ["Almeida Campos", "Abnegal Silva", "Suskoto", "Rejimar", "Nitocol", "Espeptu", "Aturair", "Ramaão"];

// for(let contador=0;contador<listaChamada.length; contador++){
//  console.log(listaChamada[contador]);
// }

// for(let capivara in listaChamada){
//  console.log(capivara);
// }

// for(let aluno of listaChamada){
//     console.log(aluno);
// }

// let filmes = [
//     {nome: "Rei Leão", classificaçao: 12},
//     {nome:"Vingadores", classificaçao: 16},
//     {nome: "KillBill", classificaçao: 125}
// ]

// for(let filme of filmes){
//     console.log(`O filme ${filme.nome}`);
// }

let nome = prompt ("Digite seu nome");
let idade = prompt ("Digite sua idade");
let filmes = [
    {nome: "Dumbo", classificaçao: 0, estilo: "Animação"},
    {nome: "Rei Leão", classificaçao: 12, estilo: "Animação"},
    {nome: "Vingadores", classificaçao: 16, estilo: "Ação"},
    {nome: "KillBill", classificaçao: 18, estilo: "Muito sangue"},
    {nome: "O iluminado", classificaçao: 16, estilo: "Pertubador"},
    {nome: "Tropa de Elite", classificaçao: 18, estilo: "Sangue e tapa na cara"}
]

for(let filme of filmes){
    if(idade>=filme.classificaçao){
        console.log(`${nome}, você pode assistir ${filme.nome}`);
    }
}