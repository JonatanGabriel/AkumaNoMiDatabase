document.getElementById('akumaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    const tipoAkuma = document.getElementById('tipoAkuma').value.toLowerCase();
    const mensagemErro = document.getElementById('mensagemErro');
    const inputAkuma = document.getElementById('tipoAkuma');

    // Remove a classe de erro ao submeter novamente
    mensagemErro.classList.add('hidden');
    inputAkuma.classList.remove('input-error');

    // Verifica a entrada e redireciona para a página correta
    if (tipoAkuma === 'logia') {
        window.location.href = '/pages/logia.html';
    } else if (tipoAkuma === 'zoan') {
        window.location.href = '/pages/zoan.html';
    } else if (tipoAkuma === 'paramecia') {
        window.location.href = '/pages/paramecia.html';
    } else {
        // Exibe a mensagem de erro se a entrada for inválida
        mensagemErro.classList.remove('hidden');
        inputAkuma.classList.add('input-error');
    }
});
