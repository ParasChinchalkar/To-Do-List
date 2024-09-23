const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("List-container");

function addTask(){
    if(inputBox.value.trim() === ""){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This adds the "×" symbol.
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localstorage.setItem("data",listContainer.iinnerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();