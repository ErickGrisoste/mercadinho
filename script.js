//catalogo

const divCatalogo = document.getElementById('catalogo');

async function fetchProdutos(){
    try{
        const resposta = await fetch('https://fakestoreapi.com/products');
        const listaDeProdutos = resposta.json();
        console.log(listaDeProdutos);
    } catch(error){
        console.error("Erro na api: ", error);
        divCatalogo.innerHTML = "<h2>Site indiponível. Tente novamente mais tarde.</h2>";
    }
}

fetchProdutos();
