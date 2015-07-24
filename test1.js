window.onload = function() {
    var render1 = setupRender("canvas1", 320, 200);
    var render2 = setupRender("canvas2", 160, 200);

    var x, y;

    for (y = 0; y < render1.pixelHeight; y++) {
        for (x = 0; x < render1.pixelWidth; x++) {
            putPixel(render1, x, y, (x / render1.pixelWidth) * 255, (y / render1.pixelHeight) * 255, 0, 255);
        }
    }

    for (y = 0; y < render2.pixelHeight; y++) {
        for (x = 0; x < render2.pixelWidth; x++) {
            putPixel(render2, x, y, 0, (x / render2.pixelWidth) * 255, (y / render2.pixelHeight) * 255, 255);
        }
    }

    updateRender(render1);
    updateRender(render2);
};
