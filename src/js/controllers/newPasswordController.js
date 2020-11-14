function changePassword() {
  const newPassword = document.querySelector("#newpassword");
  const repeatPassword = document.querySelector("#repeatpassword");

  if (newPassword.value != repeatPassword.value) {
    alert("A senhas não coincidem!");
    return;
  }

  const user = JSON.parse(localStorage.getItem("User"));

  console.log(user);

  user.senha = newPassword.value;

  localStorage.removeItem("User");

  localStorage.setItem("User", JSON.stringify(user));

  window.location = "index.html";
}
