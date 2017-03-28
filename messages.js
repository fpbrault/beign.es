$(document).ready(function () {
    var textArray = [
        'GET DONUTS. NOW',
        'BRING DONUTS TOMORROW',
        'DO NOT forget to bring DONUTS',
        "You've just got donutted!!!",
        'DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS DONUTS',
        "D'OH.  In fact, DONUTS",
        "We really love donuts. Good thing that you'll bring some tomorrow, eh?",
        'YOU SHALL NOT PASS. ...UNLESS YOU BRING DONUTS TOMORROW',
        'WEATHER FORECAST: Donuts rain, provided by YOU',
        'Your entire existence has been altered by the fact that you are now in a perpetual state of "donutted", drifting between planes of existence. (AAsanovic)'
    ];
    $('#text-box').randomText(textArray, 50000, " "); // ( array, interval, ["reload text or html"] )
});
// custom jquery plugin loadText()
$.fn.randomText = function (textArray, interval, randomEle, prevText) {
    var obj = $(this);
    if ($('#text-content').length == 0) {
        obj.append('<div id="text-content">');
    }
    var textCont = $('#text-content');
    if (typeof randomEle != 'undefined') {
        if ($('#randomizer').length == 0) {
            obj.append('<a href="javascript:;" id="randomizer"><em>' + randomEle);
        }
    }
    textCont.fadeOut('slow', function () {
        var chosenText = random_array(textArray);
        while (chosenText == prevText) {
            chosenText = random_array(textArray);
        }
        textCont.empty().html(chosenText);
        textCont.fadeIn('slow');
        sendText = chosenText;
    });
    timeOut = setTimeout(function () {
        obj.randomText(textArray, interval, randomEle, sendText);
    }, interval);
    $("#randomizer").click(function () {
        if (!textCont.is(':animated')) {
            clearTimeout(timeOut);
            obj.randomText(textArray, interval, randomEle, sendText);
        } // animation check prevents "too much recursion" error in jQuery 
    });
}
//public function
function random_array(aArray) {
    var rand = Math.floor(Math.random() * aArray.length + aArray.length);
    var randArray = aArray[rand - aArray.length];
    return randArray;
}