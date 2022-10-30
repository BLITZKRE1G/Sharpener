let liElement = document.querySelectorAll(".list-group-item");
let count = 0;

liElement.forEach((item) => {
    count++;
    if (count == 4) {
        item.innerHTML += `<li class="new-class" style="list-style: none; color:red; background-color:black">
        Added ITEM 5 by Class Name
    </li>`;
    }
});

let tagList = document.getElementsByTagName('li');


tagList[tagList.length - 1].innerHTML = `<li class="new-class" style="list-style: none; color:red; background-color:black">
Modified ITEM 5 BY TAG NAME
</li>`;
