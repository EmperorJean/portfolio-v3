const homePageButton = document.getElementById("homePage");
const projectPageButton = document.getElementById("projectsPage");
const view = document.getElementById("mainView");
const pages = [
    "./html/Home.html",
    "./html/Projects.html"
]
projectPageButton.addEventListener('click', () => pageSwitch("projects"));
homePageButton.addEventListener('click', () => pageSwitch("home"));

function pageSwitch(page) {
    console.log("Switching")
    switch (page) {
        case 'home':
            projectPageButton.classList.remove("selected");
            homePageButton.classList.add("selected");
            view.src = pages[0];
            break;
        case 'projects':
            homePageButton.classList.remove("selected");
            projectPageButton.classList.add("selected");
            view.src = pages[1];
            break;
    }
}
