let element1 = document.getElementById('items');
// console.log(element1);

let element2 = document.querySelectorAll('.list-group-item');
// console.log(element2);
let count = 0;

element2.forEach((item) => {
    console.log(item);
    count++;
    if (count == 3) {
        item.innerHTML = `<li style="background-color: black; color: white">ITEM 3</li>`
    }
});
