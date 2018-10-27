var items = document.querySelectorAll('.menu>a.item');

items.forEach(function(item, index) {
    item.addEventListener('click', function() {
        this.classList.add('active');
        if (index == 0) {
            items[1].classList.remove('active');
            items[2].classList.remove('active');
            $("#page1").fadeIn(500);
            $("#page2").fadeOut(500);
            $("#page3").fadeOut(500);
        } else if (index == 1) {
            items[0].classList.remove('active');
            items[2].classList.remove('active');
            $("#page1").fadeOut(500);
            $("#page2").show(500);
            $("#page3").hide(500);
        } else {
            items[0].classList.remove('active');
            items[1].classList.remove('active');
            $("#page1").fadeOut(500);
            $("#page2").hide(500);
            $("#page3").show(500);
        }
    })
})


