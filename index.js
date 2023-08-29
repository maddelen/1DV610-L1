document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button")
  const nameInput = document.getElementById("nameInput")
  const message = document.getElementById("message")

  button.addEventListener("click", function () {
      const name = nameInput.value
      if (name) {
          message.textContent = `Nice to meet you, ${name}!`
          nameInput.value = ""
      } else {
          message.textContent = "Please enter your name."
      }
  })
})