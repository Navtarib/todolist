function addTask(){
    var input= document.getElementById("taskInput");
    console.log(input.value);
    
    
    var outPut = document.getElementById("taskList");
    console.log(outPut.innerHTML);
    var task=document.createElement("div")
    task.className="task"
    var p = document.createElement("p");
    p.innerHTML=input.value
    var del=document.createElement("button")
    del.innerHTML="Delete"
    task.append(p,del)
    input.value=""
    outPut.appendChild(task);
    // var clearTask = document.getElementById("clearTask");
// clearTask.style.display="block"
del.addEventListener("click",function(){
    task.style.display="none"
})
    var clearTask = document.getElementById("clearTask");
    clearTask.addEventListener("click",function(){
        task.style.display="none"
    })
}
