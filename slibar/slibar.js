var countSubmenu = 0;
function openSubMenu() {
    const x = document.getElementById("submenu");
    if(countSubmenu %2 == 0) {
        document.getElementById("dropdown").style.display = "none";
        document.getElementById("dropup").style.display = "block";
        x.style.display = "block";
        countSubmenu ++;
    } else {
        x.style.display = "none";
        document.getElementById("dropdown").style.display = "block"
        document.getElementById("dropup").style.display = "none"
        countSubmenu ++;
    }
}

var countSubChart = 0;
function openSubChart() {
    const x = document.getElementById("subchart");
    if(x.style.display == "none") {
        document.getElementById("dropdown2").style.display = "none";
        document.getElementById("dropup2").style.display = "block";
        x.style.display = "block";
        countSubChart ++;
    } else {
        x.style.display = "none";
        document.getElementById("dropdown2").style.display = "block"
        document.getElementById("dropup2").style.display = "none"
        countSubChart ++;
    }
}

function stopProp(event) {
    if(document.getElementById("submenu").click) {
        event.stopPropagation();
    }
}
var count = 0;
function eventSibar() {
    const body = document.querySelector('body');
    toggle = body.querySelector('.toggle');
    if(count % 2 == 0) {
        document.getElementById("slibar_content").style.display = "none";
        document.getElementById("slibar_logo").style.display = "none";
        // document.getElementById("slibar_hidden").style.visibility = "visible";
        toggle.style.visibility = "visible";
        document.getElementById("slibar_hidden").style.width = "60px";
        document.getElementById("silogo").style.visibility = "visible";
        document.getElementById("silogo").style.width = "60px";
        document.getElementById("slibar_hidden").style.marginTop = "80px"
        document.getElementById("dartmode").style.display = "none"
        count++;
    } else {
        document.getElementById("slibar_content").style.display = "block";
        document.getElementById("slibar_logo").style.display = "flex";
        document.getElementById("slibar_hidden").style.visibility = "hidden";
        document.getElementById("silogo").style.visibility = "hidden";
        document.getElementById("dartmode").style.display = "flex";
        count++;
    }
}
function openChart() {
    document.getElementById("chartsi").style.visibility = "visible";
}
function hiddenChart() {
    document.getElementById("chartsi").style.visibility = "hidden";
    const lii = document.getElementById("liHiddenChart");
    lii.style.borderRight ="unset";
    lii.style.backgroundColor = "unset";
    lii.style.color = "unset";
}
function overLiChart() {
    const lii = document.getElementById("liHiddenChart");
    lii.style.borderRight ="2px blue solid";
    lii.style.backgroundColor = "#3eb9d8";
    lii.style.color = "blue";
}
var dem = 0;
function dartMode() {
    const body = document.querySelector('body'),
    sidebar = body.querySelector('.slibar');
    // document.getElementById("switch").style.transition = "tras"
   if(dem %2 == 0) {
        document.getElementById("slibar").style.backgroundColor = "black";
        sidebar.style.color = "white";
        document.getElementById("slideRound").innerHTML = "&nbsp;Dark";    
        const a =  sidebar.querySelectorAll("a,i");
        for(let i = 0; i< a.length; i++) {
            a[i].style.color = "white";
        }
        dem ++;
   } else {
    document.getElementById("slibar").style.backgroundColor = "white";
    sidebar.style.color = "black";
    document.getElementById("slideRound").innerHTML = "&emsp;&nbsp;Light"; 
    const a =  sidebar.querySelectorAll("a,i");
    for(let i = 0; i< a.length; i++) {
        a[i].style.color = "black";
    }
    dem ++;    
   }
}