function adicionarPontos(pontos) {
    let totalPontos = localStorage.getItem('totalPontos');
    totalPontos = parseInt(totalPontos) + pontos; // Subtrai os pontos negativos

    // Atualiza o valor no localStorage
    localStorage.setItem('totalPontos', totalPontos);

    // Redireciona de volta para a página da turma
    window.location.href = 'turmaPage.html';
}
