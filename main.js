let checkBox = document.getElementById("menu-checkbox");
let navbarContent = document.getElementsByClassName("navbar-content")[0];
function menuToggle()
{
    console.log(checkBox.checked);
    if(checkBox.checked)
    {
        navbarContent.style.display = "block";
        navbarContent.classList.remove("menu-animation-out")
        navbarContent.classList.add("menu-animation-in")
    }else{
        navbarContent.classList.remove("menu-animation-in")
        navbarContent.classList.add("menu-animation-out")

    }
}

function menuOut()
{
    checkBox.checked = false;
    navbarContent.classList.remove("menu-animation-in")
    navbarContent.classList.add("menu-animation-out")
}