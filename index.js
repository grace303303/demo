//jshint esversion: 6

function submitFunction() {
  var greetingsValue = document.getElementById("Greetings").value;
  var contentValue = document.getElementById("Content").value.replace(/(?:\r\n|\r|\n)/g, '<br>');
  var linkValue = "https://" + document.getElementById("buttonLink").value;
  document.getElementById("changeGreetings").innerHTML = greetingsValue;
  document.getElementById("changeContent").innerHTML = contentValue;
  document.getElementById("changeLink").href = linkValue;
  console.log(linkValue);
}
