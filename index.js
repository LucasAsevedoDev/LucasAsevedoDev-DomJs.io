function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password === passwordConfirmation) {
        alert("Uusuário " + username + " cadastrado com sucesso!")
    } else {
        alert("As senhas são diferentes!")
    }
}
