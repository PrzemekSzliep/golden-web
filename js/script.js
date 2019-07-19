var scrollpos = window.scrollY;
var nav = document.getElementById("nav");

function add_class_on_scroll() {
    nav.classList.add("fixed");
}

function remove_class_on_scroll() {
    nav.classList.remove("fixed");
}

window.addEventListener('scroll', function(){
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});