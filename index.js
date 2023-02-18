const navBar = document.querySelector('#nav-bar');
const hamburgerToggle = document.querySelector('#hamburger');


hamburgerToggle.addEventListener('click', () => {
    const currentState = hamburgerToggle.getAttribute("data-state");


    if (!currentState || currentState === "closed"){
        navBar.setAttribute("data-visible", true);
        hamburgerToggle.setAttribute("aria-expanded", true);
        hamburgerToggle.setAttribute("data-state", "opened");
        
    } else {
        navBar.setAttribute("data-visible", false);
        hamburgerToggle.setAttribute("aria-expanded", false);
        hamburgerToggle.setAttribute("data-state", "closed");
    }
});