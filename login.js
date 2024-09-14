document.getElementById('tipoUsuario').addEventListener('change', function () {
    const codigoProfessor = document.getElementById('codigoProfessor');
    if (this.value === 'professor') {
        codigoProfessor.style.display = 'block';
    } else {
        codigoProfessor.style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const tipoUsuario = document.getElementById('tipoUsuario').value;
    const codigo = document.getElementById('codigo').value;

    // Lógica de criação de usuário aqui (Validações e envio para o servidor)
    if (tipoUsuario === 'professor' && !codigo) {
        alert('Código de professor é obrigatório');
        return;
    }

    // Redirecionar para a página de turmas ou perfil
    window.location.href = tipoUsuario === 'aluno' ? 'turmas.html' : 'turmaPage.html';
});
