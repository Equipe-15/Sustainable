const materialContent = document.querySelector(".materials");
const materiais = JSON.parse(localStorage.getItem("Materiais"));

materiais.forEach((material) => {
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
  createSpan4.setAttribute("href", `detalhesProduto.html#${material.id}`);
  createSpan4.setAttribute("class", "materialContent");
  const textSpan4 = document.createTextNode("Detalhes");
  createSpan4.appendChild(textSpan4);

  // -----------Colocando informações em materialContent ---------------

  createMaterialContent.appendChild(createimgContent);
  createMaterialContent.appendChild(createSpan1);
  createMaterialContent.appendChild(createSpan2);
  createMaterialContent.appendChild(createSpan3);
  createMaterialContent.appendChild(createSpan4);

  // -----------Adicionando tudo ao materialContent---------------------

  materialContent.appendChild(createMaterialContent);
});
