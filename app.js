var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Set up main div
var head = document.getElementById("head");
//Create the layout
//create div for the buttons
var butDiv = document.createElement("div");
butDiv.style.display = "inline-block";
butDiv.style.marginBottom = "-5px"; //I know this is a bad way of doing it
head.appendChild(butDiv);
//three buttons
var grA = document.createElement("button");
var grB = document.createElement("button");
var grC = document.createElement("button");
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
var borS = "1px solid";
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
var mainDiv = document.createElement("div");
head.appendChild(mainDiv);
mainDiv.style.marginTop = "0px";
mainDiv.style.padding = "50px";
mainDiv.style.backgroundColor = "white";
//mainDiv style
mainDiv.style.border = borS;
//three divs for three submenus
var dA = document.createElement("div");
dA.setAttribute("id", "dA");
dA.style.padding = "5px";
dA.style.backgroundColor = "orange";
dA.style.border = "1px solid black";
dA.draggable = false;
var dB = document.createElement("div");
dB.setAttribute("id", "dB");
dB.style.padding = "5px";
dB.style.backgroundColor = "orange";
dB.style.border = "1px solid black";
dB.draggable = false;
var dC = document.createElement("div");
dC.setAttribute("id", "dC");
dC.style.padding = "5px";
dC.style.backgroundColor = "orange";
dC.style.border = "1px solid black";
dC.draggable = false;
aClick();
//show content in button-triggered divs
var i = 0;
for (i = 1; i < 11; i++) {
    var im = document.createElement("img");
    im.style.padding = "2px";
    im.src = "/images/group_a/a-" + i + ".png";
    im.setAttribute("id", "a" + i);
    im.style.width = "90px";
    im.style.height = "relative";
    im.draggable = true;
    dA.appendChild(im);
}
for (i = 1; i < 6; i++) {
    var im = document.createElement("img");
    im.style.padding = "2px";
    im.setAttribute("id", "b" + i);
    im.src = "/images/group_b/b-" + i + ".png";
    im.style.width = "90px";
    im.style.height = "relative";
    im.draggable = true;
    dB.appendChild(im);
}
for (i = 1; i < 8; i++) {
    var im = document.createElement("img");
    im.setAttribute("id", "c" + i);
    im.style.padding = "2px";
    im.src = "/images/group_c/c-" + i + ".png";
    im.style.width = "90px";
    im.style.height = "relative";
    im.draggable = true;
    dC.appendChild(im);
}
//create div that will house 11x11 grid
var holder = document.createElement("div");
holder.style.display = "stretch";
head.appendChild(holder);
//11x11 div grid
var j = 0;
for (i = 0; i < 11; i++) {
    var horDivGrid = document.createElement("div");
    holder.appendChild(horDivGrid);
    horDivGrid.setAttribute("id", i + "");
    horDivGrid.style.alignContent = "center";
    for (j = 0; j < 11; j++) {
        var verGrid = document.createElement("div");
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
        }
        else {
            verGrid.style.width = "91px";
            verGrid.style.height = "32px";
        }
    }
}
var dragged = "";
document.addEventListener("dragstart", function (event) {
    var k = event.target;
    if (k.nodeName == "IMG" && k.parentElement.style.backgroundColor == "orange") {
        dragged = k.id;
    }
    else {
        dragged = "";
    }
});
document.addEventListener("dragover", function (event) {
    event.preventDefault();
});
document.addEventListener("drop", function (event) {
    return __awaiter(this, void 0, void 0, function () {
        var droploc, tempD, test, counter, par, tempD, test;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    droploc = event.target;
                    if (!(dragged != "")) return [3 /*break*/, 4];
                    if (!(droploc.nodeName == "DIV" && droploc.getAttribute("class") == "zone")) return [3 /*break*/, 2];
                    droploc.innerHTML = "";
                    tempD = dragged;
                    test = document.getElementById(tempD).cloneNode();
                    droploc.appendChild(test);
                    return [4 /*yield*/, delay(5000)];
                case 1:
                    _a.sent();
                    counter = 0;
                    for (counter = 0; counter < droploc.children.length; counter++) {
                        if (test == droploc.children[counter]) {
                            droploc.removeChild(droploc.children[counter]);
                        }
                    }
                    return [3 /*break*/, 4];
                case 2:
                    if (!(droploc.nodeName == "IMG" && droploc.parentElement.getAttribute("class") == "zone")) return [3 /*break*/, 4];
                    par = document.getElementById(droploc.parentElement.getAttribute("id"));
                    par.innerHTML = "";
                    tempD = dragged;
                    test = document.getElementById(tempD).cloneNode();
                    par.appendChild(test);
                    return [4 /*yield*/, delay(5000)];
                case 3:
                    _a.sent();
                    for (counter = 0; counter < par.children.length; counter++) {
                        if (test == par.children[counter]) {
                            par.removeChild(par.children[counter]);
                        }
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
});
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
