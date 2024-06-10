
//DOM
//LINK COM O ARQUIVO HTML
//ACESSAR O DOM

document.title = "Times"

//se for 1 > são paulo(cor de fundo vermelho) senão 0 corinthians(cor de fundo preto)

// var time = prompt("Digite o nome do seu time")
// if(time == 1){
//     alert("O time é São Paulo")
//     document.body.style.backgroundColor = "red"
// }else if(time == 0){
//     alert("O time é Corinthians")
//     document.body.style.backgroundColor = "black"
// }else{
//     alert("O time é Palmeiras")
//     document.body.style.backgroundColor = "green"
// }

// var time = prompt("Digite o nome do seu time")
// if(time == "São Paulo" || time == "Sao Paulo"){
//     alert("O time é São Paulo")
//     document.body.style.backgroundColor = "red"
// }else if(time == "Corinthians"){
//     alert("O time é Corinthians")
//     document.body.style.backgroundColor = "black"
// }else if(time == "Palmeiras"){
//     alert("O time é Palmeiras")
//     document.body.style.backgroundColor = "green"
// }else{
//     alert("Não sei que time é esse")
//     document.body.style.backgroundColor = "blue"
// }

var time = prompt("Digite o nome do seu time")
if(time == "São Paulo" || time == "Sao Paulo"){
    alert("O time é São Paulo")
    document.body.style.backgroundColor = "red"
    //createElement > serve para criar uma tag no HTML
    // innerHTML > Inserir uma informação no HTML
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "São Paulo - Rogério ceni"
    document.body.appendChild(nomeTime) 
}else if(time == "Corinthians"){
    alert("O time é Corinthians")
    document.body.style.backgroundColor = "black"
     //createElement > serve para criar uma tag no HTML
    // innerHTML > Inserir uma informação no HTML
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Corinthians - Cassio"
    document.body.appendChild(nomeTime) 
    nomeTime.style.color = "white"
}else if(time == "Palmeiras"){
    alert("O time é Palmeiras")
    document.body.style.backgroundColor = "green"
     //createElement > serve para criar uma tag no HTML
    // innerHTML > Inserir uma informação no HTML
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Palmeiras - Endrick"
    document.body.appendChild(nomeTime) 
    nomeTime.style.color = "white"
}else{
    alert("Não sei que time é esse")
    document.body.style.backgroundColor = "blue"
}

// //alert
// window.alert("NÃO SE MOVA");
// //confirm
// window.confirm("Deseja encerrar?");
// //Prompt
// window.prompt("Deseja realmente encerrar?");
// //setTimeOut
// window.setTimeout()
