//COMMON.

var _hearder = document.querySelector("#header");
var exScroll;


var _nav = document.querySelector("#nav");
var _navDot = _nav.querySelector('.dot');
var _navUl = _nav.querySelector('ul');
var _navList = _nav.querySelectorAll('li');
var _navEl = _nav.querySelectorAll('a');
var _navId = -1;
var i;
for(i = 0; i <_navList.length; i ++){
    if(_navList[i].classList.contains('selected')){
        _navId = i;
    }
    _navEl[i].addEventListener('mouseenter', onEnterNavEl);
}
_navUl.addEventListener('mouseenter', onEnterNav);
_navUl.addEventListener('mouseleave', onLeaveNav);
function setNavDot() {
    if(_navId !== -1){
        var $el = _navList[_navId], posX = $el.offsetLeft, width = $el.offsetWidth, dotPosX = posX - 30 + width / 2 - 3;
        _navDot.style.transform = "translateX("+ dotPosX + "px)";
        setTimeout(function(){
            _nav.classList.add('active');
        }, 10)
        console.log(posX, width);
    }else{
        _nav.classList.add('active');
        _navDot.style.opacity = 0;
    }
}
setNavDot();

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
    // var posscroll = window.pageYOffset;
    // 현재 위치보다 스크롤이 커질 때 마다 화면에 헤더가 없어지고, 현재 위치보다 스크롤이 작아질때 마다 화면에 해더가 생긴다. 
    // if(posscroll < posscroll+100){
    //     console.log("추가");
    // }else{
    //     console.log("빼기")
    // }

    // console.log(exScroll);
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