pics = document.getElementById("pics");
createPicsHolders();
createCatPictures();

function createPicsHolders () {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createCatPictures() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i + 1);

        catPicture = document.createElement("img");
        catPicture.src = "img/pics" + (i + 1) + ".jpg";
        catPicture.id = (i + 1);

        catPicture.addEventListener("click", function (){
            makeFavorite(this.id)
        });

        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(catPicture);
    }
}

function makeFavorite(id) {
    console.log("pic " + id);
    notFavorite = document.getElementsByClassName("favorite");
    for (var i = 0; i < notFavorite.length; i++) {
        notFavorite[i].style.backgroundImage = "none";
    }

    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('img/heart.png')";
}
