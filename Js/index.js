/** Start OverTop Section **/

overTopIcon();

/** End OverTop Section **/

/** Start Loading Page **/

loadingPage();

/** End Loading Page **/

/* Start Input Search */

hidePlaceholder();

hidePlaceholderSendInputs();

/* End Input Search */

/** Start Switch Colors **/

switchColors();

/** End Switch Colors **/

/** Start Page Scroll Progress **/

scroller();

/** End Page Scroll Progress **/

/** Start close Open Button **/

opClMenu();

/** End close Open Button **/

/** Start Open Contact **/

quesTextLink();

/** End Open Contact **/

/** Start Open Listes **/

listBehindProfile();

/** End Open Listes **/

/** Start Statisics Section **/

statisBox2();

statisBox1();

/** End Statisics Section **/

/** Start Links In Left Section **/

scrollToSomeWhere(AllLinks);

/** End Links In Left Section **/

/** Start Circular Progress **/

/** End Circular Progress **/

/** Start Add Design Section **/

addDesign();

clickHereLink();

/** End Add Design Section **/

/** Start Toggle Handl **/

toggler();

/** End Toggle Handl **/


/** Start Scrolling Linkes **/

let boxstatistics = document.querySelector('.box-statistics');
let ourstates = document.querySelector('.our-states');
let ourservieses = document.querySelector('.our-servieses');
let ourworking = document.querySelector('.our-working');
let contactus = document.querySelector('.contact-us'); 

window.onscroll = function () {
    
    if(window.scrollY >= boxstatistics.offsetTop - 100) {
        document.querySelector('.aboutus').classList.remove('active')
        document.querySelector('.statistices').classList.add('active');
    } else {
        document.querySelector('.statistices').classList.remove('active');
        document.querySelector('.aboutus').classList.add('active')
    }

    if(window.scrollY >= ourstates.offsetTop  - 100) {
        document.querySelector('.statistices').classList.remove('active');
        document.querySelector('.ourstates').classList.add('active');
    } else {
        document.querySelector('.ourstates').classList.remove('active');
    }
    
    if(window.scrollY >= ourservieses.offsetTop - 100) {
        document.querySelector('.ourstates').classList.remove('active');
        document.querySelector('.ourservieses').classList.add('active');
    } else {
        document.querySelector('.ourservieses').classList.remove('active');
    }

    if(window.scrollY >= ourworking.offsetTop - 100) {
        document.querySelector('.ourservieses').classList.remove('active');
        document.querySelector('.ourworking').classList.add('active');
    } else {
        document.querySelector('.ourworking').classList.remove('active');
    }

    if(window.scrollY >= contactus.offsetTop - 100) {
        document.querySelector('.ourworking').classList.remove('active');
        document.querySelector('.contactus').classList.add('active');
    } else {
        document.querySelector('.contactus').classList.remove('active');
    }
}
/** End Scrolling Linkes **/