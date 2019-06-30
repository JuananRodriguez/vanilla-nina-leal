let MainMenu = null; 
function setMainMenuVariables(){
    MainMenu = {
        container: document.querySelector( '#main-menu' ),
        openButton: document.querySelector( '#main-menu .menu-open-button' ),
        closeButton: document.querySelector( '#main-menu .menu-close-button' ),
        leftSidebar: document.querySelector( '#main-menu .menu-left-sidebar' ),
        background: document.querySelector( '#main-menu .menu-background' ),
        imgTaxContainer: document.querySelector('#main-menu .menu-background .taxonomy-thumbnail'),
        entriesList: document.querySelector( '#main-menu .menu-left-sidebar > nav > ul')
    }
}

window.onload = function() {
    setMainMenuVariables();
    init();
};

function init(){
    MainMenu.openButton.addEventListener( 'click', openMainMenu );
    MainMenu.closeButton.addEventListener( 'click', closeMainMenu );
    document.addEventListener('keyup', onESCpressUp)
    initTaxonomies();
}

function onESCpressUp(e){
    if(e.code.toUpperCase() === "Escape".toUpperCase())
    closeMainMenu();
}

function initTaxonomies(){
    const entries = MainMenu.entriesList.querySelectorAll('li')
    entries.forEach(element => {
        element.addEventListener('mouseover', (e)=>changeTaxonomyImgOnHoverInMenu(e, element), true)
    });
}

function resetAllTaxonomiesLi(){
    const entries = MainMenu.entriesList.querySelectorAll('li')
    entries.forEach(element => {
        element.classList.remove('active');
    });
}

function changeTaxonomyImgOnHoverInMenu(e, element){
    resetAllTaxonomiesLi();
    if(MainMenu.leftSidebar.classList.contains('open')){
        element.classList.add('active');
        MainMenu.imgTaxContainer.style.backgroundImage = `url('${element.dataset.taxonomyimg}')`;
    }
}

function openMainMenu(){
    MainMenu.leftSidebar.classList.add('open');
    MainMenu.background.classList.add('open');
}

function closeMainMenu(){
    resetAllTaxonomiesLi();
    MainMenu.leftSidebar.classList.remove('open');
    MainMenu.background.classList.remove('open');
}