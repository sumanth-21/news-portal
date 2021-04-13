var head = document.getElementById('head');
var exit = document.getElementById('exit'); //var for exit button added.

    menu.addEventListener('click',function(e) {
        document.getElementById("navigate").style.display ="block";
        head.classList.toggle("header_zindex");
        document.getElementById('logo').classList.add('hide-mobile');
        document.getElementById('profile').classList.add('hide-mobile');
    });

    // exit button js code 
    exit.addEventListener('click',function(e) {
        document.getElementById('navigate').style.display ="none";
        document.getElementById('navigate').classList.toggle('hide-mobile');
    });