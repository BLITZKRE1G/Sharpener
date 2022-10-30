let liElement = document.querySelectorAll(".list-group-item");
let count = 0;

for (let i = 0; i < liElement.length; i++) {
    if (i == 1) {
        liElement[i].innerHTML = `<li class="list-group-item" style="list-style: none; color:green;">
        ITEM 2
    </li>`;
    } else if (i % 2 == 0) {
        liElement[i].innerHTML = `<li class="list-group-item" style="list-style: none; color:blue; background-color:green">
        ODD ITEM
    </li>`;
    }
}
