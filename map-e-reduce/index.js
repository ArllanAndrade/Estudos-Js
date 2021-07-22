const produtos = [
    {
        produto: "notebook",
        preco: 2200
    },
    {
        produto: "smartphone",
        preco: 1400
    },
    {
        produto: "carregador",
        preco: 150
    }
]

// map
const dolar = 5.2;
const nomeProduto = produtos.map(p => p.produto);
const precosEmDolar = produtos.map(p => p.preco * dolar);
console.log("Produtos: " + nomeProduto + " / Preços em dolar: " + precosEmDolar);

// reduce
precosTotal = produtos.reduce((a, b) => a = a + b.preco, 0);
console.log("Preço total: " + precosTotal);