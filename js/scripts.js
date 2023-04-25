const form = document.querySelector("form");

const inputNome = document.querySelector("#input-nome");
const inputApelido = document.querySelector("#input-apelido");
const inputEmail = document.querySelector("#input-email");
const inputSenha = document.querySelector("#input-senha");
const inputConfirmaSenha = document.querySelector("#input-confirma-senha");

const labelNome = document.querySelector("#label-nome");
const labelApelido = document.querySelector("#label-apelido");
const labelEmail = document.querySelector("#label-email");
const labelSenha = document.querySelector("#label-senha");
const labelConfirmaSenha = document.querySelector("#label-confirma-senha");

const spanErroVazio = document.querySelectorAll(".span-erro-vazio");
const spanErroInvalido = document.querySelectorAll(".span-erro-invalido");


form.addEventListener("submit", (evento) => {

    evento.preventDefault();

    if (inputNome.value === "") {
        mostraCampoVazio(inputNome, labelNome, 0);
        return;

    } else if (inputNome.value.length < 5 || inputNome.value.length > 60) {
        mostraCampoInvalido(inputNome, labelNome, 0);
        return;

    }

    if (inputApelido.value === "") {
        mostraCampoVazio(inputApelido, labelApelido, 1);
        return;

    } else if (inputApelido.value.length < 5 || inputApelido.value.length > 30) {
        mostraCampoInvalido(inputApelido, labelApelido, 1);
        return;

    }

    if (inputEmail.value === "") {
        mostraCampoVazio(inputEmail, labelEmail, 2);
        return;

    } else if (inputEmail.value.length < 10 || !eEmailValido(inputEmail.value)) {
        mostraCampoInvalido(inputEmail, labelEmail, 2);
        return;

    }

    if (inputSenha.value === "") {
        mostraCampoVazio(inputSenha, labelSenha, 3);
        return;

    } else if (!validaSenha(inputSenha.value, 8, 20)) {
        mostraCampoInvalido(inputSenha, labelSenha, 3);
        return;

    }

    if (inputConfirmaSenha.value === "") {
        mostraCampoVazio(inputConfirmaSenha, labelSenha, 4);
        return;

    } else if (inputConfirmaSenha !== inputSenha) {
        mostraCampoInvalido(inputConfirmaSenha, labelConfirmaSenha, 4);
        return;
    }

    form.submit();

});

function mostraCampoVazio(input, label, indiceErro) {

    input.style.borderBottomColor = "#f90000";
    input.style.color = "#f90000";
    label.style.color = "#f90000";

    spanErroVazio[indiceErro].style.display = "block";
    spanErroInvalido[indiceErro].style.display = "none";

}

function mostraCampoInvalido(input, label, indiceErro) {

    input.style.borderBottomColor = "#f90000";
    input.style.color = "#f90000";
    input.style.transition = "300ms";

    label.style.color = "#f90000";
    label.style.transition = "300ms";

    spanErroVazio[indiceErro].style.display = "none";
    spanErroInvalido[indiceErro].style.display = "block";

}

function mostraCampoValido(input, label, indiceErro) {

    input.style.borderBottomColor = "#10b843";
    input.style.color = "#10b843";
    input.style.transition = "300ms";

    label.style.color = "#10b843";
    label.style.transition = "300ms";

    spanErroVazio[indiceErro].style.display = "none";
    spanErroInvalido[indiceErro].style.display = "none";
}

function validaNome() {

    if (inputNome.value.length >= 5) {
        mostraCampoValido(inputNome, labelNome, 0);
        return;

    } else {
        mostraCampoInvalido(inputNome, labelNome, 0);

    }

}

function validaApelido() {

    if (inputApelido.value.length >= 5) {
        mostraCampoValido(inputApelido, labelApelido, 1);
        return;

    } else {
        mostraCampoInvalido(inputApelido, labelApelido, 1);

    }
}

function validaEmail() {

    if (inputEmail.value.length >= 10 && eEmailValido(inputEmail.value)) {
        mostraCampoValido(inputEmail, labelEmail, 2);
        return;

    } else {
        mostraCampoInvalido(inputEmail, labelEmail, 2);

    }
}

function validaSenha() {

    if (eSenhaValida(inputSenha.value, 8, 20) !== inputConfirmaSenha) {
        mostraCampoInvalido(inputSenha, labelSenha, 3);
        mostraCampoInvalido(inputConfirmaSenha, labelConfirmaSenha, 4);
        return;

    } else {
        mostraCampoValido(inputSenha, labelSenha, 3);
        mostraCampoValido(inputConfirmaSenha, labelConfirmaSenha, 4);

    }
}

function validaConfirmaSenha() {

    if (inputConfirmaSenha.value !== inputSenha.value) {
        mostraCampoInvalido(inputSenha, labelSenha, 3);
        mostraCampoInvalido(inputConfirmaSenha, labelConfirmaSenha, 4);
        return;

    } else {
        mostraCampoValido(inputSenha, labelSenha, 3);
        mostraCampoValido(inputConfirmaSenha, labelConfirmaSenha, 4);

    }
}

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

function eSenhaValida(inputSenha, minimoDigitos, maximoDigitos) {

    if (inputSenha.length >= minimoDigitos && inputSenha.length <= maximoDigitos) {
        return true;

    } else {
        return false;
    }

}