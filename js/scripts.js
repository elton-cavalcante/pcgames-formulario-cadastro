const form = document.querySelector("form");

const inputNomeCompleto = document.querySelector("#input-nome-completo");
const inputApelido = document.querySelector("#input-apelido");
const inputEmail = document.querySelector("#input-email");
const inputSenha = document.querySelector("#input-senha");
const inputConfirmaSenha = document.querySelector("#input-confirma-senha");

const labelNomeCompleto = document.querySelector("#label-nome-completo");
const labelApelido = document.querySelector("#label-apelido");
const labelEmail = document.querySelector("#label-email");
const labelSenha = document.querySelector("#label-senha");
const labelConfirmaSenha = document.querySelector("#label-confirma-senha");

const erroVazio = document.querySelectorAll(".erro-vazio");
const erroInvalido = document.querySelectorAll(".erro-invalido");

const identidadeDeGenero = document.querySelector("select");
const inputIdade = document.querySelectorAll(".input-idade");
const labelIdade = document.querySelectorAll(".label-idade");

const inputAceitaTermos = document.querySelector("#input-aceita-termos");
const labelAceitaTermos = document.querySelector("#label-aceita-termos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validaNomeCompleto();
  validaApelido();
  validaEmail();
  validaSenha();
  validaConfirmaSenha();
  validaIdentidadeDeGenero();
  validaIdade();
  validaAceitaTermos();

  validaFormulario();
});

// Valida Todo o Formulário
function validaFormulario() {
  if (
    validaNomeCompleto() &&
    validaApelido() &&
    validaEmail() &&
    validaSenha() &&
    validaConfirmaSenha() &&
    validaIdentidadeDeGenero() &&
    validaIdade() &&
    validaAceitaTermos()
  ) {
    alert("Dados enviados com sucesso!");
    form.submit();
  } else {
    return false;
  }
}

// ---- Primeira Etapa ---- //
// Nome Completo
function validaNomeCompleto() {
  if (inputNomeCompleto.value === "") {
    mostraCampoVazio(inputNomeCompleto, labelNomeCompleto, 0);
    return false;
  } else if (inputNomeCompleto.value.length >= 5) {
    mostraCampoValido(inputNomeCompleto, labelNomeCompleto, 0);
    return true;
  } else {
    mostraCampoInvalido(inputNomeCompleto, labelNomeCompleto, 0);
    return false;
  }
}

// Apelido
function validaApelido() {
  if (inputApelido.value === "") {
    mostraCampoVazio(inputApelido, labelApelido, 1);
    return false;
  } else if (inputApelido.value.length >= 4) {
    mostraCampoValido(inputApelido, labelApelido, 1);
    return true;
  } else {
    mostraCampoInvalido(inputApelido, labelApelido, 1);
    return false;
  }
}

// E-mail
function validaEmail() {
  if (inputEmail.value === "") {
    mostraCampoVazio(inputEmail, labelEmail, 2);
    return false;
  } else if (inputEmail.value.length >= 10 && eEmailValido(inputEmail.value)) {
    mostraCampoValido(inputEmail, labelEmail, 2);
    return true;
  } else {
    mostraCampoInvalido(inputEmail, labelEmail, 2);
    return false;
  }
}

// E-mail Regex
function eEmailValido(inputEmail) {
  const emailRegex = new RegExp(
    // usuario@host.com.br //
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(inputEmail)) {
    return true;
  } else {
    return false;
  }
}

// Senha
function validaSenha() {
  if (inputSenha.value === "") {
    mostraCampoVazio(inputSenha, labelSenha, 3);
    return false;
  } else if (inputSenha.value.length >= 8 && inputSenha.value.length <= 20) {
    mostraCampoValido(inputSenha, labelSenha, 3);
    return true;
  } else {
    mostraCampoInvalido(inputSenha, labelSenha, 3);
    return false;
  }
}

// Confirma Senha
function validaConfirmaSenha() {
  if (inputConfirmaSenha.value === "") {
    mostraCampoVazio(inputConfirmaSenha, labelConfirmaSenha, 4);
    return false;
  } else if (inputConfirmaSenha.value === inputSenha.value) {
    mostraCampoValido(inputConfirmaSenha, labelConfirmaSenha, 4);
    return true;
  } else {
    mostraCampoInvalido(inputConfirmaSenha, labelConfirmaSenha, 4);
    return false;
  }
}

// ---- Segunda Etapa ---- //
// Identidade de Gênero
function validaIdentidadeDeGenero() {
  if (identidadeDeGenero.value === "genero-vazio") {
    identidadeDeGenero.style.border = "1px solid #f90000";
    return false;
  } else if (identidadeDeGenero.value !== "genero-vazio") {
    identidadeDeGenero.style.border = "1px solid #10b843";
    return true;
  }
}

// Idade
function validaIdade() {
  if (inputIdade[0].checked === false && inputIdade[1].checked === false) {
    labelIdade[0].style.color = "#f90000";
    labelIdade[1].style.color = "#f90000";
    return false;
  } else if (inputIdade[0].checked === true && inputIdade[1].checked === false) {
    labelIdade[0].style.color = "#10b843";
    labelIdade[1].style.color = "#000";
    return true;
  } else if (inputIdade[0].checked === false && inputIdade[1].checked === true) {
    labelIdade[0].style.color = "#000";
    labelIdade[1].style.color = "#10b843";
    return true;
  }
}

// Aceita Termos
function validaAceitaTermos() {
  if (inputAceitaTermos.checked === false) {
    return false;
  } else if (inputAceitaTermos.checked === true) {
    return true;
  }
}

// Funções de estilo
function mostraCampoVazio(input, label, indiceErro) {
  input.style.borderBottomColor = "#f90000";
  input.style.transition = "0.3s";

  label.style.color = "#f90000";
  label.style.transition = "0.3s";
  label.style.transform = "translateY(-4.2vh)";

  erroVazio[indiceErro].style.display = "block";
  erroInvalido[indiceErro].style.display = "none";
  return;
}

function mostraCampoValido(input, label, indiceErro) {
  input.style.borderBottomColor = "#10b843";
  input.style.transition = "0.3s";
  input.style.color = "#10b843";

  label.style.color = "#0200c0";
  label.style.transition = "0.3s";
  label.style.transform = "translateY(-4.2vh)";

  erroVazio[indiceErro].style.display = "none";
  erroInvalido[indiceErro].style.display = "none";
  return;
}

function mostraCampoInvalido(input, label, indiceErro) {
  input.style.borderBottomColor = "#f90000";
  input.style.transition = "0.3s";
  input.style.color = "#f90000";

  label.style.color = "#f90000";
  label.style.transition = "0.3s";
  label.style.transform = "translateY(-4.2vh)";

  erroVazio[indiceErro].style.display = "none";
  erroInvalido[indiceErro].style.display = "block";
  return;
}
