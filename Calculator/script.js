let currentDisplay = "";

function append(value) {
    currentDisplay += value;
    document.getElementById("display").textContent = currentDisplay;
}

function clearDisplay() {
    currentDisplay = "";
    document.getElementById("display").textContent = "0";
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay);
        document.getElementById("display").textContent = currentDisplay;
    } catch (error) {
        document.getElementById("display").textContent = "Error";
    }
}


document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (/[0-9+\-*/.=]|Enter|Escape/.test(key)) {
        event.preventDefault();
    }

    switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            append(key);
            break;
        case "Enter":
            calculate();
            break;
        case "Escape":
            clearDisplay();
            break;
    }
});
