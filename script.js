let inputs = document.querySelector("#inp");
let text = document.querySelector(".list-container");

function add() {
    if (inputs.value == "") {
        alert("enter the task");
    }
    else {
        let newElement = document.createElement("li");
        newElement.innerHTML = `${inputs.value} "<i>delete</i>"`;
        text.appendChild(newElement);
        inputs.value="";
        newElement.querySelector("i").addEventListener("click", remove)
        function remove() {
            newElement.remove();
        }
    }
}