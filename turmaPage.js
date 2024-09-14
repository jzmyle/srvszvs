// Carregar o total de pontos do localStorage e exibir na página
document.addEventListener("DOMContentLoaded", function() {
    const totalPontosElement = document.getElementById('totalPontos');
    let totalPontos = localStorage.getItem('totalPontos');

    // Se não houver um valor salvo, inicia com 0
    if (totalPontos === null) {
        totalPontos = 0;
        localStorage.setItem('totalPontos', totalPontos);
    }

    // Exibe o total de pontos na página
    totalPontosElement.textContent = totalPontos;

    // Carrega e exibe as notas
    carregarNotas();
});

// Função para salvar a nota no localStorage
function salvarNota() {
    let notaTexto = document.getElementById('notaTexto').value;
    if (notaTexto.trim() === "") {
        alert("A nota não pode ser vazia!");
        return;
    }

    let notasSalvas = localStorage.getItem('notasTurma');
    let notasArray = notasSalvas ? JSON.parse(notasSalvas) : [];

    notasArray.push(notaTexto);

    // Salva as notas atualizadas no localStorage
    localStorage.setItem('notasTurma', JSON.stringify(notasArray));

    // Limpa o campo de texto
    document.getElementById('notaTexto').value = "";

    // Atualiza a exibição das notas
    carregarNotas();
}

// Função para carregar e exibir as notas salvas
function carregarNotas() {
    let listaNotasDiv = document.getElementById('listaNotas');
    listaNotasDiv.innerHTML = ""; // Limpa a lista de notas

    let notasSalvas = localStorage.getItem('notasTurma');
    let notasArray = notasSalvas ? JSON.parse(notasSalvas) : [];

    if (notasArray.length === 0) {
        listaNotasDiv.innerHTML = "<p>Nenhuma nota salva.</p>";
    } else {
        notasArray.forEach((nota, index) => {
            listaNotasDiv.innerHTML += `
                <p>${index + 1}: ${nota} 
                <button class="delete-btn" onclick="apagarNota(${index})">Apagar</button>
                </p>`;
        });
    }
}

// Função para apagar uma nota
function apagarNota(index) {
    let notasSalvas = localStorage.getItem('notasTurma');
    let notasArray = notasSalvas ? JSON.parse(notasSalvas) : [];

    // Remove a nota do array
    notasArray.splice(index, 1);

    // Atualiza o localStorage com a nova lista
    localStorage.setItem('notasTurma', JSON.stringify(notasArray));

    // Atualiza a exibição das notas
    carregarNotas();
}
