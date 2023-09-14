/** Start OverTop Section **/

function overTopIcon() {
    let overTop = document.querySelector('.hoverTop');
    overTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    window.addEventListener('scroll', () => {
        return window.scrollY > 200 ? overTop.style.opacity = '1' : overTop.style.opacity = '0';
    });  
}
  
/** End OverTop Section **/
  
/** Start Loading Page **/
  
function loadingPage() {
    window.addEventListener('DOMContentLoaded', function () {
        setTimeLoadingPage();
    });
}
function setTimeLoadingPage() {
    setTimeout(() => {
        let loadingPage = document.querySelector('.LoadingPage');
        loadingPage.classList.add('hidden');
        document.querySelector('.header').classList.add('go-to-right');
        document.querySelector('.about-us').classList.add('go-to-top-hello');
        document.querySelectorAll('.title-states').forEach(e => {
            e.classList.add('go-to-buttom');
        })
        progress()
    }, 2000);
}
  
/** End Loading Page **/
  
/* Start Input Search */
  
function hidePlaceholder() {
    let inputSearch = document.querySelector('.input');
    inputSearch.onfocus = function () {
    this.setAttribute('data-place', this.getAttribute('placeholder'))
    this.setAttribute('placeholder', ' ');
    };
    inputSearch.onblur = function () {
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', ' ');
    };
};
function hidePlaceholderSendInputs() {
    let inputs = document.querySelectorAll('.inputs .inpo');
    inputs.forEach(input => {
        input.onfocus = function () {
        this.setAttribute('data-place', this.getAttribute('placeholder'))
        this.setAttribute('placeholder', ' ');
    };
    input.onblur = function () {
        this.setAttribute('placeholder', this.getAttribute('data-place'));
        this.setAttribute('data-place', ' ');
    };
});
}
  
/* End Input Search */
  
/** Start Switch Colors **/
  
function switchColors() {
    let lightColor = document.querySelectorAll('.light');
    let darkColor = document.querySelectorAll('.dark')
    let lightMain = '#f0f2f9';
    let mainColor = '#242636';
    let textcolor = '#cfcfcf';
    let maincolorforSides = 'white';
    const buttonLightDark = mainColor;
    let questionText = '#000';
    
    function setThemeColors() {
    document.documentElement.style.setProperty('--main-color', lightMain);
    document.documentElement.style.setProperty('--text-color', mainColor);
    document.documentElement.style.setProperty('--main-color-forSides', maincolorforSides);
    document.documentElement.style.setProperty('--button-light-dark', mainColor);
    document.documentElement.style.setProperty('--questionText', textcolor);
    
    localStorage.setItem('selectTheem', 'light');
    }
    
    function resetThemeColors() {
    document.documentElement.style.removeProperty('--main-color');
    document.documentElement.style.removeProperty('--text-color');
    document.documentElement.style.removeProperty('--main-color-forSides');
    document.documentElement.style.removeProperty('--button-light-dark');
    document.documentElement.style.removeProperty('--questionText');
    
    localStorage.removeItem('selectTheem', 'light');
    }
    
    let selectTheem = localStorage.getItem('selectTheem');
    
    if(selectTheem === 'light') {
    setThemeColors();
    }
    
    lightColor.forEach(button => {
    button.addEventListener('click', setThemeColors);
    });
    
    darkColor.forEach(button => {
    button.addEventListener('click', resetThemeColors);
    });
}
  
/** End Switch Colors **/
  
/** Start Page Scroll Progress **/
  
function scroller() {
    let Scroll = document.querySelector('.scroller');

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        Scroll.style.width = `${(scrollTop / height) * 100}%`;
    });  
} 
/** End Page Scroll Progress **/
  
/** Start close Open Button **/

function opClMenu() {
    let closeOpen_button = document.querySelector('.closeOpen-button');
    let left_section = document.querySelector('.left-section');

    closeOpen_button.onclick = function (e) {
        'use-strict';
        e.stopPropagation();
        this.classList.toggle('active');
        left_section.classList.toggle('show');
    };

    document.addEventListener('click', e => {
        if(e.target !== left_section && e.target !== closeOpen_button) {
            if(left_section.classList.contains('show')) {
                closeOpen_button.classList.toggle('active');
                left_section.classList.toggle('show');
            }
        }
    });
};

/** End close Open Button **/
  
/** Start Open Contact **/
  
function quesTextLink() {
    let questionIcon = document.querySelector('.question');

    questionIcon.onclick = function () {
        document.querySelector('.right-section .message').classList.toggle('open-contact');
        setTimeout(() => {
            document.querySelector('.right-section .message').classList.toggle('open-contact');
        }, 3000);
    }
}
  
/** End Open Contact **/
  
/** Start Open Listes **/
  
function listBehindProfile() {
    let listArrow = document.querySelector('.right-section .profile .list');
    
    listArrow.onclick = function () {
        document.querySelector('.right-section .profile .list').classList.toggle('open-listes');
        document.querySelector('.right-section .listes').classList.toggle('open-listes');    
        setTimeout(() => {
            document.querySelector('.right-section .profile .list').classList.toggle('open-listes');
            document.querySelector('.right-section .listes').classList.toggle('open-listes'); 
        }, 7000);
    }
}
  
/** End Open Listes **/
  
/** Start Statisics Section **/
  
function statisBox2() {
    const ctx = document.getElementById('barchart').getContext('2d');
    const barchart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Sass', 'C++'],
            datasets: [{
                lable: '# of Votos',
                data: [95, 85, 65, 75, 40],
                backgroundColor: [
                    'rgb(227, 76, 38, 0.7)',
                    'rgb(38, 77, 228, 0.7)',
                    'rgb(240, 219, 79, 0.7)',
                    'rgb(204, 102, 153, 0.7)',
                    'rgb(60, 28, 120, 0.7)'
                    ],
                    borderColor: [
                        'rgb(227, 76, 38,  0.7)',
                        'rgb(38, 77, 228, 0.7)',
                        'rgb(240, 219, 79, 0.7)',
                        'rgb(204, 102, 153, 0.7)',
                        'rgb(60, 28, 120, 0.7)'
                ],
                borderColor: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginArZero: true
                }
            }
        }
    });
}

  
function statisBox1() {
    const ctx2 = document.getElementById('doughnut').getContext('2d');
    const doughnut = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Pugjs', 'Gulpjs', 'Vue.js', 'Reactjs', 'Jquery'],
            datasets: [{
                lable: '# of Votos',
                data: [70, 60, 45, 85, 80],
                backgroundColor: [
                    'rgb(197, 135, 87, 0.7)',
                    'rgb(219, 68, 70, 0.7)',
                    'rgb(65, 187, 131, 0.7)',
                    'rgb(97, 219, 251, 0.7)',
                    'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                    'rgb(197, 135, 87, 0.7)',
                    'rgb(219, 68, 70, 0.7)',
                    'rgb(65, 187, 131, 0.7)',
                    'rgb(97, 219, 251, 0.7)',
                    'rgba(153, 102, 255, 1, 0.7)',
                ],
                borderColor: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginArZero: true
                }
            }
        }
    });
}

/** End Statisics Section **/
  
/** Start Links In Left Section **/
  
const AllLinks = document.querySelectorAll('.links a');
  
function scrollToSomeWhere() {
    AllLinks.forEach(el => {
        addReActiveOnLinks();
        el.addEventListener('click', e => {
            if (el.classList.contains('category')) {
                window.location.href = 'ar_categories.html';
                return;
            }
            if (el.classList.contains('plans')) {
                window.location.href = 'ar_plans.html';
                return;
            }
            e.preventDefault();
            let sectionId = e.target.dataset.section;
            let section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                });
            }
            let left_section = document.querySelector('.left-section');
            left_section.classList.remove('show');
            let closeOpen_button = document.querySelector('.closeOpen-button');
            closeOpen_button.classList.remove('active');
        });
    });
}
  
function addReActiveOnLinks() {
    let allLinks = document.querySelectorAll('ul li a');
    allLinks.forEach(link => {
        link.addEventListener('click', function () {
            allLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}


/** End Links In Left Section **/
  
/** Start Circular Progress **/
  
function progress () {
    let progressBar1 = document.querySelector(".circular-progress1");
    let valueContainer1 = document.querySelector(".value-container1");
    let progressValue1 = 0;
    let progressEndValue1 = 78;
    let speed1 = 25;
    
    let observer1 = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
        let progress1 = setInterval(function() {
            progressValue1++;
            valueContainer1.textContent = `${progressValue1}%`;
            progressBar1.style.background = `conic-gradient(
            var(--main-color-lists) ${progressValue1 * 3.6}deg,
            var(--main-color) ${progressValue1 * 3.6}deg
            )`;
            if (progressValue1 == progressEndValue1) {
            clearInterval(progress1);
            }
        }, speed1);
        observer1.unobserve(entry.target);
        }
    });
    });
    observer1.observe( progressBar1 );
    
    let progressBar2 = document.querySelector(".circular-progress2");
    let valueContainer2 = document.querySelector(".value-container2");
    let progressValue2 = 0;
    let progressEndValue2 = 65;
    let speed2 = 25;
    
    let observer2 = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
        let progress2 = setInterval(function() {
            progressValue2++;
            valueContainer2.textContent = `${progressValue2}%`;
            progressBar2.style.background = `conic-gradient(
            var(--orange-color) ${progressValue2 * 3.6}deg,
            var(--main-color) ${progressValue2 * 3.6}deg
            )`;
            if (progressValue2 == progressEndValue2) {
            clearInterval(progress2);
            }
        }, speed2);
        observer2.unobserve(entry.target);
        }
    });
    });
    observer2.observe( progressBar2 );
    
    let progressBar3 = document.querySelector(".circular-progress3");
    let valueContainer3 = document.querySelector(".value-container3");
    let progressValue3 = 0;
    let progressEndValue3 = 40;
    let speed3 = 25;
    
    let observer3 = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
        let progress3 = setInterval(function() {
            progressValue3++;
            valueContainer3.textContent = `${progressValue3}%`;
            progressBar3.style.background = `conic-gradient(
            var(--red-hover-color) ${progressValue3 * 3.6}deg,
            var(--main-color) ${progressValue3 * 3.6}deg
            )`;
            if (progressValue3 == progressEndValue3) {
            clearInterval(progress3);
            }
        }, speed3);
        observer3.unobserve(entry.target);
        }
    });
    });
    observer3.observe( progressBar3 );
}
  
/** End Circular Progress **/
  
/** Start Add Design Section **/
  
function addDesign() {
    let addDesign = document.querySelector('.box-add');

    addDesign.addEventListener('click', () => {
    let overLay = document.createElement('div');
    overLay.classList = 'overlay';
    document.body.appendChild(overLay);
    
    let popupBox = document.createElement('div');
    popupBox.classList = 'popupBox';
    
    let textContact = document.createElement('h2');
    textContact.classList = 'textContact';
    textContact.appendChild(document.createTextNode('اضغط على الرابط التالي ل نقل مباشر الى المحادثة الوتس اب'));
    popupBox.appendChild(textContact);
    
    let closeButton = document.createElement('span');
    closeButton.classList = 'closeButton';
    closeButton.appendChild(document.createTextNode('X'));
    popupBox.appendChild(closeButton);
    
    let sendButton = document.createElement('button');
    sendButton.classList = 'sendButton';
    sendButton.appendChild(document.createTextNode('WhatsApp'));
    popupBox.appendChild(sendButton);
    
    overLay.appendChild(popupBox);
    
    });
    
    document.addEventListener('click', e => {
    if(e.target.className == 'closeButton') {
        e.target.parentElement.remove();
    
        document.querySelector('.overlay').remove();
    }
    });
    
    document.addEventListener('click', (e) => {
    if(e.target.className == 'sendButton') {
        let orderMessage = 'Hello, Hower You!';
        const phoneNumber = '905510987184';
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;
    
        window.open(whatsappLink, '_blank');
    
        document.querySelector('.overlay').remove();
    }
    });
}
  
function clickHereLink() {
    document.addEventListener('click', e => {
    if(e.target.className == 'clickHere') {
        let orderMessage = 'Hello, Hower You!';
        const phoneNumber = '905510987184';
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;
    
        window.open(whatsappLink, '_blank');    
    }
    });
}
  
/** End Add Design Section **/
  
/** Start Toggle Handl **/
  
function toggler() {
    let toggle = document.querySelectorAll('.toggle-switch .toggle-handl');

    toggle.forEach(tog => {
    tog.addEventListener('click', () => {
        tog.classList.toggle('left_Right');
    });
    });
}
  
/** End Toggle Handl **/

/** Start Planses image **/

function inspirationImages() {

    let boxinspiration = document.querySelectorAll('.contetn-palns img');

    boxinspiration.forEach(box => {
        box.addEventListener('click', e => {
            openPopup(box.alt);
        });
    });
    
    let showPopupLinks = document.querySelectorAll('.show-popup');

    showPopupLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let altText = link.parentNode.querySelector('img').alt;
            openPopup(altText);
        });
    });

    function openPopup(text) {
        let overLay = document.createElement('div');
        overLay.classList = 'overlay';
        document.body.appendChild(overLay);

        let popupBox = document.createElement('div');
        popupBox.classList = 'popupBox';

        let textContact = document.createElement('h2');
        textContact.classList = 'textContact';
        textContact.appendChild(document.createTextNode(text));
        popupBox.appendChild(textContact);

        let closeButton = document.createElement('span');
        closeButton.classList = 'closeButton';
        closeButton.appendChild(document.createTextNode('X'));
        popupBox.appendChild(closeButton);

        overLay.appendChild(popupBox);
    }
}

  
/** End Planses image **/

/** Start Linkes Our Work **/

let boxOurWorkes = document.querySelectorAll('.ourWorking-boxes .box');

boxOurWorkes.forEach(boxOurWorkes => {
    boxOurWorkes.addEventListener('click', event => {
        event.preventDefault();

        let link = boxOurWorkes.getAttribute('id');

        window.open(link, '_blank');
    });
});

/** End Linkes Our Work **/

/** Start Linkes Contact Social Media **/

let socialMedia = document.querySelectorAll('.social-icons a');

socialMedia.forEach(socialMedia => {
    socialMedia.addEventListener('click', event => {
        event.preventDefault();

        let link = socialMedia.getAttribute('href');

        window.open(link, '_blank');
    });
});

/** End Linkes Contact Social Media **/