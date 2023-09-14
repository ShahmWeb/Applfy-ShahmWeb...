/** Start OverTop Section **/

overTopIcon();

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
    
  }, 2000);
}
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


/** Start Add Design Section **/

addDesign();

clickHereLink();

/** End Add Design Section **/

/** Start Toggle Handl **/

toggler();

/** End Toggle Handl **/

/** Start Planses image **/

inspirationImages();
  
/** End Planses image **/