// mouse movement start
var Y = 0, X = 0;
var moveY = 0, moveX = 0;

$(document).mousemove(function (event) {
    Y = event.pageY;
    X = event.pageX;
});

setInterval(function () {
    moveY += ((Y - moveY) / 15);
    moveX += ((X - moveX) / 15);
    $(".mouseFollower").css({ top: moveY + 'px', left: moveX + 'px' });
}, 0);
// mouse movement over


// collision detection start
var mouse = document.getElementsByClassName('mouseFollower')[0];
var project = document.getElementsByClassName('project')[0];
setInterval(detectCollision, 100);

function detectCollision() {
    var mouseRect = mouse.getBoundingClientRect();
    var projectRect = project.getBoundingClientRect();

    if (projectRect.left < mouseRect.left + mouseRect.width &&
        projectRect.left + projectRect.width > mouseRect.left &&
        projectRect.top < mouseRect.top + mouseRect.height &&
        projectRect.height + projectRect.top > mouseRect.top) {
            console.log(project);

        collided();
        // mouse.
    } else {
        notCollided();
    }
}

function collided() {
    $(".mouseFollower").css({ height: 50 + 'px', width: 50 + 'px', 'margin-top': -25 + 'px', 'margin-left': -25 + 'px'});
}

function notCollided() {
    $(".mouseFollower").css({ height: 24 + 'px', width: 24 + 'px', 'margin-top': -12 + 'px', 'margin-left': -12 + 'px'})
}
// collision detection over
