// Sidenavbar trigger function
let opensideNavbarTrigger = document.getElementById('opensideNavbarTrigger');
let sideNavbar = document.getElementById('sideNavbar');
// let closeSideNavbarTrigger = document.getElementById('closeSideNavbarTrigger');

opensideNavbarTrigger.addEventListener('click', function () {
    sideNavbar.classList.toggle('sideNavbarActive');
});

// closeSideNavbarTrigger.addEventListener('click', function () {
//     sideNavbar.classList.toggle('sideNavbarActive');
// });


// Copyright Year autoupdate
let copyrightYear = document.getElementById('copyrightYear');
copyrightYear.innerText = new Date().getFullYear();
