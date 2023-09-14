/** Toggle Spin Class On Icon **/

document.querySelector(".toggle-settings .icon").onclick = function () {
    // Toggle Class fa-spin From Rotation On Self
    this.classList.toggle('fa-spin');

    // Toggle Class Open On Main Setting Box
    document.querySelector('.setting-box').classList.toggle('open');
};

/** Switch Color **/

const colorLi = document.querySelectorAll('.colors-list li');

colorLi.forEach(color => {
    color.addEventListener('click', e => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem('color-property', e.target.dataset.color);

        handlActive(e);
    });
});

// Check If Theres in Local Storage Colors Options
let mainColors = localStorage.getItem('color-property');

if(mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', mainColors);
    
    // Add Active Class From All ColorsList Items
    document.querySelectorAll('.colors-list li').forEach(element => {
        element.classList.remove('active');

        // Add Active Class On Element With data-color === Colors List Items
        if(element.dataset.color === mainColors) {
            element.classList.add('active');
        }
    });
};

/** Switch Background **/

// Random Background option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Switch Random Backgrund Option
const randomBackL = document.querySelectorAll('.random span');

// Loop On All Spans
randomBackL.forEach(span => {
    span.addEventListener('click', e => {
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });

        // Add Active Class On Self
        e.target.classList.add('active');

        if(e.target.dataset.background === 'yes') {
            backgroundOption = true;

            randomizeImg();
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
        }
    });
});

// Random Change Background Color
let landingPage = document.querySelector('.landing-page');

// Get Array Of Imgs
let imgArray = ['ppp.avif', '01.jpg', '02.jpg', '03.jpg', '05.jpg'];

// Function To Randomize Imgs
function randomizeImg() {
    if(backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgArray.length);

            // Change Background Image URL
            landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNumber] + '")';
        }, 1000);
    }
}

randomizeImg();

/** Skills Seting **/
let ourSkills = document.querySelector('.skills');

window.onscroll = function () {
    // Skills OffsetTop
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight - 100)) {
        let allSkills = document.querySelectorAll('.skill-box .skill-progress span')
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};

/** Create Popup With The Image **/

let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {
    img.addEventListener('click', e => {
        // Overlay Section
        let overLay = document.createElement('div');
       overLay.className = 'popup-overlay';
       document.body.appendChild(overLay);
       
       // Popup Box Section
       let popupBox = document.createElement('div');
       popupBox.className = 'popup-box';

       // If Theres Image-alt => To Number Image
       if(img.alt !== null) {
        let imgHeading = document.createElement('h3');
        imgHeading.appendChild(document.createTextNode(img.alt));
        popupBox.appendChild(imgHeading);
       }

       // Image Div Section
       let popupImage = document.createElement('img');
       popupImage.src = img.src;
       popupBox.appendChild(popupImage);

       // Close Button Section
       let popupClose = document.createElement('span');
       popupClose.appendChild(document.createTextNode('X'));
       popupClose.className = 'close-button';
       popupBox.appendChild(popupClose);

       document.body.appendChild(popupBox);
    });
});

// Close Popup
document.addEventListener('click', e => {
    if(e.target.className == 'close-button') {
        e.target.parentElement.remove();

        document.querySelector('.popup-overlay').remove();
    }
});

/** Nav Bullets **/
const allBullets = document.querySelectorAll('.nav-bullets .bullet');
const allLinks = document.querySelectorAll('.links a');

function scrollToSomeWhere(elements) {
    elements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            let section = e.target.dataset.section;
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
};

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

/** Bullets Show Or Not Section **/
let bulletsSpan = document.querySelectorAll('.bullets-option span');
let bulletsContainer = document.querySelector('.nav-bullets');
let bulletLocalItems = localStorage.getItem('bullet-option');

if(bulletLocalItems !== null) {
    bulletsSpan.forEach(span => {
        span.classList.remove('active');
    });
    if(bulletLocalItems === 'block') {
        bulletsContainer.style.display = 'block';
        document.querySelector('.bullets-option .yes').classList.add('active');
    } else {
        bulletsContainer.style.display = 'none';
        document.querySelector('.bullets-option .no').classList.add('active');
    }
}

bulletsSpan.forEach(span => {
    span.addEventListener('click', e => {
        if(span.dataset.display === 'show') {
            bulletsContainer.style.display = 'block';
            localStorage.setItem('bullet-option', 'block');
        } else {
            bulletsContainer.style.display = 'none';
            localStorage.setItem('bullet-option', 'none');
        }
        handlActive(e);
    });
});

/** Rest Button **/
document.querySelector('.reset-options').onclick = function () {
    localStorage.removeItem('background-option');
    localStorage.removeItem('color-property');
    localStorage.removeItem('bullets-option');

    window.location.reload();
}

/** Toggle Menu **/
let toggleButton = document.querySelector('.toggle-menu');
let tLink = document.querySelector('.links');

toggleButton.onclick = function (e) {
    // Stop Propagation
    e.stopPropagation();
    
    // Toggle Class 'menu-active' On Button
    this.classList.toggle('menu-active');

    // Toggle Class 'open' On Links
    tLink.classList.toggle('open');
};

// Click AnyWhere Outside Menu Add Toggle Button
document.addEventListener('click', e => {
    if(e.target !== toggleButton && e.target !== tLink) {
        if(tLink.classList.contains('open')) {
            toggleButton.classList.toggle('menu-active');
            tLink.classList.toggle('open');
        }
    }
});

function handlActive(ev) {
    ev.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');
    })
    ev.target.classList.add('active');
};