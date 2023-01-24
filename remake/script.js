// Author: Nicolò Donvito
// Date of creation: 18/12/2022

// Quando il bottone cta-ppdt viene premuto, sposta visuale su ppdt
$(document).ready(() => {
    $('#cta-ppdt').click(() => {
        $('html,body').animate({
            'scrollTop': $('#about').offset().top
        }, 400);
    });
});

// Quando il bottone btn-about viene premuto, sposta visuale su about
$(document).ready(() => {
    $('#btn-about').click(() => {
        $('html,body').animate({
            'scrollTop': $('#about').offset().top
        }, 400);
    });
});

// Quando il bottone btn-nav-preventivo viene premuto, sposta visuale su preventivo
$(document).ready(() => {
    $('#btn-nav-preventivo').click(() => {
        $('html,body').animate({
            'scrollTop': $('#preventivo').offset().top
        }, 400);
    });
});

// Quando il bottone btn-privato viene premuto, sposta visuale su privato
$(document).ready(() => {
    $('#btn-nav-casa').add('#btn-nav-lavoro').add('#btn-ppdt-casa').add('#btn-ppdt-lavoro').add('#btn-ppdt-casa2').add('#btn-ppdt-lavoro2').click(() => {
        $('html,body').animate({
            'scrollTop': $('#ambienti').offset().top
        }, 400);
    });
});


function hbmenu() {
    var x = document.getElementById("nav-group");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }