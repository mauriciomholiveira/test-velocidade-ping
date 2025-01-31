let monitoramentoAtivo = false;
let intervalID;

document.getElementById("startBtn").addEventListener("click", iniciarMonitoramento);
document.getElementById("stopBtn").addEventListener("click", pararMonitoramento);

function iniciarMonitoramento() {
    if (monitoramentoAtivo) return;

    const host = document.getElementById("host").value;
    const qtdPings = parseInt(document.getElementById("qtdPings").value, 10);
    const intervalo = parseInt(document.getElementById("intervalo").value, 10) * 1000;
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";

    if (!host) {
        alert("Por favor, insira um host ou IP válido.");
        return;
    }

    monitoramentoAtivo = true;
    let contador = 0;

    function executarPing() {
        if (!monitoramentoAtivo || (qtdPings > 0 && contador >= qtdPings)) {
            pararMonitoramento();
            return;
        }

        const timestamp = new Date().toLocaleString();
        resultadosDiv.innerHTML += `[${timestamp}] Ping para ${host}: Simulação de resposta\n`;
        resultadosDiv.scrollTop = resultadosDiv.scrollHeight;
        contador++;
    }

    intervalID = setInterval(executarPing, intervalo);
    executarPing();
}

function pararMonitoramento() {
    monitoramentoAtivo = false;
    clearInterval(intervalID);
}
