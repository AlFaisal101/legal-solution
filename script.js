
let items = document.querySelectorAll('#accordion .item .header');

items.forEach((item) => {
    item.addEventListener('click', (e) => {

        // remove active class from all items
        items.forEach((header) => {      
            header.closest('.item').classList.remove('active');
        });
        
        // this change the clicked item
        e.currentTarget.closest('.item').classList.toggle('active');
    });
});