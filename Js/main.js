let links = document.querySelectorAll(".link-item");


    for(let i = 0; i < links.length; i++){
        links[i].onclick = e =>{
            let n = 0;
            while(n < links.length){
                links[n++].classList.remove("active");
            }
            e.target.classList.toggle('active');
        }
    }




// Hide and show the active content
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

//open tab functionality
function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    var showTab = document.getElementById(tabName);
    showTab.classList.add("active-tab");

}
//show and hide the side Menu
var sideMenu = document.getElementById("side-menu");


function closeMenu() {
    sideMenu.style.right = "-200px";
}
function openMenu() {
    sideMenu.style.right = "0px";
}


// let items = document.querySelectorAll(".test li");
// console.log(items);
//     for(let i = 0; i < items.length; i++){
//         items[i].onclick = e =>{
//             let n = 0;
//             while(n < items.length){
//                 items[n++].classList.remove("active");
//                 console.log(n);
//             }
//             e.target.classList.toggle('active');
//         }
//     }