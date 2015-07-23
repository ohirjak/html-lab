function backingScale() {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
    }
    return 1;
}

function setupRender(canvasId, width, height) {
    var canvas = document.getElementById(canvasId);

    var scaleFactor = backingScale();

    if (scaleFactor > 1) {
        canvas.width = width * scaleFactor;
        canvas.height = height * scaleFactor;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    } else {
        canvas.width = width;
        canvas.height = height;
    }

    var realWidth = canvas.width;
    var realHeight = canvas.height;

    var ctx = canvas.getContext("2d");
    var imgData = ctx.createImageData(canvas.width, canvas.height);

    var render = {
        context: ctx,
        imageData : imgData,
        pixelWidth: realWidth,
        pixelHeight: realHeight,
        styleWidth: width,
        styleHeight: height
    }

    return render;
}

function updateRender(render) {
    render.context.putImageData(render.imageData, 0, 0);
}

function putPixel(render, x, y, red, green, blue, alpha) {
    render.imageData.data[(y * render.pixelWidth + x) * 4 + 0] = red;
    render.imageData.data[(y * render.pixelWidth + x) * 4 + 1] = green;
    render.imageData.data[(y * render.pixelWidth + x) * 4 + 2] = blue;
    render.imageData.data[(y * render.pixelWidth + x) * 4 + 3] = alpha;
}
