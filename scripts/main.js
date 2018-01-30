var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Hory.jpg') {
      myImage.setAttribute ('src','images/Hory2.jpg');
    } else {
      myImage.setAttribute ('src','images/Hory.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Své jméno - uveď vokativem');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Krásné stránky, ' + myName + "!";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Krásné stránky, ' + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}
