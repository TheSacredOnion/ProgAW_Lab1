const button = document.getElementById("ex1_button");
button.addEventListener("click", function() {
  let numbers = "";
  for (let i = 0; i < 10; i++) {
    numbers += i + ", ";
  }
  document.getElementById("ex1_content").innerText = numbers.slice(0, -2);
});