/* - auto toeter en gasgeven - */
var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid);
    },

    toeteren: function () {
        console.log("toet!")
    }
}
mijnauto.toeteren();
mijnauto.toeteren();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
/* - auto toeter en gasgeven - */


/* - imageslider - */
var teller = 0;
var pictures = [1,2,3,4,5,6,7,8,9];

var sliderholder = document.getElementById("slideholder");
sliderholder.style.backgroundImage = "url('img/pics1.jpg')";

sliderholder.addEventListener("click", function () {
    sliderholder.style.backgroundImage = "url('img/pics" + getPic() + ".jpg')";
});

function getPic () {
    if (teller >= pictures.length) {
        teller = 1;
    }
    else {
        teller++;
    }
    return teller;
}
/* - imageslider - */