const projectBody = document.getElementById("projectBody");
const medbay = document.getElementById("medbay");
const algoArt = document.getElementById("algoArt");
const outkast = document.getElementById("outkast");
const yingo = document.getElementById("yingo");
const strike = document.getElementById("strikeMobile");

const projects = {
    medbay: generateHtml("https://coderyders.onrender.com/", "Medbay", "A Full-stack web application for doctors to keep track of patient records" ,"Html | Css | Js", "Jean"),
    algoArt: generateHtml("https://emperorjean.github.io/Drawing-Program/", "Algo Art", "We are designing and implementing algorithms that generate visual designs. These algorithms, coded in JavaScript, are built from procedural processes that draw lines and basic shapes onto an HTML Canvas. These procedural processes are inspired by mathematical concepts, natural phenomena, and artistic trends.", "Html | Css | Js", "Jean"),
    outkast: generateHtml("https://github.com/EmperorJean/outkast-tool-v2", "Outkast+", "A chrome extension that allows users to easily create, manage, and deploy squads of Outkasts on missions with a single click. Saving time and optimizing their gameplay.", "Js | Html", "Jean"),
    yingo: generateHtml("https://yingo.pages.dev/", "Yingo", "Inspired by @Pieosaurus3's tweet and Jacksfilms' take on SSSniperwolf's content. This bingo game is crafted for fans who love a comedic spin on classic reaction videos. Watch, laugh, and mark off those iconic moments as they happen. A perfect companion for binge-watching sessions.", "Html | Js | MongoDB | NodeJs", "Jean"),
    strike: generateHtml("https://emperorjean.github.io/StrikeMobile", "Strike Mobile", "A front end focus phone service provider website. Used html and css and a bit of javascript", "Html | Css | Js", "Jean")
}

medbay.addEventListener("click", () => switchProject(projects.medbay))
algoArt.addEventListener("click", () => switchProject(projects.algoArt))
outkast.addEventListener("click", () => switchProject(projects.outkast))
yingo.addEventListener("click", () => switchProject(projects.yingo))
strike.addEventListener("click", () => switchProject(projects.strike))

function switchProject(project) {
    projectBody.innerHTML = project;
}



function generateHtml(source, name, desc, stack, collab) {
    return `<div class="projectView">
        <iframe src=${source} frameborder="0"></iframe>
        </div>
        <div class="projectAside">
        <div class="pName">${name}</div>
        <div class="pDescription">${desc}</div>
        <div class="pStack"><span> <h3>Tech Stack</h3></span>${stack}</div>
        <div class="pLinks">Live Url: Source: </div>
        <div class="pCollaborators">${collab}</div>
        </div>`
}