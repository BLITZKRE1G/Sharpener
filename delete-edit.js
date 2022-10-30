let submit = document.querySelector('#addForm');
console.log(submit);

let itemList = document.querySelector('#items');
console.log(itemList);

itemList.addEventListener('click', function (e) {
    if (e.target.className == 'btn btn-danger btn-sm float-right') {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
})



submit.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(1);

    //Get Input Value
    let newItem = document.querySelector('#item').value;
    //Create li Element
    let li = document.createElement('li');
    li.className = 'list-group-item';
    console.log(li);
    //Add TextNode with input Value
    li.appendChild(document.createTextNode(newItem));
    console.log(newItem);

    itemList.appendChild(li);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right';

    deleteBtn.innerText = 'DELETE';
    console.log(deleteBtn);
    li.appendChild(deleteBtn);

})



