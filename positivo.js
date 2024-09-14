function adicionarPontos(pontos) {
    let totalPontos = localStorage.getItem('totalPontos');
    totalPontos = parseInt(totalPontos) + pontos; // Adiciona os pontos positivos

    // Atualiza o valor no localStorage
    localStorage.setItem('totalPontos', totalPontos);

    // Redireciona de volta para a página da turma
    window.location.href = 'turmaPage.html';
}
