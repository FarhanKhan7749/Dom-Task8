 var form = document.getElementById('addForm');
 var itemsList = document.getElementById('items');
 var button = document.getElementsByTagName('button');
 console.log(button);

 // For submit event
 form.addEventListener('submit',addItems);
 // delete Event
 itemsList.addEventListener('click',removeItems);
 //
 function addItems(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;

    // Create New li element 
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add text node with input 
    li.appendChild(document.createTextNode(newItem));
    // create del button element button
    var deletebtn = document.createElement('button');
    // add classes to deletebtn
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deletebtn.appendChild(document.createTextNode('X'));
    //
    //
    var editBtn = document.createElement('button');
    // add calsses to edit button
    editBtn.className = 'btn btn-danger btn-sm float-right';
    // add text telemt to edit button 
    editBtn.appendChild(document.createTextNode('E'));
    //
    //
    // append delrte btn to list
    li.append(deletebtn);
    // apeemd edit button to list
    li.append(editBtn);
    // append li to list
    itemsList.appendChild(li);
    console.log(li);
 }
 //remove items
 
 function removeItems(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemsList.removeChild(li);  
        }
    }
 }

 