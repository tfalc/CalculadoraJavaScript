const btn = document.querySelector("#botaoBMG");

/* Gera evento listener para quando botão de cálculo for clicado */
btn.addEventListener("click", function (e) {

	e.preventDefault();

	/* Captação dos valores */

	let valorRisco = document.querySelector("#valorRisco").value; /* Recebe valor do input Valor Risco */
	let comissao = document.querySelector("#comissaoLabel").value; /* Recebe o valor do input Comissão */
	let premioNet = document.getElementById("valorPremioNet"); /* Recebe o valor da div Prêmio Net */
	let premioLiquido = document.getElementById("valorPremioLiquido"); /* Recebe o valor da div Prêmio Líquido */
	let valorPremioCalculado = document.getElementById("valorPremioCalculado"); /* Recebe o valor da div Premio Calculado */
	let valorLiquidoMinimo = document.getElementById("valorPremioLiquidoMinimo"); /* Recebe o valor da div Prêmio Líquido Mínimo */
	let valorLmi = document.getElementById("valorLMI"); /* Recebe o valor da div LMI */
	let valorPremioLiquido = document.getElementById("premioLiquidoInput"); /* Recebe o valor do input Premio Líquido */
	let taxaNetDiv = document.getElementById("valorTaxaNet"); /* Recebe o valor do div taxa net */


	let taxaNetDivCalculo = 1.3 * 0.8;

	premioNetCalculado = (Math.round(((valorRisco * (comissao / 100) * taxaNetDivCalculo) / 100) * 100) / 100).toFixed(2);
	premioCalculado = (Math.round(premioNetCalculado / (1 - (comissao / 100)) * 100) / 100).toFixed(2);
	let taxaNetInput = ((premioNetCalculado / valorRisco) * 100).toFixed(4);
	let premioTotal = (Math.round((premioCalculado * 1.0738) * 100) / 100).toFixed(2);
	lmi = (Math.round(valorRisco * (comissao / 100))).toFixed(2);

	/* inserção dos valores no formulário */
	document.getElementById("premioNetInput").value = premioNetCalculado; /* Atualiza input Prêmio Net*/
	document.getElementById("taxaNetInput").value = taxaNetInput; /* Atualiza input Taxa Net */
	document.getElementById("premioLiquidoInput").value = premioCalculado; /* Atualiza o input Prêmio Líquido */
	document.getElementById("premioTotalInput").value = premioTotal; /* Atualiza input Prêmio total*/

	/* inserção dos valores na tabela*/

	console.log(new Intl.NumberFormat().format(premioNetCalculado));

	valorLmi.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lmi);  /* Atualiza a div LMI com o valor do cálculo */
	taxaNetDiv.innerHTML = taxaNetDivCalculo + "%"; /* Atualiza div Taxa Net*/
	premioNet.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(premioNetCalculado); /* Atualiza div Prêmio Net */
	valorPremioCalculado.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(premioCalculado); /* Atualiza div Prêmio Calculado */
	premioLiquido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(premioCalculado); /* Atualiza div Prêmio Líquido */	
	valorLiquidoMinimo.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(400); /* Atualiza div Prêmio Líquido */	
});

function setTwoNumberDecimal(el) {
	el.value = parseFloat(el.value).toFixed(2);
};