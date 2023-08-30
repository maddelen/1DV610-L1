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
