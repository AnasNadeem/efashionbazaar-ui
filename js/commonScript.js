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
let topNavbarSearchInputWordWrapper = document.querySelectorAll('.topNavbarSearchInputWordWrapper');
let topNavbarSearchInput = document.querySelector(".topNavbarSearchInput");

topNavbarSearchInput.addEventListener("focus",()=> {
    topNavbarSearchInputWordWrapper.forEach( ele => {
    	ele.style.display = "none"
	})
})

let currentIndex = 0;
let previousIndex = 0;
let maxWords = topNavbarSearchInputWordWrapper.length - 1;
const changeTextOfSearch = () => {
	topNavbarSearchInputWordWrapper.forEach( (ele, idx) => {
		if (idx != currentIndex){
			ele.classList.remove('topNavbarSearchInputWordWrapperAnimation');
		}
	})

	topNavbarSearchInputWordWrapper[currentIndex].classList.add('topNavbarSearchInputWordWrapperAnimation');
	topNavbarSearchInputWordWrapper[currentIndex].classList.remove('topNavbarSearchInputWordWrapperFadeUpAnimation');

	if (currentIndex === maxWords){
		previousIndex = currentIndex;
		currentIndex = 0;
	}else {
		previousIndex = currentIndex;
		currentIndex++;
	}

	topNavbarSearchInputWordWrapper[previousIndex].classList.add('topNavbarSearchInputWordWrapperFadeUpAnimation');
}

setInterval(changeTextOfSearch, 2000)

// topNavbarSearchInputWordWrapper.forEach((ele)=>{
// 	ele.addEventListener("click",()=>{ 
// 		for (var i = 0; i < topNavbarSearchInputWordWrapper.length; i++) {
// 			topNavbarSearchInputWordWrapper[i].style.display = "none"
// 		}
// 	})
// })
