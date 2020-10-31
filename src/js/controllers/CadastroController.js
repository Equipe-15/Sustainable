const ContainerElement = document.querySelector("#signin");
const tipoElement = document.querySelector("#tipo");
const pessoaElement = document.querySelector("#pessoa");
const formElement = document.querySelector("#generalForm");



function changeValue(elementValue) {
  if (elementValue === "Cliente") {
    const getElementsFornecedor = document.getElementsByClassName(
      "TextInputFornecedor"
    );
    if (getElementsFornecedor.length > 0) {
      for (let len = 0; len < getElementsFornecedor.length; len++) {
        getElementsFornecedor[len].style.display = "none";
      }
    }
    // ---------Add RG input-----------

    // formElement.removeChild()

    const inputElement = document.createElement("div");
    inputElement.setAttribute("class", "TextInputClient");

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", "rg");
    const labelText = document.createTextNode("RG");
    labelElement.appendChild(labelText);

    const inputRGElement = document.createElement("input");
    inputRGElement.setAttribute("type", "text");
    inputRGElement.setAttribute("id", "rg");
    inputRGElement.setAttribute("placeholder", "RG");

    inputElement.appendChild(labelElement);
    inputElement.appendChild(inputRGElement);

    formElement.appendChild(inputElement);

    // ---------Add Órgão Expedidor input-----------

    const inputElement2 = document.createElement("div");
    inputElement2.setAttribute("class", "TextInputClient");

    const labelElement2 = document.createElement("label");
    labelElement2.setAttribute("for", "orgao");
    const labelText2 = document.createTextNode("Org.Exp");
    labelElement2.appendChild(labelText2);

    const inputRGElement2 = document.createElement("input");
    inputRGElement2.setAttribute("type", "text");
    inputRGElement2.setAttribute("id", "orgao");
    inputRGElement2.setAttribute("placeholder", "Org.Exp");

    inputElement2.appendChild(labelElement2);
    inputElement2.appendChild(inputRGElement2);

    formElement.appendChild(inputElement2);

    // ---------Add CPF input-----------

    const inputElement3 = document.createElement("div");
    inputElement3.setAttribute("class", "TextInputClient");

    const labelElement3 = document.createElement("label");
    labelElement3.setAttribute("for", "cpf");
    const labelText3 = document.createTextNode("CPF");
    labelElement3.appendChild(labelText3);

    const inputRGElement3 = document.createElement("input");
    inputRGElement3.setAttribute("type", "text");
    inputRGElement3.setAttribute("id", "cpf");
    inputRGElement3.setAttribute("placeholder", "CPF");

    inputElement3.appendChild(labelElement3);
    inputElement3.appendChild(inputRGElement3);

    formElement.appendChild(inputElement3);
  } else if (elementValue === "Fornecedor") {
    const getElementsClient = document.getElementsByClassName(
      "TextInputClient"
    );
    if (getElementsClient.length > 0) {
      for (let len = 0; len < getElementsClient.length; len++) {
        getElementsClient[len].style.display = "none";
      }
    }
    // ---------Add Razão Social input-----------

    const inputElement = document.createElement("div");
    inputElement.setAttribute("class", "TextInputFornecedor");

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", "razao");
    const labelText = document.createTextNode("RazãoSocial");
    labelElement.appendChild(labelText);

    const inputRGElement = document.createElement("input");
    inputRGElement.setAttribute("type", "text");
    inputRGElement.setAttribute("id", "razao");
    inputRGElement.setAttribute("placeholder", "RazãoSocial");

    inputElement.appendChild(labelElement);
    inputElement.appendChild(inputRGElement);

    formElement.appendChild(inputElement);

    // ---------Add Inscrição Estadual input-----------

    const inputElement2 = document.createElement("div");
    inputElement2.setAttribute("class", "TextInputFornecedor");

    const labelElement2 = document.createElement("label");
    labelElement2.setAttribute("for", "inscricao");
    const labelText2 = document.createTextNode("Inscrição Estadual");
    labelElement2.appendChild(labelText2);

    const inputRGElement2 = document.createElement("input");
    inputRGElement2.setAttribute("type", "text");
    inputRGElement2.setAttribute("id", "inscricao");
    inputRGElement2.setAttribute("placeholder", "Inscrição Estadual");

    inputElement2.appendChild(labelElement2);
    inputElement2.appendChild(inputRGElement2);

    formElement.appendChild(inputElement2);

    // ---------Add CNPJ input-----------

    const inputElement3 = document.createElement("div");
    inputElement3.setAttribute("class", "TextInputFornecedor");

    const labelElement3 = document.createElement("label");
    labelElement3.setAttribute("for", "cnpj");
    const labelText3 = document.createTextNode("CNPJ");
    labelElement3.appendChild(labelText3);

    const inputRGElement3 = document.createElement("input");
    inputRGElement3.setAttribute("type", "text");
    inputRGElement3.setAttribute("id", "cnpj");
    inputRGElement3.setAttribute("placeholder", "CNPJ");

    inputElement3.appendChild(labelElement3);
    inputElement3.appendChild(inputRGElement3);

    formElement.appendChild(inputElement3);
  }
}

function storeUser() {
  const getnome = document.querySelector("#nome");
  const getsobrenome = document.querySelector("#sobrenome");
  const getEmail = document.querySelector("#email");
  const getSenha = document.querySelector("#password");
  const getPhone = document.querySelector("#phone");
  const getCep = document.querySelector("#cep");
  const getLogradouro = document.querySelector("#logradouro");
  const getnumero = document.querySelector("#numero");
  const getcomplemento = document.querySelector("#complemento");
  const getbairro = document.querySelector("#bairro");
  const getcidade = document.querySelector("#cidade");
  const getestado = document.querySelector("#estado");
  const gettipo = document.querySelector("#tipo");
  let data;
  let getRG;
  let getOrgao;
  let getCPF;
  let getrazaoSocial;
  let getInscricaoEstadual;
  let getCnpj;

  if (gettipo.value === "Cliente") {
    getRG = document.querySelector("#rg");
    getOrgao = document.querySelector("#orgao");
    getCPF = document.querySelector("#cpf");

    data = {
      nome: getnome.value,
      sobrenome: getsobrenome.value,
      email: getEmail.value,
      senha: getSenha.value,
      phone: getPhone.value,
      cep: getCep.value,
      logradouro: getLogradouro.value,
      numero: getnumero.value,
      complemento: getcomplemento.value,
      bairro: getbairro.value,
      cidade: getcidade.value,
      estado: getestado.value,
      tipo: gettipo.value,
      rg: getRG.value,
      orgaoexp: getOrgao.value,
      cpf: getCPF.value,
    };
    getRG.value = "";
    getOrgao.value = "";
    getCPF.value = "";
  }

  if (gettipo.value === "Fornecedor") {
    getrazaoSocial = document.querySelector("#razao");
    getInscricaoEstadual = document.querySelector("#inscricao");
    getCnpj = document.querySelector("#cnpj");

    data = {
      nome: getnome.value,
      sobrenome: getsobrenome.value,
      email: getEmail.value,
      senha: getSenha.value,
      phone: getPhone.value,
      cep: getCep.value,
      logradouro: getLogradouro.value,
      numero: getnumero.value,
      complemento: getcomplemento.value,
      bairro: getbairro.value,
      cidade: getcidade.value,
      estado: getestado.value,
      tipo: gettipo.value,
      razaoSocial: getrazaoSocial.value,
      inscricaoEstadual: getInscricaoEstadual.value,
      cnpj: getCnpj.value,
    };

    getrazaoSocial.value = "";
    getInscricaoEstadual.value = "";
    getCnpj.value = "";
  }

  localStorage.setItem("User", JSON.stringify(data));

  getnome.value = "";
  getsobrenome.value = "";
  getEmail.value = "";
  getSenha.value = "";
  getPhone.value = "";
  getCep.value = "";
  getLogradouro.value = "";
  getnumero.value = "";
  getcomplemento.value = "";
  getbairro.value = "";
  getcidade.value = "";
  getestado.value = "";
  gettipo.value = "Selecione uma opção";

  window.location = "index.html";
}
