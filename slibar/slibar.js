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

var count = 0;
function eventSibar() {
    if(count % 2 == 0) {
        document.getElementById("slibar_content").style.display = "none";
        document.getElementById("slibar_logo").style.display = "none";
        document.getElementById("slibar_hidden").style.visibility = "visible";
        document.getElementById("slibar_hidden").style.width = "60px";
        document.getElementById("silogo").style.visibility = "visible";
        document.getElementById("silogo").style.width = "60px";
        document.getElementById("slibar_hidden").style.marginTop = "80px"
        count++;
    } else {
        document.getElementById("slibar_content").style.display = "block";
        document.getElementById("slibar_logo").style.display = "flex";
        document.getElementById("slibar_hidden").style.visibility = "hidden";
        document.getElementById("silogo").style.visibility = "hidden";
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