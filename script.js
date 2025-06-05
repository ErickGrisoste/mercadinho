//catalogo
const div = document.getElementById('catalogo');
const divCatalogo = document.getElementById('catalogo');

async function fetchProdutos(){
    try{
        const resposta = await fetch('https://fakestoreapi.com/products');
        const listaDeProdutos = await resposta.json();
        console.log(listaDeProdutos);
        imprimirVetor(listaDeProdutos);
    } catch(error){
        console.error("Erro na api: ", error);
        divCatalogo.innerHTML = "<h2>Site indiponível. Tente novamente mais tarde.</h2>";
    }
}

function imprimirVetor(vetor){
    div.innerHTML = "";
    
    vetor.forEach(element => {
        const divProduto = document.createElement('div');
        divProduto.className = "itemProduto";
        
        divProduto.innerHTML = `
        <img src="${element.image}" alt="produto">
        <h2>${element.title}</h2>
        <button onclick="comprar()">Comprar</button>`;
        div.appendChild(divProduto);
    });
}

fetchProdutos();
