const loginInfo = JSON.parse(localStorage.getItem("SustainableLogin"));
const userInfo = JSON.parse(localStorage.getItem("User"));
const nameElement = document.getElementById("infoContainer");

const strongElement = document.createElement("strong");
const textStrong = document.createTextNode(
  userInfo.nome + " " + userInfo.sobrenome
);
strongElement.appendChild(textStrong);
nameElement.appendChild(strongElement);

if (!loginInfo) {
  window.location = "index.html";
}
