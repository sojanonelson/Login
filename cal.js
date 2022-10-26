var screen = document.getElementById("screen")

function btnClick(value) {
  screen.value += value;

}

function screenClean() {
  screen.value = "";


}

function result() {
  var result = eval(screen.value);
  screen.value = result;
}