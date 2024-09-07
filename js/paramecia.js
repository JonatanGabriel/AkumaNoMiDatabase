// Importa o banco de dados de Akuma no Mi do tipo Paramecia
const frutasParamecia = akumaNoMiDB.paramecia;
// Função para exibir as frutas do tipo Paramecia na página
function mostrarFrutasParamecia() {
    // Obtém o elemento com o ID 'lista-paramecia' onde os resultados serão exibidos
    const lista = document.getElementById('lista-paramecia');
    // Itera sobre cada fruta no banco de dados de Paramecia
    frutasParamecia.forEach(fruta => {
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
// Chama a função 'mostrarFrutasParamecia' quando a página carrega
window.onload = mostrarFrutasParamecia;
// Função para voltar à página inicial
function voltar() {
    // Redireciona o usuário para a página inicial
    window.location.href = "../index.html";
}