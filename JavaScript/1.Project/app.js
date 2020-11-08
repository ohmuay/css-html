const task = document.querySelector('input#task')
const taskList = document.querySelector('.collection')
const submit = document.querySelector('input.btn')
const clearBtn = document.querySelector('a.clear-tasks')
const filter = document.querySelector('#filter')


loadAllEventListener()


function loadAllEventListener()
{
document.addEventListener('DOMContentLoaded',getTasks)
submit.addEventListener('click',addTask)
taskList.addEventListener('click',removeTask)
clearBtn.addEventListener('click',clearTasks)
filter.addEventListener('keyup',applyFilter)

}

function removeTaskFromLocalStoreage(taskItem){
let tasks
    if(localStorage.getItem('tasks') === null)
    {
        tasks = []
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task,index)
    {
        if(taskItem.textContent === task)
        {
            tasks.splice(index,1)
        }
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
    
}

function getTasks(){
    let tasks
    if(localStorage.getItem('tasks') === null)
    {
        tasks = []
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task)
    {
    //Create li ELEMENT
    let li = document.createElement('li')
     li.className = 'collection-item'
     li.appendChild(document.createTextNode(task))
     
       //Create remove button link
    let removebtn = document.createElement('a')
    removebtn.className = 'delete-item secondary-content'
    removebtn.innerHTML = '<i class="fa fa-remove"></i>'

       //Append remove link to li
    li.appendChild(removebtn)

        //Append li to ul
    taskList.appendChild(li)
    })
}

function applyFilter(e){
    const text = filter.value.toLowerCase()
    // e.preventDefault();
    document.querySelectorAll('li.collection-item').forEach
    (
        function(task)
        {
            const item = task.firstChild.textContent
            if(item.toLowerCase().indexOf(text)!= -1){
                task.style.display = 'block'
            }
            else{
                task.style.display = 'none'
            }
        }
    )
}

function clearLocalStorage(){
    localStorage.clear()
}

function clearTasks(e){
    while(taskList.firstChild)
    {
        taskList.firstChild.remove()
    }
    clearLocalStorage()
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.className === 'delete-item secondary-content')
    {
        if(confirm('Are you Sure?'))
        {
        e.target.parentElement.parentElement.remove()
        removeTaskFromLocalStoreage(e.target.parentElement.parentElement)
        }
    }
    e.preventDefault();
}

function addTask(e){

    if (task.value == '')
    {
        alert("Enter a Value!");
    }else

    {
        //Create li ELEMENT
    let li = document.createElement('li')
     li.className = 'collection-item'
     li.appendChild(document.createTextNode(task.value))
     
       //Create remove button link
    let removebtn = document.createElement('a')
    removebtn.className = 'delete-item secondary-content'
    removebtn.innerHTML = '<i class="fa fa-remove"></i>'

       //Append remove link to li
    li.appendChild(removebtn)

        //Append li to ul
    taskList.appendChild(li)
     

    }
    storeTaskInLocalStorage(task.value)
    task.value = ''

    e.preventDefault();

}

function storeTaskInLocalStorage(task){

    let tasks
    if(localStorage.getItem('tasks') === null)
    {
        tasks = []
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))

}