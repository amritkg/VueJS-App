//Set up main div
const head = document.getElementById("head");
//Create the layout
//create div for the buttons
const butDiv = document.createElement("div");
butDiv.style.display = "inline-block";
butDiv.style.marginBottom = "-5px"; //I know this is a bad way of doing it
head.appendChild(butDiv);

//three buttons
const grA = document.createElement("button");
const grB = document.createElement("button");
const grC = document.createElement("button");
grA.textContent = "group_a";
grB.textContent = "group_b";
grC.textContent = "group_c";
grA.addEventListener("click", aClick);
grB.addEventListener("click", bClick);
grC.addEventListener("click", cClick);
butDiv.appendChild(grA);
butDiv.appendChild(grB);
butDiv.appendChild(grC);
//button styles
//rounded corners
grA.style.borderRadius = "7px 7px 0px 0px";
grB.style.borderRadius = "7px 7px 0px 0px";
grC.style.borderRadius = "7px 7px 0px 0px";
grA.style.paddingLeft = "12px";
grA.style.paddingRight = "12px";
grB.style.paddingLeft = "12px";
grB.style.paddingRight = "12px";
grC.style.paddingLeft = "12px";
grC.style.paddingRight = "12px";
//borders
const borS = "1px solid";
grA.style.borderLeft = borS;
grA.style.borderRight = borS;
grA.style.borderTop = borS;
grB.style.borderLeft = borS;
grB.style.borderRight = borS;
grB.style.borderTop = borS;
grC.style.borderLeft = borS;
grC.style.borderRight = borS;
grC.style.borderTop = borS;


//onClick functions
function aClick() {
    removeAll();
    mainDiv.appendChild(dA);
    grA.style.backgroundColor = "inherit";
    grA.style.borderBottom = "1px solid white";
}
function bClick() {
    removeAll();
    mainDiv.appendChild(dB);
    grB.style.backgroundColor = "inherit";
    grB.style.borderBottom = "1px solid white";

}
function cClick() {
    removeAll();
    mainDiv.appendChild(dC);
    grC.style.backgroundColor = "inherit";
    grC.style.borderBottom = "1px solid white";

}
function removeAll() {
    mainDiv.innerHTML = "";
    grA.style.backgroundColor = "lightgray";
    grB.style.backgroundColor = "lightgray";
    grC.style.backgroundColor = "lightgray";
    grA.style.borderBottom = "1px solid black";
    grB.style.borderBottom = "1px solid black";
    grC.style.borderBottom = "1px solid black";

}

//one main div for submenus
const mainDiv = document.createElement("div");
head.appendChild(mainDiv);
mainDiv.style.marginTop = "0px";
mainDiv.style.padding = "50px";
mainDiv.style.backgroundColor = "white";

//mainDiv style
mainDiv.style.border = borS;
//three divs for three submenus
const dA = document.createElement("div");
dA.setAttribute("id", "dA");
dA.style.padding = "5px";
dA.style.backgroundColor = "orange";
dA.style.border = "1px solid black";
dA.draggable = false;
const dB = document.createElement("div");
dB.setAttribute("id", "dB");
dB.style.padding = "5px";
dB.style.backgroundColor = "orange";
dB.style.border = "1px solid black";
dB.draggable = false;
const dC = document.createElement("div");
dC.setAttribute("id", "dC");
dC.style.padding = "5px";
dC.style.backgroundColor = "orange";
dC.style.border = "1px solid black";
dC.draggable = false;
aClick();

//show content in button-triggered divs
var i = 0;
for (i = 1; i < 11; i++) {
    const im = document.createElement("img");
    im.style.padding = "2px";
    im.src = "/images/group_a/a-" + i + ".png";
    im.setAttribute("id", "a" + i)
    im.style.width = "90px";
    im.style.height = "relative";
    im.draggable = true;
    dA.appendChild(im);
}
for (i = 1; i < 6; i++) {
    const im = document.createElement("img");
    im.style.padding = "2px";
    im.setAttribute("id", "b" + i)
    im.src = "/images/group_b/b-" + i + ".png";
    im.style.width = "90px";
    im.style.height = "relative";
    im.draggable = true;
    dB.appendChild(im);
}
for (i = 1; i < 8; i++) {
    const im = document.createElement("img");
    im.setAttribute("id", "c" + i)
    im.style.padding = "2px";
    im.src = "/images/group_c/c-" + i + ".png";
    im.style.width = "90px";
    im.style.height = "relative";
    im.draggable = true;
    dC.appendChild(im);
}
//create div that will house 11x11 grid
const holder = document.createElement("div");
holder.style.display = "stretch";
head.appendChild(holder);
//11x11 div grid
var j = 0;
for (i = 0; i < 11; i++) {
    const horDivGrid = document.createElement("div");
    holder.appendChild(horDivGrid);
    horDivGrid.setAttribute("id", i + "");
    horDivGrid.style.alignContent = "center";
    for (j = 0; j < 11; j++) {
        const verGrid = document.createElement("div");
        verGrid.style.display = "table-cell";
        // verGrid.style.border = "1px solid lightgray";
        // verGrid.textContent = j + "-" + i;
        horDivGrid.appendChild(verGrid);
        if ((j == 1 && i == 6) || (j == 5 && i == 8) || (j == 7 && i == 5)) {
            verGrid.style.backgroundColor = "green";
            verGrid.style.width = "91px";
            verGrid.style.height = "161px";
            verGrid.setAttribute("class", "zone");
            verGrid.setAttribute("id", "" + j + i);
        } else {
            verGrid.style.width = "91px";
            verGrid.style.height = "32px";
        }

    }
}
var dragged = "";
document.addEventListener("dragstart", function (event) {
    const k = event.target as Element;
    if (k.nodeName == "IMG" && k.parentElement.style.backgroundColor == "orange") {
        dragged = k.id;
    }else{
        dragged = "";
    }

})
document.addEventListener("dragover", function (event) {
    event.preventDefault();
})
document.addEventListener("drop", async function (event) {
    var droploc = event.target as Element;
    if (dragged != "") {
        if (droploc.nodeName == "DIV" && droploc.getAttribute("class") == "zone") {
            droploc.innerHTML = "";
            var tempD = dragged;
            var test = document.getElementById(tempD).cloneNode();
            droploc.appendChild(test);
            await delay(5000);
            var counter = 0;
            for (counter = 0; counter < droploc.children.length; counter++) {
                if (test == droploc.children[counter]) {
                    droploc.removeChild(droploc.children[counter]);
                }
            }

        }
        else if (droploc.nodeName == "IMG" && droploc.parentElement.getAttribute("class") == "zone") {
            var par = document.getElementById(droploc.parentElement.getAttribute("id"));
            par.innerHTML = "";
            var tempD = dragged;
            var test = document.getElementById(tempD).cloneNode();
            par.appendChild(test);
            await delay(5000);
            for (counter = 0; counter < par.children.length; counter++) {
                if (test == par.children[counter]) {
                    par.removeChild(par.children[counter]);
                }
            }

        }
    }

})

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}