/*=== MENU SHOW ===*/
const showMenu = (toggleId, navId)=>{           /*konstanta showMenu*/ 
    const toggle = document.getElementById(toggleId),       /*propojení konstanty s ID*/ 
    nav = document.getElementById(navId)        /*nalezneme nav bar*/ 

    if (toggle && nav){
        toggle.addEventListener('click',()=>{      /*tak toggle buttonu přidáFunkci ('click')*/ 
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')   

/*=== REMOVE MENU ===*/
const navLink = document.querySelectorAll('.nav__links'),        /*nav__link je class linků*/ 
    navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')        /*když klikneme na link po otevření menu, tak se navMenu zavře*/ 
}
navLink.forEach(n => n.addEventListener('click',  linkAction))