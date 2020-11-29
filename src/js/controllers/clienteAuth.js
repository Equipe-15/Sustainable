const userData = JSON.parse(localStorage.getItem("User"));

if (userData.tipoUsuario === "Fornecedor") {
  alert("Você não tem autorização para acessar essa página!");
  window.location = "meuPerfil.html";
}
