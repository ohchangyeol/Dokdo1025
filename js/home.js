//HOME.
var _mainView = document.querySelector('#main-view');
var _mainImg = _mainView.querySelector('#main-img');
var _s = _mainImg.querySelectorAll('.s');    
var _vW= window.innerWidth;
var _vH= window.innerHeight;
var _max = _s.length;
var _cuId = 0;

window.addEventListener("resize",onresize)
function onresize(){
    _vW = window.innerWidth;
    _vH = window.innerHeight;
    _mainImg.style.width = (_vW * _max )+"px";
    for (var i = 0; i < _max; i++) {
    _s[i].style.width = _vW + 'px';
    }
    var left = _vW * _cuId *-1;
    _mainImg.style.left = left+"px";
    // console.log(left);
}
onresize();
setInterval(function(){
    _cuId ++;
    if(_cuId === 3){
        _cuId = 0;
    }
    // console.log(_cuId);
    onresize();
},4000);