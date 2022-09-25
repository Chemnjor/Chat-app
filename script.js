let messages = document.getElementById("message")
let textbox = document.getElementById("textbox")
let button = document.getElementById("button")

button.addEventListener("click", function() {
let newMessage = document.createElement("li")

  newMessage.innerHTML = textbox.value //adds text in the textbox to li items

  messages.appendChild(newMessage)
  textbox.value =""
})