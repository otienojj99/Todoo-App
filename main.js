const addBox = document.getElementById("add-box");
const listCont = document.getElementById("list-cont");

function addTask(){
    if(addBox.value ===''){
        alert("You must add text!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = addBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    addBox.value = '';
    saveData();
}
listCont.addEventListener("click", function (e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("done");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

    
},false);
function saveData(){
    localStorage.setItem("data",listCont.innerHTML);
}
function showTask(){
    listCont.innerHTML = localStorage.getItem("data");

}
showTask();