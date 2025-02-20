function ValidaNome(nome){
    const regexNome = /^[a-zA-ZÀ-ÿ\s\-']+$/;
    const isvalid = nome.lenght >= 2 && regexNome.test(nome);
    return isvalid
}

function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvalid = regexEmail.test(email);
    return isvalid;
}

export function validaUsuario(nome, email) {
    const nomeValido = ValidaNome(nome);
    const emailValido = validaEmail(email);

    const usuarioValido = nomeValido && emailValido;

    if (usuarioValido) {
        return {status: true, mensagem: ''};
    } else {
        return {status: false, mensagem: 'Nome e/ou E-mail inválido(s).'};
    }
}