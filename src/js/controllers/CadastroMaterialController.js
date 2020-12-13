function storeMaterial() {
  const getTipo = document.querySelector("#tipo");
  const getLocal = document.querySelector("#local");
  const getData = document.querySelector("#data");

  const materiais = JSON.parse(localStorage.getItem("Materiais"));

  const data = {
    id: Date.now(),
    tipo: getTipo.value,
    local: getLocal.value,
    data: getData.value,
  };

  if (materiais) {
    const saveMateriais = [...materiais, data];
    localStorage.setItem("Materiais", JSON.stringify(saveMateriais));
  } else {
    localStorage.setItem("Materiais", JSON.stringify([data]));
  }

  getTipo.value = "";
  getLocal.value = "";
  getData.value = "";

  window.location = "meuPerfil.html";
}
