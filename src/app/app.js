const form = document.querySelector("#form")
const nameInput = form.querySelector("#firstName")
const surnameInput = form.querySelector("#surname")
const passInput = form.querySelector("#password")
const emailInput = form.querySelector("#email")
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const nameValidation = () => {
    const nameError = form.querySelector(".name-error")
    const errorIcon = form.querySelector("#firstName").parentElement.nextElementSibling
    if (nameInput.value.length === 0) {
        nameError.style.display = "block"
        nameInput.classList.add("invalid")
        return errorIcon.style.display = "block"
    }
    nameError.style.display = "none"
    nameInput.classList.remove("invalid")
    errorIcon.style.display = "none"
}

const surnameValidation = () => {
    const surnameError = form.querySelector(".surname-error")
    const errorIcon = form.querySelector("#surname").parentElement.nextElementSibling
    if (surnameInput.value.length === 0) {
        surnameError.style.display = "block"
        surnameInput.classList.add("invalid")
        return errorIcon.style.display = "block"

    }
    surnameError.style.display = "none"
    surnameInput.classList.remove("invalid")
    errorIcon.style.display = "none"
}

const emailValidation = () => {
    const emailError = form.querySelector(".email-error")
    const errorIcon = form.querySelector("#email").parentElement.nextElementSibling
    if (!emailInput.value.match(mailFormat)) {
        emailError.style.display = "block"
        emailInput.classList.add("invalid")
        return errorIcon.style.display = "block"

    }
    emailError.style.display = "none"
    emailInput.classList.remove("invalid")
    errorIcon.style.display = "none"
}

const passValidation = () => {
    const passError = form.querySelector(".password-error")
    const errorIcon = form.querySelector("#password").parentElement.nextElementSibling
    if (passInput.value.length === 0) {
        passError.style.display = "block"
        passInput.classList.add("invalid")
        return errorIcon.style.display = "block"

    }
    passError.style.display = "none"
    passInput.classList.remove("invalid")
    errorIcon.style.display = "none"
}

const validate = () => {
    nameValidation()
    surnameValidation()
    emailValidation()
    passValidation()
}

const handleSubmit = (e) => {
    e.preventDefault()
    validate()
}

form.addEventListener("submit", handleSubmit)
nameInput.addEventListener("keyup", nameValidation)
surnameInput.addEventListener("keyup", surnameValidation)
emailInput.addEventListener("keyup", emailValidation)
passInput.addEventListener("keyup", passValidation)