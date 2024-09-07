// Importa o banco de dados de Akuma no Mi do tipo Zoan
const frutasZoan = akumaNoMiDB.zoan;
// Função para exibir as frutas Zoan na página
function mostrarFrutasZoan() {
    // Obtém o elemento da página onde a lista de frutas será exibida
    const lista = document.getElementById('lista-zoan');
    // Itera sobre cada fruta no banco de dados
    frutasZoan.forEach(fruta => {
        // Cria um novo elemento 'div' para cada fruta
        const item = document.createElement('div');
        // Adiciona uma classe CSS para estilizar o item da lista
        item.classList.add('item-resultado');
        // Preenche o conteúdo HTML do item com as informações da fruta
        item.innerHTML = `
            <div class="info">
                <h2>${fruta.nome}</h2> <!-- Nome da fruta -->
                <p><strong>Subtipo:</strong> ${fruta.subtipo}</p> <!-- Linha adicionada para mostrar o subtipo -->
                <p class="descricao-meta">${fruta.descricao}</p> <!-- Descrição da fruta -->
                <p><strong>Usuário:</strong> ${fruta.usuario}</p> <!-- Usuário da fruta -->
            </div>
            <!-- Adiciona a imagem da fruta com base no nome -->
            <img src="/assets/imagens/${fruta.nome.toLowerCase().replace(/ /g, '-')}.png" class="fruit-image" alt="Imagem de ${fruta.nome}">
        `;
        // Adiciona o novo item à lista de frutas na página
        lista.appendChild(item);
    });
}
// Chama a função mostrarFrutasZoan quando a página carrega
window.onload = mostrarFrutasZoan;
// Função para voltar à página inicial
function voltar() {
    // Redireciona o usuário para a página inicial
    window.location.href = "../index.html";
}