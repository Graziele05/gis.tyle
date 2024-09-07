document.addEventListener("DOMContentLoaded", function () {
    //carrega o conteúdo HTML externo
    function loadHTML(file, elementId) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error(`Erro ao carregar ${file}:`, error));
    }

    // Carregar os componentes HTML
    loadHTML('/components/top.html', 'top');
    loadHTML('/components/category.html', 'Category');
    loadHTML('/components/bestsellers.html', 'bestsellers');
    loadHTML('/components/product-gallery.html', 'product-gallery');
    loadHTML('/components/products/description-product1.html', 'description-product1');
    loadHTML('/components/rodape.html', 'rodape');
});
