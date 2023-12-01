function calcular() {
    var cod = Number(document.getElementById("codigo").value);
    var qnt = Number(document.getElementById("quantidade").value);
    var total = 0;

    const produtos = [
        { codigo: 1, nome: 'Produto A', preco: 10.0 },
        { codigo: 2, nome: 'Produto B', preco: 20.0 },
        { codigo: 3, nome: 'Produto C', preco: 15.0 },
    ];

    switch (cod) {
        case 1:
        total = qnt * produtos [0].preco;
        resultado.innerHTML = `O total é ${total.toFixed(1)}`
            break;

        case 2:
        total = qnt * produtos [1].preco;
        resultado.innerHTML = `O total é ${total.toFixed(1)}`        
            break;
            
        case 3:
            total = qnt * produtos [2].preco;
            resultado.innerHTML = `O total é ${total.toFixed(1)}`
            break;

        default:
            break;
    }
}