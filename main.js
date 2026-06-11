let pontos = 0;
let respondidas = [];

function verificar(pergunta, resposta){

    if(respondidas.includes(pergunta)){
        return;
    }

    respondidas.push(pergunta);

    if(
        (pergunta === 1 && resposta === 'a') ||
        (pergunta === 2 && resposta === 'a') ||
        (pergunta === 3 && resposta === 'a') ||
        (pergunta === 4 && resposta === 'a') ||
        (pergunta === 5 && resposta === 'a')
    ){
        pontos++;
    }

    if(respondidas.length === 5){
        document.getElementById("resultado").innerHTML =
        `🌱 Você acertou ${pontos} de 5 perguntas!`;
    }
}