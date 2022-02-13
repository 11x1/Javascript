const username = 'user'

const image_props = {
    'width': 80,
    'height': 100,
}

const canvas_props = {
    'width': 200,
    'height': 200,
    'background': '#2d2d2d',
    'foreground': '#ffffff'
}

const canvas = document.createElement('canvas')
const context = canvas.getContext("2d");

canvas.width = canvas_props['width'];
canvas.height = canvas_props['height'];

// Draw background
context.fillStyle = canvas_props["background"];
context.fillRect(0, 0, canvas.width, canvas.height);

// Create new image
const logo_img = new Image;

logo_img.onload = function() {
    context.drawImage(logo_img, canvas.width/2 - image_props['width']/2, canvas.height*0.05, image_props['width'], image_props['height']);

    // Draw text
    let default_size_font = 30
    context.font = 'bold ' + default_size_font.toString() + 'px Arial';
    context.fillStyle = canvas_props["foreground"];
    context.textAlign = "center";

    // Fit username to canvas
    let width = context.measureText(username).width
    while (width > canvas.width - 20) {
        default_size_font -= 1
        context.font = 'bold ' + default_size_font.toString() + 'px Arial';
        width = context.measureText(username).width
    }

    // Render textz
    context.fillText(username, canvas.width / 2, canvas.height*0.05 + image_props['height'] + context.measureText('M').width); // context.measureText('M').width returns approx. line height, please lmk if there is a better way
    document.getElementById('img').src = canvas.toDataURL()
}

logo_img.src = 'primordialpfp.png'
