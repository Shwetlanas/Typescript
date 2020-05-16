var message = "Hello";
function f(message) {
    console.log(message);
}
function dosomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
function somecolor() {
    var color_green = 0;
    var color_red = 1;
    var color_blue = 2;
    var color;
    (function (color) {
        color[color["green"] = 0] = "green";
        color[color["red"] = 1] = "red";
        color[color["blue"] = 2] = "blue";
    })(color || (color = {}));
    var background_color = color.blue;
}
somecolor();
