// Adiciona um ouvinte de evento para o formulário com o ID 'akumaForm'
document.getElementById('akumaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    // Obtém o valor do campo de entrada e converte para minúsculas
    const tipoAkuma = document.getElementById('tipoAkuma').value.toLowerCase();
    // Obtém elementos para mostrar mensagens de erro e estilos de entrada
    const mensagemErro = document.getElementById('mensagemErro');
    const inputAkuma = document.getElementById('tipoAkuma');
    // Remove a classe de erro ao submeter novamente
    mensagemErro.classList.add('hidden'); // Oculta a mensagem de erro
    inputAkuma.classList.remove('input-error'); // Remove a classe de erro do campo de entrada
    // Verifica a entrada e redireciona para a página correspondente
    if (tipoAkuma === 'logia') {
        window.location.href = '/pages/logia.html'; // Redireciona para a página de Logia
    } else if (tipoAkuma === 'zoan') {
        window.location.href = '/pages/zoan.html'; // Redireciona para a página de Zoan
    } else if (tipoAkuma === 'paramecia') {
        window.location.href = '/pages/paramecia.html'; // Redireciona para a página de Paramecia
    } else {
        // Se o tipoAkuma não corresponder a nenhum valor válido, exibe uma mensagem de erro
        mensagemErro.classList.remove('hidden'); // Mostra a mensagem de erro
        inputAkuma.classList.add('input-error'); // Adiciona a classe de erro ao campo de entrada
    }
});