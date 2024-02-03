
// fixed header 

let mainheader = document.querySelector('.main-header');
let rightside = document.querySelector('.first');
let mobilenav = document.querySelector('.mobile-navbar')

window.addEventListener('scroll', function () {
    if (this.scrollY > 280) {
        mainheader.classList.add('fixed-top', 'fixed-navbar');
        mobilenav.classList.add('fixed-top', 'fixed-navbar');
        rightside.classList.add("d-none");
    }
    else {
        mainheader.classList.remove('fixed-top', 'fixed-navbar');
        mobilenav.classList.remove('fixed-top', 'fixed-navbar');
        rightside.classList.remove("d-none")
    }
});

// responsive nav 

let dropdownButton = document.querySelector(".dropdown-toggle");
let dropdownMenu = document.querySelector('.dropdown-menu');
let menubtn = document.querySelector('.menu-button');
let activeMenu = document.querySelector(".mobile-menu");
let mobileCloseButton = document.querySelector(".close-button-mobile");
let mobileOverlay = document.querySelector(".mobile-overlay");

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show')
})

menubtn.addEventListener('click', () => {
    activeMenu.classList.add("show-menu");
    activeMenu.classList.remove('d-none');
    mobileOverlay.classList.remove('d-none')
})

mobileCloseButton.addEventListener('click', () => {
    activeMenu.classList.remove("show-menu");
    activeMenu.classList.add('d-none');
    mobileOverlay.classList.add('d-none');
}
)



// auto scroll 

let scrollbtn = document.querySelector('.page-auto-scroll')

window.addEventListener('scroll', function () {
    if (this.scrollY > 400) {
        scrollbtn.classList.remove('d-none')
    } else {
        scrollbtn.classList.add('d-none')
    }

    scrollbtn.addEventListener("click", function () {
        window.scrollTo(0, 0);
    })
})





// search bar 
const body = document.querySelector('body');
let searchbar = document.querySelector(".search-bar");
let bgactive = document.querySelector('.bg-active');
let searchbtn = document.querySelector(".search-button");
let searchbtnMobile = document.querySelector(".search-button-mobile");


searchbtn.addEventListener("click", function () {
    searchbar.classList.remove('d-none')
    searchbar.classList.add('searchbar-active')
    searchbar.classList.add('show')
    bgactive.classList.add("bg-overlay")

    body.style.overflow = "hidden";
})


searchbtnMobile.addEventListener("click", () => {
    searchbar.classList.remove('d-none')
    searchbar.classList.add('searchbar-active')
    searchbar.classList.add('show')
    bgactive.classList.add("bg-overlay")
    body.style.overflow = "hidden";

})

let closebtn = document.querySelector('.close-button')

closebtn.addEventListener("click", function () {
    searchbar.classList.remove('show')
    searchbar.classList.add('d-none')
    bgactive.classList.remove("bg-overlay")
    searchbar.classList.remove('searchbar-active')
    body.style.overflow = "visible";
})

// navigation links 
let navs = document.querySelectorAll(".navigaton-scroll a");
let sections = document.querySelectorAll(".scroll-to");

navs.forEach((data)=>{
    data.addEventListener('click', function(){
        let id = data.getAttribute('data-id');
        console.log(id);
        let activeSection = Array.from(sections).find((section)=>section.getAttribute('data-id') === id);
        activeSection.scrollIntoView();
    })
})

// counter 

let counterItem = document.querySelectorAll('.counter-div');

counterItem.forEach((item, index) => {
    let start = 0;
    let end = parseInt(item.getAttribute('data-val'));
    let time = 10;
    let position = item.offsetTop;
    let countInterval = setInterval(() => {

        if (window.scrollY > position) {
            console.log('counter start')
            start += 1;
            item.innerHTML = start;
            if (start === end) {
                clearInterval(countInterval);
            }
        }
    }, time)

})


// contact dropdown 


if (document.querySelector(".contact-dropdown") && document.querySelector(".contact-dropdown .address-menu")) {
    let activeButton = document.querySelector(".contact-dropdown .active-button");
    let addressMenu = document.querySelector(".contact-dropdown .address-menu");

    activeButton.addEventListener("mouseover", function () {
        addressMenu.classList.remove("d-none");
    });
    activeButton.addEventListener("mouseout", function () {
        addressMenu.classList.add("d-none");
    });
    addressMenu.addEventListener("mouseover", function () {
        addressMenu.classList.remove("d-none");
    });
    addressMenu.addEventListener("mouseout", function () {
        addressMenu.classList.add("d-none");
    });


    let addressButtons = document.querySelectorAll('.contact-dropdown .address-menu button');
    let addressRows = document.querySelectorAll('.address-row');

    activeButton.querySelector('span').innerHTML = addressButtons[0].innerHTML;
    addressRows[0].classList.remove('d-none')
    addressButtons[0].classList.add('active');

    addressButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            let id = btn.getAttribute('data-id');
            activeButton.querySelector('span').innerHTML = btn.innerHTML;
            addressMenu.classList.add('d-none');
            let activeRow = Array.from(addressRows).find((row) => row.getAttribute('data-id') === id);
            addressRows.forEach((row) => {
                row.classList.add('d-none');

            });
            activeRow.classList.remove('d-none');

        })
    })

}








