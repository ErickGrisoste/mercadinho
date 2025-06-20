//catalogo
const div = document.getElementById('catalogo');
const divCatalogo = document.getElementById('catalogo');

async function fetchProdutos() {
    try {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const listaDeProdutos = await resposta.json();
        localStorage.setItem("catalogo", JSON.stringify(listaDeProdutos));
        imprimirVetor(listaDeProdutos);
    } catch (error) {
        console.error("Erro na api: ", error);
        divCatalogo.innerHTML = "<h2>Site indiponível. Tente novamente mais tarde.</h2>";
    }
}

function imprimirVetor(vetor) {
    div.innerHTML = "";

    vetor.forEach(element => {
        const divProduto = document.createElement('div');
        divProduto.className = "itemProduto";

        divProduto.innerHTML = `
        <img src="${element.image}" alt="produto">
        <h2>${element.title}</h2>
        <p>R$ ${element.price.toFixed(2)}</p>
        <button onclick='comprarPorId(${JSON.stringify(element.id)})'>Comprar</button>`;
        div.appendChild(divProduto);
    });
}

function comprarPorId(id) {
    let catalogo = JSON.parse(localStorage.getItem("catalogo")) || [];

    const produto = catalogo.find(p => p.id === id);
    if (produto) {
        comprar(produto);
    } else {
        alert("Produto não encontrado!");
    }
}

function comprar(produto) {
    let produtos = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (confirm('Deseja adicionar produto ao carrinho?')) {
        const existe = produtos.find(p => p.id === produto.id);
        if (existe) {
            existe.quantidade += 1;
        } else {
            produto.quantidade = 1;
            produtos.push(produto);
        }

        localStorage.setItem("carrinho", JSON.stringify(produtos));
        alert("Produto adicionado ao carrinho!");
    }
}

fetchProdutos();
