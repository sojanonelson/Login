function store() {

  var name = document.getElementById('name');
  var pw = document.getElementById('pw');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (name.value.length == 0) {
    alert('Please fill in name');

  } else {
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
    alert('Your account has been created');
    window.open("cal.html");
  }
}

function go() {
  window.open("index.html");
}