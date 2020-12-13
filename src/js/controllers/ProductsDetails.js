const container = document.querySelector("#container");
const materiais = JSON.parse(localStorage.getItem("Materiais"));
const infoUrl = document.URL;

const id = infoUrl.split("#");
const material = materiais.find((m) => m.id == id[1]);

// -----------Criando class materialContent-------------------------

const createMaterialContent = document.createElement("div");
createMaterialContent.setAttribute("class", "materialContent");

// -----------Criando img (por enquanto fixa) ----------------------

const createimgContent = document.createElement("img");
createimgContent.setAttribute("src", "../assets/plastico.jpg");

// -----------Criando span1 para as informações --------------------

const createSpan1 = document.createElement("span");
const textSpan1 = document.createTextNode(`Tipo: ${material.tipo}`);
createSpan1.appendChild(textSpan1);

// -----------Criando span2 para as informações ---------------------

const createSpan2 = document.createElement("span");
const textSpan2 = document.createTextNode(`Local: ${material.local}`);
createSpan2.appendChild(textSpan2);

// -----------Criando span3 para as informações ----------------------

const createSpan3 = document.createElement("span");
const textSpan3 = document.createTextNode(`Data: ${material.data}`);
createSpan3.appendChild(textSpan3);

// -----------Criando span4 para as detalhes ----------------------

const createSpan4 = document.createElement("a");
createSpan4.setAttribute("href", `pedidoRealizado.html`);
createSpan4.setAttribute("id", "linkPedirProduto");
const textSpan4 = document.createTextNode("Pedir Produto");
createSpan4.appendChild(textSpan4);

container.appendChild(createimgContent);
container.appendChild(createSpan1);
container.appendChild(createSpan2);
container.appendChild(createSpan3);
container.appendChild(createSpan4);
