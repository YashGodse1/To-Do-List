let inputTask = document.querySelector("#inputTask");
let button = document.querySelector("#btn1");
inputTask.focus();
let tasks = [];
let myTasks=[];
// let i=0;
let j=0;

button.addEventListener("click",()=>{
    addTask();
});
inputTask.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        addTask();
    }
});

function addTask(){
    tasks.push(inputTask.value);
    console.log(tasks);
    inputTask.value="";
    inputTask.focus();
    myTasks.push(tasks[0]);
    displayTask(tasks);
    tasks.pop();
}

let displayTask=(tasks)=>{
    // display.innerText = tasks;
    tasks.forEach((val)=>{
        let listItems = document.createElement("li");
        listItems.setAttribute("id",j++);
        listItems.innerText = val;

        let button2 = document.createElement("button");
        // button2.setAttribute("id",i++);
        // button2.getAttribute("id");
        button2.innerText = "Delete";

        let button3 = document.createElement("button");
        button3.innerText = "Complete";


        adding.append(listItems);
        listItems.appendChild(button2);
        listItems.appendChild(button3);
        button2.style.marginLeft = "5px";
        button2.style.marginRight = "5px";
        // console.log(i);

        button2.addEventListener("click",()=>{
            // let ids = button2.getAttribute("id");
            let listids = listItems.getAttribute("id");
            // console.log(listids);
            deleteTask(listids);
        });

        button3.addEventListener("click",()=>{
            let completeIds = listItems.getAttribute("id");
            completeTask(completeIds);
        });
    });
}

let deleteTask = (listids) => {
    let deleteElement = document.getElementById(listids);
    deleteElement.remove();
}

let completeTask = (completeIds) => {
    document.getElementById(completeIds).style.textDecoration = "line-through green";
}

    // let liaccess = document.getElementById("#0");
    // let parentelement = liaccess.parentNode;
    // console.log(parentelement);
