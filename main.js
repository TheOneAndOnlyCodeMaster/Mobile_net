Webcam.set({
    dest_width: 300,
    dest_height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints:{
        facingMode: "environment"
    }
}) 
camera = document.getElementById("camera");
Webcam.attach(camera);