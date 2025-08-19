function cadastrar() {
  let user = document.getElementById("cadastroUser").value;
  let pass = document.getElementById("cadastroPass").value;

  if (user && pass) {
    localStorage.setItem(user, pass);
    alert("Usuário cadastrado com sucesso!");
  } else {
    alert("Preencha todos os campos!");
  }
}

function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    document.getElementById("mensagem").innerText = "Login realizado com sucesso!";
  } else {
    document.getElementById("mensagem").innerText = "Usuário ou senha incorretos!";
  }
}