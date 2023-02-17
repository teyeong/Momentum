const images = [ "0.jpg", "1.jpg", "2.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const style = document.body.style;

/*
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
*/

style.backgroundImage = `url('img/${chosenImage}')`;
style.backgroundSize = "cover";
style.backgroundPosition = "center";