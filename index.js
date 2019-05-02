let todolist = [];
let item = String(document.getElementsByClassName("updateTodo"));
let countId = 0;

function updateTodo(){
    todolist.push({id:countId, item: item});
    var li = document.createElement("li");
    li.innerHTML = todolist[item];
    document.body.appendChild(li);
    // document.getElementsByClassName("list").innerHTML="";
}

function searchInTodo(){

}

