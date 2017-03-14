/**
 * Created by 12156 on 2017/3/14.
 */

function setupCameraControls(container, root) {
    var translateZ = 0;
    var rotateX = 0;
    var rotateY = 0;
    var rotateXOffset = 0;
    var rotateYOffset = 0;
    var rotateXVelocity = 0;
    var rotateYVelocity = 0;
    var staticTranslateZ = window.innerWidth < 480 ? 800 : 0;

    root.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    root.style.webkitTransform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    function updateCamera(rotX, rotY, transZ) {
        var transformString = 'perspective(1000px) translateZ(' + (transZ - staticTranslateZ) + 'px) rotateY(' + rotX + 'deg) rotateX(' + -rotY + 'deg)';
        root.style.transform = transformString;
        root.style.webkitTransform = transformString;
    }

    function stepCamera() {
        rotateX += rotateXVelocity;
        rotateY += rotateYVelocity;
        var rotX = rotateX + rotateXOffset;
        var rotY = rotateY + rotateYOffset;

        rotateXVelocity *= 0.99;
        rotateYVelocity *= 0.99;

        updateCamera(rotX, rotY, translateZ);

        window.requestAnimationFrame(stepCamera);
    }
    window.requestAnimationFrame(stepCamera);

    var hammertime = new Hammer(container, { direction: Hammer.DIRECTION_ALL });
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.get('pinch').set({ enable: true });


    hammertime.on('pan', function(ev) {

        rotateXOffset = ev.deltaX / 10;
        rotateYOffset = ev.deltaY / 10;
        rotateXVelocity = 0;
        rotateYVelocity = 0;
        if (ev.isFinal) {
            rotateX += rotateXOffset;
            rotateY += rotateYOffset;
            rotateXVelocity = -ev.velocityX;
            rotateYVelocity = -ev.velocityY;
            rotateXOffset = 0;
            rotateYOffset = 0;
        }
    });
    container.addEventListener('mousewheel', function(ev) {
        translateZ += ev.deltaY;
        translateZ = Math.min(Math.max(0, translateZ), 600);
    });
}