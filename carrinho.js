const divCarrinho = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

function carregarCarrinho() {
    const produtos = JSON.parse(localStorage.getItem("carrinho")) || [];
    divCarrinho.innerHTML = "";

    let total = 0;

    produtos.forEach((produto, index) => {
        total += produto.price * produto.quantidade;

        divCarrinho.innerHTML += `
            <div>
                <img src="${produto.image}" width="100">
                <h3>${produto.title}</h3>
                <p>Preço: R$ ${produto.price.toFixed(2)}</p>
                <p>Quantidade: ${produto.quantidade}</p>
                <button onclick="removerProduto(${index})">Remover</button>
                <hr>
            </div>
        `;
    });

    totalSpan.innerText = "Total: R$ " + total.toFixed(2);
}

function removerProduto(index) {
    let produtos = JSON.parse(localStorage.getItem("carrinho")) || [];
    produtos.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(produtos));
    carregarCarrinho();
}

function finalizarCompra() {
    alert("Compra finalizada!");
    localStorage.removeItem("carrinho");
    window.location.href = "index.html";
}

carregarCarrinho();