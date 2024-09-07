// Importa o banco de dados de Akuma no Mi do tipo Logia
const frutasLogia = akumaNoMiDB.logia;
// Função para exibir as frutas do tipo Logia na página
function mostrarFrutasLogia() {
    // Obtém o elemento com o ID 'lista-logia' onde os resultados serão exibidos
    const lista = document.getElementById('lista-logia');
    // Itera sobre cada fruta no banco de dados de Logia
    frutasLogia.forEach(fruta => {
        // Cria um novo elemento 'div' para cada fruta
        const item = document.createElement('div');
        item.classList.add('item-resultado'); // Adiciona a classe 'item-resultado' para estilização
        // Define o conteúdo HTML do item com as informações da fruta
        item.innerHTML = `
            <div class="info">
                <h2>${fruta.nome}</h2> <!-- Nome da fruta -->
                <p><strong>Subtipo:</strong> ${fruta.subtipo}</p> <!-- Linha adicionada para mostrar o subtipo -->
                <p class="descricao-meta">${fruta.descricao}</p> <!-- Descrição da fruta -->
                <p><strong>Usuário:</strong> ${fruta.usuario}</p> <!-- Usuário da fruta -->
            </div>
            <img src="/assets/imagens/${fruta.nome.toLowerCase().replace(/ /g, '-')}.png" class="fruit-image" alt="Imagem de ${fruta.nome}"> <!-- Imagem da fruta -->
        `;
        // Adiciona o item à lista de frutas na página
        lista.appendChild(item);
    });
}
// Chama a função 'mostrarFrutasLogia' quando a página carrega
window.onload = mostrarFrutasLogia;
// Função para voltar à página inicial
function voltar() {
    // Redireciona o usuário para a página inicial
    window.location.href = "../index.html";
}