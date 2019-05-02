let todolist = [];
let item = String(document.getElementsByClassName("updateTodo"));
let countId = 0;

function updateTodo(){
    todolist.push({id:countId, item: item});
    document.getElementsByClassName("list").innerHTML="";
}

function searchInTodo(){

}

