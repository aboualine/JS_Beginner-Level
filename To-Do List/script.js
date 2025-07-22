let table = [];

document.getElementById("btnAdd").addEventListener("click" , (event) => {
    event.preventDefault();
    let inputContent = document.getElementById("taskName").value;

    function deleteTask(event) {
        console.log("btn delete clicked");
        const button = event.target;
        const idToDelete = parseInt(button.getAttribute("data-id"));
        const index = table.findIndex(task => task.id === idToDelete);
        if (index !== -1) {
            const removed = table.splice(index, 1);
            console.log(`Deleted task:`, removed);
        }
        const parentDiv = button.parentElement;
        parentDiv.remove();
        console.log("the new table is : "+table);
    }

    if (inputContent === "") {
        window.alert("you can't enter a null value");
    }
    else {
        console.log("btn clicked!!!!");
        // table.push(inputContent);
        const taskId = Date.now(); // Unique ID
        const taskObj = { id: taskId, label: inputContent };
        table.push(taskObj);
        let parentDiv = document.getElementById("taskNameAdded");
        let divToAdd = document.createElement("div");
        let radioBtn = document.createElement("input");
        radioBtn.setAttribute("type", "radio");
        radioBtn.setAttribute("value",inputContent);
        radioBtn.setAttribute("name","task");
        let label = document.createElement("label");
        label.textContent = inputContent;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.setAttribute("id", "delete");
        deleteBtn.setAttribute("data-value", inputContent);
        deleteBtn.setAttribute("data-id", taskId);
        divToAdd.appendChild(radioBtn);
        divToAdd.appendChild(label);
        divToAdd.appendChild(deleteBtn);
        parentDiv.appendChild(divToAdd);
        document.getElementById("taskName").value = "";
        console.log("value added is : "+inputContent);
        console.log(table);
        document.getElementById("delete").addEventListener("click" , deleteTask);
        radioBtn.addEventListener("click" , checkTask);
        function checkTask() {
            label.style.color = "white";
            label.style.textDecoration = "line-through";
            divToAdd.style.backgroundColor = "lightgreen";
        }

    }
    
});
