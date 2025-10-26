// Zadanie 1
(() => {
  const button = document.getElementById("ex1_button") as HTMLButtonElement | null;
  const content = document.getElementById("ex1_content") as HTMLDivElement | null;
  if (button && content) {
    button.addEventListener("click", () => {
      let numbers = "";
      for (let i = 0; i < 10; i++) {
        numbers += i + ", ";
      }
      content.innerText = numbers.slice(0, -2);
    });
  }
})();

// Zadanie 2 oraz Zadanie 6
(() => {
  const inputNumber = document.getElementById("ex2_text") as HTMLInputElement | null;
  const contentDiv = document.getElementById("ex2_content") as HTMLDivElement | null;
  const counterDiv = document.getElementById("ex2_counter") as HTMLDivElement | null;

  if (inputNumber && contentDiv && counterDiv) {
    inputNumber.addEventListener("input", () => {
      const phoneNumber = inputNumber.value;
      let errors: string[] = [];

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
      } else {
          contentDiv.innerHTML = errors.join("<br>");
      }
      counterDiv.textContent = `Wpisano ${phoneNumber.length} znaków`;
    });
  }
})();

// Zadanie 3
(() => {
  const ex3Draggable = document.getElementById("ex3_element") as HTMLElement | null;
  const ex3Dropzones: (HTMLElement | null)[] = [
    document.getElementById("ex3_one"),
    document.getElementById("ex3_two")
  ];

  if (ex3Draggable) {
    ex3Draggable.addEventListener("dragstart", (event: DragEvent) => {
      if (event.dataTransfer) {
        event.dataTransfer.setData("text/plain", ex3Draggable.id);
      }
    });
  }

  ex3Dropzones.forEach(zone => {
    if (!zone) return;

    zone.addEventListener("dragover", (event: DragEvent) => {
      event.preventDefault();
    });

    zone.addEventListener("drop", (event: DragEvent) => {
      event.preventDefault();
      if (!event.dataTransfer) return;

      const data = event.dataTransfer.getData("text/plain");
      const draggableElement = document.getElementById(data);
      if (draggableElement) {
        zone.appendChild(draggableElement);
      }
    });
  });
})();

// Zadanie 4
(() => {
    const element = document.getElementById("ex6_element") as HTMLElement | null;
    const button = document.getElementById("ex6_animate_button") as HTMLButtonElement | null;
    console.log(element, button);
    if (!element || !button) return;

    button.addEventListener("click", () => {
        const endPosition = window.innerWidth - element.offsetWidth - 20;

        element.style.left = `${endPosition}px`;
        console.log(endPosition);

        const handleTransitionEnd = () => {
            element.style.left = '0px';
            element.removeEventListener('transitionend', handleTransitionEnd);
        };

        element.addEventListener('transitionend', handleTransitionEnd);
    });
})();

// Zadanie 5
(() => {
    const button = document.getElementById("ex4_button") as HTMLButtonElement | null;
    if (!button) return;
    button.addEventListener("click", () => {
        const randomValue = () => Math.floor(Math.random() * 151) + 50;
        const r = randomValue();
        const g = randomValue();
        const b = randomValue();
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
})();