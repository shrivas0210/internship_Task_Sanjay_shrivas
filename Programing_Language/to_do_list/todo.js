function AddTask(){
    const newTask = document.createElement('li');
    const taskList = document.getElementById("taskList");
    taskList.appendChild(newTask);
    newTask.textContent = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = " "
    deleteTask(newTask)
    editTask(newTask)
}

function deleteTask(newTask)
{
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}

function editTask(newTask)
{
  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit'
  newTask.appendChild(editBtn)
  editBtn.onclick = function () {
    const newTaskText = prompt("Edit task:", newTask.firstChild.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        newTask.firstChild.textContent = newTaskText;
    }
}
}