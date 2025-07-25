let screen = document.getElementById("screen");
let buttons = document.getElementsByTagName("button");

let expression = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let value = buttons[i].getAttribute("data-value");

        if (value === "AC") {
            expression = "";
        } else if (value === "=") {
            try {
                expression = eval(expression).toString();
            } catch (error) {
                screen.value = "Error";
                expression = "";
            }
        } else {
            expression += value;
        }

        screen.value = expression;
    });
}

