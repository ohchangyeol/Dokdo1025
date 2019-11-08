//TONER.

var $viewItem = document.querySelectorAll(".view-item");
var $btnList = document.querySelector("#sub1-btn-list");
var $btnlistBtn = $btnList.querySelectorAll("button");
for (var i = 0; i < $viewItem.length; i++) {
    var $ItembtnNone = $viewItem[i].querySelector(".none");
    $ItembtnNone.addEventListener("click",function(e){
        e.preventDefault();
        // $viewItem[i].style.display = "none";
        // $ItembtnNone.parentElement
        // console.log($ItembtnNone.parentElement);
        // console.log(e.currentTarget)
        var targeting = e.currentTarget;
        // console.log(targeting);
        var model = targeting.parentElement.parentElement;
        // console.log(model);
        model.style.display = "none";
    });
    $btnlistBtn[i].addEventListener("click",function(e){
        e.preventDefault();
        var targeting = e.currentTarget;
        var id = Array.prototype.slice.call($btnlistBtn).indexOf(targeting);
        $viewItem[id].style.display = "block";
        // for(var j = 0; j < $viewItem.length ; j++){
        //     console.log($viewItem[j]);
        //     $viewItem[j].style.display = "block";
        // }
    })
}