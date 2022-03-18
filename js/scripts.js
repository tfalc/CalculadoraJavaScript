/* Captação dos valores */

let valorRisco = document.getElementById("valorRisco"); /* Recebe valor do input Valor Risco */
let comissao = document.getElementById("comissao"); /* Recebe o valor do input Comissão */
let premioNet = document.getElementById("valorPremioNet"); /* Recebe o valor da div Prêmio Net */
let premioLiquido = document.getElementById("valorPremioLiquido"); /* Recebe o valor da div Prêmio Líquido */
let valorPremioCalculado = document.getElementById("valorPremioCalculado"); /* Recebe o valor da div Premio Calculado */
let valorLiquidoMinimo = document.getElementById("valorPremioLiquidoMinimo"); /* Recebe o valor da div Prêmio Líquido Mínimo */
let valorLmi = document.getElementById("valorLMI"); /* Recebe o valor da div LMI */
let valorPremioLiquido = document.getElementById("premioLiquidoInput"); /* Recebe o valor do input Premio Líquido */
let taxaNetDiv = document.getElementById("valorTaxaNet"); /* Recebe o valor do div taxa net */

/* Gera evento listener para quando botão de cálculo for clicado */
document.getElementById("botaoBMG").addEventListener("click", calcula);

/* inicialização das variáveis */
let premioNetCalculado, premioCalculado, lmi, taxaNetDivCalculo = 0;

/* Cálculos */
function calcula() {
	premioNetCalculado = (valorRisco * (1 + (comissao / 100)) * taxaNet) / 100;
	premioCalculado = premioNet / (1 - (comissao / 100));
	let taxaNetInput = Number(premioNet / valorRisco) * 100;
	let premioTotal = premioLiquido * 1.0738;
	lmi = valorRisco * (1 + (comissao / 100));
	taxaNetDivCalculo = 1, 3 * 0, 8;

}
/* inserção dos valores no formulário */
document.getElementById("premioNetInput").value = premioNet; /* Atualiza input Prêmio Net*/
document.getElementById("taxaNetInput").value = taxaNetInput; /* Atualiza input Taxa Net */
document.getElementById("premioLiquidoInput").value = premioCalculado; /* Atualiza o input Prêmio Líquido */
document.getElementById("premioTotalInput").value = premioTotal; /* Atualiza input Prêmio total*/

/* inserção dos valores na tabela*/
//valorLmi.innerHTML = lmi;
valorLmi.innerHTML = lmi;  /* Atualiza a div LMI com o valor do cálculo */
taxaNetDiv.innerHTML = taxaNetDivCalculo; /* Atualiza div Taxa Net*/
premioNet.innerHTML = premioNetCalculado; /* Atualiza div Prêmio Net */
valorPremioCalculado.innerHTML = premioCalculado; /* Atualiza div Prêmio Calculado */
premioLiquido.innerHTML = 'R$ ' + premioLiquido; /* Atualiza div Prêmio Líquido */
