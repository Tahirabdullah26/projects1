const taskinput = document.getElementById('task-input');
entByid('task-input');
const addButton = document.getElementById('add-Button');
const tasklist= document.getElementById('task-list');

addButton.addEventListener('click', function() {
    //retrive the task from the input field
    const taskText= taskinput.value.trim();
    //checkh if the task is not empty
    if(taskText!==""){
        //create new list item element
        const listitem = document.createElement('li');
        //create span for the task text const listitem
        document.createElement('span');
        taskSpan.textcontent=taskText;
        taskSpan.classListadd('task-text');
        //create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.classList.add('delete-button');
        listitem.appendChild(taskSpan);
        listitem.appendChild(deleteButton);
        //append the list item to the tas list
        tasklist.appendChild(listitem);
        //clear the input field
        taskinput.value ="";
    }
    tasklist.addEventListener('click', function(event) {
        //check if the clicked element has the delete-button class
        if(event.target.classList.contains('delete-button'))
        {
            //get the parent list item and remove it from the task list
            const listitem = event.target.parentNode;
            tasklist.removeChild(listitem);
        }
    });
    
});

