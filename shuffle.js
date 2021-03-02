
var pictures = document.getElementsByTagName("img");
var random = 0;
var randomNummers = [];

while (randomNummers.length < 9) {
    random = Math.floor(Math.random() * 9) + 1;
    if (randomNummers.lastIndexOf(random) == -1){
        randomNummers.push(random);
    }
}

random = 0;
for (var picture in pictures) {
    pictures[picture].src = "img/pics" + randomNummers[random] + ".jpg";
    random++;
}

/* for (var i = 0; i < pictures.length; i++) {
    random = Math.floor(Math.random() * 9) + 1;
    pictures[i].src = "img/pics" + random + ".jpg";
}
 */