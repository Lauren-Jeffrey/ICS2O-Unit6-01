const randomnumber = Math.floor(Math.random() * 6) + 1;
let myNumber = 0
// myNumber = parseInt(myNumber)
function myFunction() {
  myNumber = document.getElementById('myText').value;
if (randomnumber == parseInt(myNumber))
alert('Correct!');
else alert ('Incorrect')
}