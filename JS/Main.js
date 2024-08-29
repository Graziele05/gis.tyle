document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar o conteúdo HTML externo
    function loadHTML(file, elementId) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error(`Erro ao carregar ${file}:`, error));
    }

    // Carregar os componentes HTML
    loadHTML('components/top.html', 'top');
    loadHTML('components/category.html', 'Category'); // Note a correspondência com o ID 'Category'
    loadHTML('components/rodape.html', 'rodape');
});
