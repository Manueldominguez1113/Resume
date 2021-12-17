(function() {
    let listener1 = function () {
            let body = document.body;
            body.classList.toggle("dark-mode");

    }

    let button = document.getElementById("btn");
    button.addEventListener('click', listener1);


})();
