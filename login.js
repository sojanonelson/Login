function check() {
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');

  if (userName.value == storedName && userPw.value == storedPw) {
    window.open('index.html');
  } else {
    alert('Error on login');
  }
}

function go() {
  window.open("NewAC.html");
}


