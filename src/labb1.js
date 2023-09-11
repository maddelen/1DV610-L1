// An array of greetings.
const greetings = [
  'Hello,',
  'Hi there,',
  'Greetings,',
  'Hey, you look lovely,',
  'Nice to meet you,'
]

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('button')
  const nameInput = document.getElementById('nameInput')
  const message = document.getElementById('message')

  /**
   * Event listener for the button's click event.
   * Generates a random greeting and displays it with the user's name, if provided.
   * If no name is provided, a request to enter a name is displayed.
   */
  button.addEventListener('click', function () {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    const name = nameInput.value

    if (name) {
      message.textContent = `${randomGreeting} ${name}!`
      nameInput.value = ''
    } else {
      message.textContent = 'Please enter your name.'
    }
  })
})
