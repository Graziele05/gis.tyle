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
    loadHTML('components/category.html', 'Category');
    loadHTML('components/bestsellers.html', 'bestsellers');
    loadHTML('components/product-gallery.html', 'product-gallery');
    loadHTML('components/rodape.html', 'rodape');
});
