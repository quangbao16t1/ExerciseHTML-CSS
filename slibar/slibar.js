function openSubMenu() {
    const x = document.getElementById("submenu");
    if(x.style.display === "none") {
        document.getElementById("dropdown").style.transform = "transform: rotate(180deg);"
        x.style.display = "block";
    } else {
        x.style.display = "none";
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