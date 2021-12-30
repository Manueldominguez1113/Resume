(function() {
    let listener1 = function () {
            let body = document.body;
            body.classList.toggle("dark-mode");

    }

    let button = document.getElementById("btn");
    button.addEventListener('click', listener1);


let screenTop = function (){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    let buttonTop = document.getElementById("topBtn")
    buttonTop.addEventListener('click',screenTop);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            buttonTop.style.display = "block";
        } else {
            buttonTop.style.display = "none";
        }
    }

})();
