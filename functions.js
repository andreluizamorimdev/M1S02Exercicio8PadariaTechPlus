let products = [];
let priceProduct = 1;
let registerNextPurchase 

function registerPurchase() {
    do {
        priceProduct = parseFloat(window.prompt("Digite o valor da mercadoria: (digite 0 para finalizar)"));
        products.push(priceProduct);
    }
    while (priceProduct > 0);
    
    if(priceProduct == 0) {
        const productsTotal = products.reduce((sum, product) => {
            sum += product;
            return sum;
        });
        alert(`O total foi R$ ${productsTotal} prosseguindo para pagamento`);
        let moneyClient = parseFloat(window.prompt("Digite o valor em dinheiro que o cliente forneceu"));
        let troco = moneyClient - productsTotal;
    
        alert(`Pagamento realizado com o valor de R$ ${moneyClient} seu troco é no valor de R$ ${troco}`);
        
        nextPurchase();
    }
}


function nextPurchase() {
    registerNextPurchase = confirm('Operação finalizada, deseja registrar outra compra?');
    if(registerNextPurchase === true) {
        priceProduct = 1;
        products = [];
        registerPurchase();
    } else {
        alert('Operação finalizada, tenha uma boa noite');
    }
}