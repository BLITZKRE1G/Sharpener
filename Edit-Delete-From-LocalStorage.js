let formElement = document.querySelector("#addForm");
localStorage.clear();

let itemList = document.querySelector('#itemList');
let index = 0;
console.log(localStorage.getItem(`person${2}.name`));

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    let nameValue = document.querySelector("#name").value;
    let addrValue = document.querySelector("#address").value;

    let personObj = {
        name: nameValue,
        address: addrValue
    };

    let liElement = document.createElement('li');
    liElement.innerText = 'Name: ' + personObj.name + ' Address: ' + personObj.address;
    liElement.id = "itemElement";

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.id = 'delete';
    delBtn.className = 'btn btn-danger';



    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.className = 'btn btn-warning';
    editBtn.id = 'edit';


    liElement.appendChild(editBtn);
    liElement.appendChild(delBtn);

    itemList.appendChild(liElement);
    index++;
    localStorage.setItem(`person${index}`, JSON.stringify(personObj));
    console.log(index);

})

itemList.addEventListener('click', function (event) {
    if (event.target.id == 'delete') {
        let li = event.target.parentElement;
        itemList.removeChild(li);
        localStorage.removeItem(`person${index}`);
        index--;
    } else if (event.target.id == 'edit') {
        let nameValue = document.querySelector("#name").value;
        let addrValue = document.querySelector("#address").value;


        let li = event.target.parentElement;
        itemList.removeChild(li);

        let personObj = {
            name: nameValue,
            address: addrValue
        };

        let liElement = document.createElement('li');
        liElement.innerText = 'Name: ' + personObj.name + ' Address: ' + personObj.address;
        liElement.id = "itemElement";
        index--;
        //localStorage.setItem(`person${index}`, JSON.stringify(personObj));
    }
})
