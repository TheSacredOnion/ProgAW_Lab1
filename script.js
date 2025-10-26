// Zadanie 1
(function () {
    var button = document.getElementById("ex1_button");
    var content = document.getElementById("ex1_content");
    if (button && content) {
        button.addEventListener("click", function () {
            var numbers = "";
            for (var i = 0; i < 10; i++) {
                numbers += i + ", ";
            }
            content.innerText = numbers.slice(0, -2);
        });
    }
})();
// Zadanie 2
(function () {
    var inputNumber = document.getElementById("ex2_text");
    var contentDiv = document.getElementById("ex2_content");
    if (inputNumber && contentDiv) {
        inputNumber.addEventListener("input", function () {
            var phoneNumber = inputNumber.value;
            var errors = [];
            if (phoneNumber.length !== 9) {
                errors.push("Długość numeru telefonu musi wynosić 9 cyfr.");
            }
            if (/[a-zA-Z]/.test(phoneNumber)) {
                errors.push("Numer telefonu nie może zawierać liter.");
            }
            if (/[!@#$%^&*(),.?\":{}|<>]/.test(phoneNumber)) {
                errors.push("Numer telefonu nie może mieć znaków specjalnych.");
            }
            if (errors.length === 0) {
                contentDiv.textContent = "Numer telefonu jest poprawny.";
            }
            else {
                contentDiv.innerHTML = errors.join("<br>");
            }
        });
    }
})();
// Zadanie 3
(function () {
    var ex3Draggable = document.getElementById("ex3_element");
    var ex3Dropzones = [
        document.getElementById("ex3_one"),
        document.getElementById("ex3_two")
    ];
    if (ex3Draggable) {
        ex3Draggable.addEventListener("dragstart", function (event) {
            if (event.dataTransfer) {
                event.dataTransfer.setData("text/plain", ex3Draggable.id);
            }
        });
    }
    ex3Dropzones.forEach(function (zone) {
        if (!zone)
            return;
        zone.addEventListener("dragover", function (event) {
            event.preventDefault();
        });
        zone.addEventListener("drop", function (event) {
            event.preventDefault();
            if (!event.dataTransfer)
                return;
            var data = event.dataTransfer.getData("text/plain");
            var draggableElement = document.getElementById(data);
            if (draggableElement) {
                zone.appendChild(draggableElement);
            }
        });
    });
})();
// Zadanie 4
(function () {
    var element = document.getElementById("ex6_element");
    var button = document.getElementById("ex6_animate_button");
    console.log(element, button);
    if (!element || !button)
        return;
    button.addEventListener("click", function () {
        var endPosition = window.innerWidth - element.offsetWidth - 20;
        element.style.left = "".concat(endPosition, "px");
        console.log(endPosition);
        var handleTransitionEnd = function () {
            element.style.left = '0px';
            element.removeEventListener('transitionend', handleTransitionEnd);
        };
        element.addEventListener('transitionend', handleTransitionEnd);
    });
})();
// Zadanie 5
(function () {
    var button = document.getElementById("ex4_button");
    if (!button)
        return;
    button.addEventListener("click", function () {
        var randomValue = function () { return Math.floor(Math.random() * 151) + 50; };
        var r = randomValue();
        var g = randomValue();
        var b = randomValue();
        document.body.style.backgroundColor = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    });
})();
