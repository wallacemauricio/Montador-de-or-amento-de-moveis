const btnAdd = document.querySelector(".btnAdicionar");

btnAdd.addEventListener("click", function () {
  criaDiv();
});

function criaDiv() {
  let pegaPai = document.querySelector(".principal");
  let novadiv = document.createElement("div");
  pegaPai.appendChild(novadiv);
  novadiv.classList.add("novoMovel");
  criaNovosElementos();
}

function criaNovosElementos() {
  let pegaPai = document.querySelector(".novoMovel");
  let novaLabel = document.createElement("label");
  let textoNovaLabel1 = document.createTextNode("ambiente:");
  novaLabel.appendChild(textoNovaLabel1);
  pegaPai.appendChild(novaLabel);
  novaLabel.classList.add("Ambiente");

  let novoInput1 = document.createElement("input");
  pegaPai.appendChild(novoInput1);

  let novaLabe2 = document.createElement("label");
  let textoNovaLabel2 = document.createTextNode("Descriçao do móvel:");
  novaLabe2.appendChild(textoNovaLabel2);
  pegaPai.appendChild(novaLabe2);
  novaLabe2.classList.add("descAmbiente");

  let novoInput2 = document.createElement("textarea");
  pegaPai.appendChild(novoInput2);

  let novaLabe3 = document.createElement("label");
  let textoNovaLabel3 = document.createTextNode("Valor do Móvel:");
  novaLabe3.appendChild(textoNovaLabel3);
  pegaPai.appendChild(novaLabe3);
  novaLabe3.classList.add("valorAmbiente");

  let novoInput3 = document.createElement("input");
  pegaPai.appendChild(novoInput3);

  let novaLinha = document.createElement("hr");
  pegaPai.appendChild(novaLinha);
  novaLinha.classList.add("linhaDiv");
}
