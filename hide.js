(function hide12306() {
    var orderDiv = $(".order-item");
    for(var i=0;i<orderDiv.length;i++) {
        var idx=orderDiv[i].innerHTML.indexOf("已退票");
        if(idx>0) {
            $(orderDiv[i]).css("opacity","0.3");
        }
    }
    
    setTimeout(hide12306,1000);
})();
