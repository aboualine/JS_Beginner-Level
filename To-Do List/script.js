let tasks = [];
document.getElementById("btnAdd").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button clicked seccusfully");

    let content = document.getElementById("taskName").value;
    
    if (content.trim() === "") {
        console.log("Empty input not added.");
        return;
    }

    tasks.push(content);

    document.getElementById("taskNameAdded").innerHTML = "";

    for (let x = 0; x < tasks.length; x++) {
        let element = tasks[x];
        document.getElementById("taskNameAdded").innerHTML += "<div class ='divChoix'><input type ='radio'  class='tasksChoix'>"+element+"</input><button class ='rv'>delete</button></div><br>";
        
    }
    console.log(tasks);
});
document.getElementsByClassName("rv").addEventListener("click" , () => {
    let deletedElement = document.getElementById("tasksChoix").value;
    console.log("task : " + deletedElement);
    delete deletedElement;
    let div = document.getElementById("divChoix");
    delete div;
});