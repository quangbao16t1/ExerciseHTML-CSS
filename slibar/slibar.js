function openSubMenu() {
    const x = document.getElementById("submenu");
    if(x.style.display === "none") {
        document.getElementById("dropdown").style.transform = "transform: rotate(180deg);"
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function eventSibar() {
    // document.getElementById("slibar").style.width = "0.25%";
    document.getElementById("slibar_content").style.display = "none";
    document.getElementById("slibar_logo").style.display = "none";
    document.getElementById("slibar_hidden").style.visibility = "visible";
    document.getElementById("slibar_hidden").style.width = "60px";
    document.getElementById("silogo").style.visibility = "visible";
    document.getElementById("silogo").style.width = "60px";
    document.getElementById("slibar_hidden").style.marginTop = "80px"

}