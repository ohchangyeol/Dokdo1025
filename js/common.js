//COMMON.

var _hearder = document.querySelector("#header");
var exScroll;
var _nav = document.querySelector("#nav");
var _navDot = _nav.querySelector('.dot');
var _navUl = _nav.querySelector('ul');
var _navList = _nav.querySelectorAll('li');
var _navEl = _nav.querySelectorAll('a');
const _teb = document.querySelector(".teb"); 
var _navId = -1;
var i;
var media = window.matchMedia("screen and (max-width: 1200px)");


if (media.matches) {
    mobileInit()
} else {
    deskTopInit();
}
media.addListener(function(e) {
    if(e.matches) {
        mobileInit()
    } else {
        console.log('데스크탑 화면 입니다.');
        deskTopInit();
    }
});

function deskTopInit() {
    for(i = 0; i <_navList.length; i ++){
        if(_navList[i].classList.contains('selected')) _navId = i;
        _navEl[i].addEventListener('mouseenter', onEnterNavEl);
    }
    _navUl.addEventListener('mouseenter', onEnterNav);
    _navUl.addEventListener('mouseleave', onLeaveNav);
    setNavDot();

}
function mobileInit() {
    for(i = 0; i <_navList.length; i ++){
        if(_navList[i].classList.contains('selected')) _navId = i;
        _navEl[i].addEventListener('mouseenter', onEnterNavEl);
    }
    _teb.addEventListener('click',tebOnClick)
}


function tebOnClick () {
    if(_teb !== undefined){
        if(_nav.classList.contains("view")) _nav.classList.remove("view");
        else _nav.classList.add("view")
    }
}

function setNavDot() {
    if(_navId !== -1){
        var $el = _navList[_navId], 
            posX = $el.offsetLeft, 
            width = $el.offsetWidth, 
            dotPosX = posX - 30 + width / 2 - 3;
        _navDot.style.transform = "translateX("+ dotPosX + "px)";
        setTimeout(function(){
            _nav.classList.add('active');
        }, 10)
    }else{
        _nav.classList.add('active');
        _navDot.style.opacity = 0;
    }
}

function onEnterNavEl(e){
    var $el = e.currentTarget, posX = $el.offsetLeft, width = $el.offsetWidth, dotPosX = posX - 30 + width / 2 - 3;
    _navDot.style.transform = "translateX("+ dotPosX + "px)";
    if(_navId !== -1) _navList[_navId].classList.remove('selected');
}
function onEnterNav(e){
    _navDot.style.opacity = 1;
}
function onLeaveNav(e){
    if(_navId === -1){
        _navDot.style.opacity = 0;
    }else{
        var $el = _navList[_navId],
        posX = $el.offsetLeft, 
        width = $el.offsetWidth, 
        dotPosX = posX - 30 + width / 2 - 3;
        
        _navDot.style.transform = "translateX("+ dotPosX + "px)";
        _navList[_navId].classList.add('selected');
    }
}

window.addEventListener("scroll",function(e){
    var posscroll = window.scrollY;
    if(exScroll !== undefined){
        if(exScroll < posscroll){
            _hearder.classList.remove("nav-up");
            _hearder.classList.add("nav-down");
        }else{
            _hearder.classList.remove("nav-down");
            _hearder.classList.add("nav-up");
        }
    }
    exScroll = posscroll;
})
