const userData = JSON.parse(localStorage.getItem("User"));

if (userData.tipoUsuario === "Cliente") {
  alert("Você não tem autorização para acessar essa página!");
  window.location = "meuPerfilCliente.html";
}
