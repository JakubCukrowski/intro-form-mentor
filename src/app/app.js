const form = document.querySelector("#form")

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted!")
}

form.addEventListener("submit", handleSubmit)