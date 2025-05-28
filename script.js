
        let items = document.querySelectorAll("#accordion .item .header");

        items.forEach((item) => {
            item.addEventListener('click',(e) => {
                e.currentTarget.closest('.item').classList.toggle("active");
                // alert("wefbd");
            });
        });
  