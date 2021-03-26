
// count the number of spins 
var count = 0
var btn = document.getElementById('btn');

// set the number of spins 

function spin() {
    var fname = document.forms["myForm"]["fname"].value;
    var fphone = document.forms["myForm"]["fphone"].value;
    var femail = document.forms["myForm"]["femail"].value;
    var fpassword = document.forms["myForm"]["fpassword"].value;

    if ((fname == "") || (fphone == "") || (femail == "") || (fpassword == "")) {
        alert("toute les information sont obligatoire!!");
    } else {
        let x = 1000;
        let y = 9999;
        let deg = Math.floor(Math.random() * (x - y)) + y;
        document.getElementsByClassName('box')[0].style.transform = "rotate(" + deg + "deg)";

        var element = document.getElementById('mainbox');
        element.classList.remove('animate');
        setTimeout(function () {
            element.classList.add('animate');
        }, 5000);

        // the resulets

        setTimeout(function () {
            let res;
            y = document.getElementsByClassName("flesh")[0].getBoundingClientRect().top;
            x = document.getElementsByClassName("flesh")[0].getBoundingClientRect().left;
            var w = window.innerWidth;
            if (w < 768) {
                res = document.elementFromPoint(x + 38, y + 46);
            } else {
                res = document.elementFromPoint(x + 20, y + 100);
            }
            document.getElementsByClassName('felic-aff')[0].innerHTML = res.firstChild.innerHTML;
            document.getElementsByClassName('felic-title')[0].classList.add("felic-display");
            document.getElementsByClassName('felic-txt')[0].classList.add("felic-display");
        }, 5000);
        count++;

    }
}

