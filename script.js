// Zadanie 1
const button = document.getElementById("ex1_button");
button.addEventListener("click", function() {
  let numbers = "";
  for (let i = 0; i < 10; i++) {
    numbers += i + ", ";
  }
  document.getElementById("ex1_content").innerText = numbers.slice(0, -2);
});

// Zadanie 2
const inputNumber = document.getElementById("ex2_text");
const contentDiv = document.getElementById("ex2_content");

function validatePhoneNumber() {
  const phoneNumber = inputNumber.value;
  let errors = [];

  if (phoneNumber.length !== 9) {
    errors.push("Długość numeru telefonu musi wynosić 9 cyfr.");
  }
  if (/[a-zA-Z]/.test(phoneNumber)) {
    errors.push("Numer telefonu nie może zawierać liter.");
  }
  if (/[!@#$%^&*(),.?":{}|<>]/.test(phoneNumber)) {
    errors.push("Numer telefonu nie może mieć znaków specjalnych.");
  }

  if (errors.length === 0) {
    contentDiv.textContent = "Numer telefonu jest poprawny.";
  } else {
    contentDiv.innerHTML = errors.join("<br>");
  }
}

inputNumber.addEventListener("input", validatePhoneNumber);

// Zadanie 3

const ex3Draggable = document.getElementById("ex3_element");
const ex3Dropzones = [
  document.getElementById("ex3_one"),
  document.getElementById("ex3_two")
];

ex3Draggable.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
});

ex3Dropzones.forEach(zone => {
  zone.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  zone.addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(data);
    zone.appendChild(draggableElement);
  });
});