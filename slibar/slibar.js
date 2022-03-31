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

document.getElementById("lichart").addEventListener("click", openSubMenu);

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
    const toggle = body.querySelector('.slibar');
    lichat =  document.getElementById("lichart");
    const liAll = toggle.querySelectorAll("li");
    // console.log(liAll);
    if(count % 2 == 0) {
        toggle.classList.add("toggle");
        toggle.querySelector(".submenu").style.display = "none";
        lichat.removeEventListener("click", openSubMenu);
        lichat.addEventListener("mouseover", openChart);
        lichat.addEventListener("mouseleave", overLiChart);
        // console.log()
        document.getElementById("dartmode").style.display = "none";
        document.getElementById("dropdown").style.display = "none";
        document.getElementById("dropup").style.display = "none";
        liAll.forEach((element) => {
            element.style.paddingLeft = "0";
        })
        count++;
    } else {
        toggle.classList.remove("toggle");
        lichat.addEventListener("click", openSubMenu);
        lichat.removeEventListener("mouseover", openChart);
        lichat.removeEventListener("mouseleave", overLiChart);
        document.getElementById("dartmode").style.display = "flex";
        document.getElementById("dropdown").style.display = "block";
        document.getElementById("dropup").style.display = "none";
        liAll.forEach((element) => {
            element.style.paddingLeft = "30px";
        })
        count++;
    }
}
function openChart() {
    console.log('openChart')
    document.getElementById("chartsi").style.display = "flex";
}
function hiddenChart() {
    document.getElementById("chartsi").style.display = "none";
}
function overLiChart() {
    document.getElementById("chartsi").style.display = "none";
}
var dem = 0;
function dartMode() {
    const body = document.querySelector('body'),
    header = document.querySelector('.header'),
    sidebar = body.querySelector('.slibar');
   if(dem %2 == 0) {
        sidebar.classList.add('dark');
        // sidebar.style.color = "white";
        document.getElementById("slideRound").innerHTML = "&nbsp;Dark";    
        const a =  sidebar.querySelectorAll("a,i");
        for(let i = 0; i< a.length; i++) {
            a[i].style.color = "white";
        }
        dem ++;
   } else {
    sidebar.classList.remove("dark");
    document.getElementById("slideRound").innerHTML = "&emsp;&nbsp;Light"; 
    const a =  sidebar.querySelectorAll("a,i");
    for(let i = 0; i< a.length; i++) {
        a[i].style.color = "black";
    }
    dem ++;    
   }
}
function languageOver() {
    const element = document.getElementById('flag');
    // element.classList.add('coco');
    element.style.visibility = 'visible';
}
function languageMove() {
    const element = document.getElementById('flag');
    // element.classList.add('coco');
    element.style.visibility = 'hidden';
}

var ulActive = document.querySelector(".slibar");
const activeLi = ulActive.querySelectorAll(".acti");
activeLi.forEach((element) => {
    element.addEventListener("click", () => {
        const currentActive = document.getElementsByClassName("active");
        currentActive[0].className = currentActive[0].classList.remove("active");
        element.classList.add("active");
        });
});