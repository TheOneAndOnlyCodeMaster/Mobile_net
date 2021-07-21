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
function takePhoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img src='"+data_uri+"' id='picture'>";
    })
}
console.log('ml5:version', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
console.log("model is loaded");
}
function checkImage(){
    img = document.getElementById("picture");
    classifier.classify(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
    }
}