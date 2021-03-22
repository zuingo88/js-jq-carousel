function leftClick() {
    
    var currentImg = $('.active');
    var prevImg = currentImg.prev('img');

    if (currentImg.hasClass('first')) {
        var prevImg = $('img.last');
    }

    currentImg.toggleClass('active');
    prevImg.toggleClass('active');

    console.log(currentImg, prevImg);
}

function rightClick() {

    var currentImg = $('.active');
    var nextImg = currentImg.next('img');

    if (currentImg.hasClass('last')) {
        var nextImg = $('img.first');
    }
    
    currentImg.toggleClass('active');
    nextImg.toggleClass('active');

    console.log(currentImg, nextImg);
}

function init() {

    $('.right').click(rightClick);
    $('.left').click(leftClick);
}

$(document).ready(init);