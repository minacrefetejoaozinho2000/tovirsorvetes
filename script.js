botao.addEventListener('click', function (){

var nomeCliente = nome.value;
var quantiaSorvete = quantidade.value;
var saborSorvete = sabores.value;
var op = op2.value

//alert("nome: " + nomeCliente + " qnt: " + quantiasorvete + "sabor: " + saborsorvete);


pedidonome.innerHTML = nomeCliente;
pedidoquantia.innerHTML = quantiaSorvete;
pedidosabor.innerHTML = saborSorvete;
cobertura.innerHTML = op;
});