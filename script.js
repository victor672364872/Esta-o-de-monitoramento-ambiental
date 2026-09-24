// FUNÇÃO RESPONSÁVEL POR ATUALIZAR OS DADOS
function atualizarDados() {

    // DADOS SIMULADOS
    let temperatura = Math.floor(Math.random() * 16) + 20; // 20°C a 35°C
    let umidade = Math.floor(Math.random() * 41) + 40;     // 40% a 80%
    let luminosidade = Math.floor(Math.random() * 101);    // 0% a 100%

    // MOSTRAR DADOS NO HTML
    document.getElementById("temperatura").innerText = temperatura + " °C";
    document.getElementById("umidade").innerText = umidade + " %";
    document.getElementById("luminosidade").innerText = luminosidade + " %";

    // ANALISAR TEMPERATURA
    let situacao;
    if (temperatura < 25) {
        situacao = "🟢 Normal";
    } else if (temperatura < 30) {
        situacao = "🟡 Atenção";
    } else {
        situacao = "🔴 Temperatura alta";
    }

    document.getElementById("situacao").innerText = situacao;

    // DATA E HORÁRIO
    let agora = new Date();
    document.getElementById("horario").innerText = agora.toLocaleTimeString("pt-BR");
}

// EXECUTA ASSIM QUE O HTML TERMINAR DE CARREGAR COMPLETAMENTE
document.addEventListener("DOMContentLoaded", function() {
    atualizarDados();
});