document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button")
  const nameInput = document.getElementById("nameInput")
  const message = document.getElementById("message")
  const quoteElement = document.getElementById("quote")

  button.addEventListener("click", async function () {
    const name = nameInput.value
    if (name) {
      message.textContent = `Nice to meet you, ${name}!`

      const url = 'https://fortune-cookie2.p.rapidapi.com/fortune/by_category?category_key=love_and_relationships'
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fdf5123b82msh8710e686f611bb3p17ea33jsne4459d5720fb',
          'X-RapidAPI-Host': 'fortune-cookie2.p.rapidapi.com'
        }
      }

      try {
        const response = await fetch(url, options)
        const result = await response.json()

        const quote = result.answer
        quoteElement.textContent = quote
      } catch (error) {
        console.error(error)
      }
      
      nameInput.value = ""
    } else {
      message.textContent = "Please enter your name."
    }
  })
})
