function HelloConsole() {
 console.log("Hello, World!");
}
function HelloPopup() {
  alert("Hello, World!");
}
function HelloBrowser() {
var p = document.getElementById("hello");
p.innerHTML = "Hello, World!";
}
function HelloStranger() {
  var b = prompt("Enter your name");
  alert("Hello, " + b + "!");
}
