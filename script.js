var todolist = new Array();

//function to add task in the list
function additem() {
    var task = document.getElementById('title').value;
    todolist.push(task);
    console.log(todolist);
}

//function to display the list of tasks
function display() {
    clear();
    var task = document.getElementById('title').value;
    const items = document.getElementById('items');
    const creatediv = (task, index) => {
        const div = document.createElement('div');
        div.classList.add('todoitems');
        div.style.display = 'flex';
        div.style.flexDirection = 'row';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'space-between';
        div.style.width = '75vw';
        div.style.alignSelf = 'center';
        const li = document.createElement('h5');
        li.style.fontSize = '20px';
        li.style.fontWeight = '100';
        li.textContent = task;
        const button = document.createElement('button');
        button.textContent = 'Remove Task';
        button.addEventListener('click', () => removeitem(index));
        const button1 = document.createElement('button');
        button1.textContent = 'Edit Task';
        button1.addEventListener('click', () => edititem(index));
        div.appendChild(li);
        div.appendChild(button1);
        div.appendChild(button);
        items.appendChild(div);
        console.log(index, 'i am here');

    }
    todolist.forEach(func = (task, index) => {
        creatediv(task, index);
    });
}

//function to remove a task from the list
function removeitem(index) {
    todolist.splice(index, 1);
    console.log(todolist);
    display();
}

//function to be called on click by the user
function adddisplay() {
    additem();
    display();
}

//function used to clear the div of tasks 
function clear() {
    document.getElementById('items').innerHTML = "";
}

//function used to edit the task
function edititem(index){
    var editedtask = prompt("Edit task");
    todolist[index]= editedtask;
    display();
}
