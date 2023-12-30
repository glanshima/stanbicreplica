const navigationMenu = document.querySelector('.dashboard_menu');
const menu = document.querySelector('.handburger_menu');
const asideMenu = document.querySelector('.dashboard_aside');
const header = document.querySelector('.dashboard_Header');
const closeMenu = document.querySelector('.closeMenu_icon');
const moreMenu = document.querySelector('.more_menu');
const moreActions = document.querySelector('.actions_menu');
const mainContainer = document.querySelector('.dashboard_info-section');

/* open and close mobile menu */

function openMenu() {

    if (asideMenu.classList.contains('open')) {
        asideMenu.classList.remove('open');

    } else {
        asideMenu.classList.add('open')

    }
    hideMoreActions();
}
menu.addEventListener('click', openMenu);
closeMenu.addEventListener('click', openMenu);


/* actions menu control */

function showMoreActions() {
    if (moreActions.classList.contains('open')) {
        moreActions.classList.remove('open');

    } else {
        moreActions.classList.add('open');
    }
}
const hideMoreActions = () => {
    if (moreActions.classList.contains('open')) {
        moreActions.classList.remove('open')
    }
}
moreMenu.addEventListener('click', showMoreActions)
mainContainer.addEventListener('click', hideMoreActions)

/* Log out  */

const logOut = document.querySelector('#logout_Btn');

const logOutAccts = () => {
    window.location.href = "../index.html"
}

logOut.addEventListener('click', logOutAccts)

