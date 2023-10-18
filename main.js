function addNewTask(){
var list = document.getElementById("list");
var text = document.getElementById("task_name").value;

if(text.length ===0){
    alert("alimento não encontrado, por favor digite pelo menos 1 caracter");
    return;
}
if(text==="arroz"){
    alert("arroz 120kcall");
    return;
}



var listItem = document.createElement("li");
listItem.className="list-item";
const textElement = document.createTextNode(text);



listItem.appendChild(textElement);
list.appendChild(listItem);
}