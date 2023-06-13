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

// Search bar
let topNavbarSearchInputWordWrapper = document.querySelectorAll('.topNavbarSearchInputWordWrapper')
let topNavbarSearchInput = document.querySelector(".topNavbarSearchInput")

topNavbarSearchInput.addEventListener("focus",()=>{ 
    topNavbarSearchInputWordWrapper.forEach((ele)=>
    {
    	ele.style.display = "none"
	})
})

topNavbarSearchInputWordWrapper.forEach((ele)=>{
	ele.addEventListener("click",()=>{ 
		for (var i = 0; i < topNavbarSearchInputWordWrapper.length; i++) {
			topNavbarSearchInputWordWrapper[i].style.display = "none"
		}
	})
})
