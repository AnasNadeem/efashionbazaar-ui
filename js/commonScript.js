// Top Func 
const scrollBtn = document.getElementById('scrollBtn');

window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

scrollBtn.addEventListener('click', function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})

// Sidenavbar trigger function
let opensideNavbarTrigger = document.getElementById('opensideNavbarTrigger');
let closesideNavbarTrigger = document.querySelector('.sideNavbarCloseIcon');
let sideNavbar = document.getElementById('sideNavbar');
// let closeSideNavbarTrigger = document.getElementById('closeSideNavbarTrigger');

opensideNavbarTrigger.addEventListener('click', function () {
    sideNavbar.classList.toggle('sideNavbarActive');
});
closesideNavbarTrigger.addEventListener('click', function () {
    sideNavbar.classList.remove('sideNavbarActive');
});

// closeSideNavbarTrigger.addEventListener('click', function () {
//     sideNavbar.classList.toggle('sideNavbarActive');
// });


// Copyright Year autoupdate
let copyrightYear = document.getElementById('copyrightYear');
copyrightYear.innerText = new Date().getFullYear();
