let elementClicked = document.getElementsByTagName("button");
let screen = document.getElementById("screen");
let result = 0 ;
let secondValue = "" ;
for (let index = 0; index < elementClicked.length; index++) {
    const element = elementClicked[index];
    element.addEventListener("click" , () => {
        console.log("element clicked is : "+elementClicked[index].getAttribute("data-value"));
        let valueSelected = elementClicked[index].getAttribute("data-value");
        
        
        switch (valueSelected) {
            case "+":
                result += valueSelected;
                screen.setAttribute("value" ,result);
                break;
            case "-":
                result -= valueSelected;
                break;
            case "*":
                result *= valueSelected;
                break;
            case "/":
                result /=valueSelected;
                break;    
            case "=":
                result;
                break;
            case "AC":
                result ="0";
                screen.setAttribute("value" ,result);
                break;
            default:
                result = 0;
                break;
        }
    });
    
}