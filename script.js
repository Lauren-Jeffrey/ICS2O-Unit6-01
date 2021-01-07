const randomnumber = Math.floor(Math.random() * 6) + 1
let myNumber = 0
// myNumber = parseInt(myNumber)
function myFunction () {
  myNumber = document.getElementById('my-text').value
  if (randomnumber === parseInt(myNumber)) {
    alert('Correct!')
  } 
  else alert('Incorrect, try again.')
}