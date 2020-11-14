const infoLogin = JSON.parse(localStorage.getItem("SustainableLogin"));

if (infoLogin && infoLogin.isLogged) {
  window.location = "meuPerfil.html";
}

function login() {
  const userInfo = JSON.parse(localStorage.getItem("User"));
  const getEmail = document.querySelector("#email");
  const getSenha = document.querySelector("#password");
  console.log(userInfo);

  if (!userInfo) {
    alert("Usuário não encontrado!");
  } else {
    if (
      
      userInfo.email === getEmail.value &&

           userInfo.senha === getSenha.value
    
    ) {
      localStorage.setItem(
        "SustainableLogin",
        JSON.stringify({ isLogged: true })
      );
      window.location = "meuPerfil.html";
    } else {
      alert("Usuário não encontrado!");
    }
  }

 

  getEmail.value = "";
  getSenha.value = "";
}
