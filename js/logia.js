// importa o banco de dados de Akuma no Mi
const frutasLogia = akumaNoMiDB.logia;

// Função para exibir as frutas na página
function mostrarFrutasLogia() {
    const lista = document.getElementById('lista-logia');
    frutasLogia.forEach(fruta => {
        const item = document.createElement('div');
        item.classList.add('item-resultado');
        item.innerHTML = `
            <div class="info">
                <h2>${fruta.nome}</h2>
                <p><strong>Subtipo:</strong> ${fruta.subtipo}</p> <!-- Linha adicionada para mostrar o subtipo -->
                <p class="descricao-meta">${fruta.descricao}</p>
                <p><strong>Usuário:</strong> ${fruta.usuario}</p>
            </div>
            <img src="/assets/imagens/${fruta.nome.toLowerCase().replace(/ /g, '-')}.png" class="fruit-image" alt="Imagem de ${fruta.nome}">
        `;
        lista.appendChild(item);
    });
}

// Chama a função quando a página carrega
window.onload = mostrarFrutasLogia;

// Função para voltar à página inicial
function voltar() {
    window.location.href = "../index.html";
}