var teller = 0;
var teller1 = 0;
var teller2 = 0;
var pictures1 = [1,2,3];
var pictures2 = [1,2,3];
var pictures3 = [1,2,3];

/* - SLIDER ONE - */
var sliderholder1 = document.getElementById("sliderholder1");
sliderholder1.style.backgroundImage = "url('img/sliderhair1.jpg')";

sliderholder1.addEventListener("click", function () {
   sliderholder1.style.backgroundImage = "url('img/sliderhair" + getPicOne() + ".jpg')";
});

function getPicOne() {
    if (teller >= pictures1.length) {
        teller = 1;
    }
    else {
        teller++;
    }
    return teller;
}
/* - SLIDER ONE - */

/* - SLIDER TWO - */
var sliderholder2 = document.getElementById("sliderholder2");
sliderholder2.style.backgroundImage = "url('img/slidereyes1.jpg')";

sliderholder2.addEventListener("click", function () {
    sliderholder2.style.backgroundImage = "url('img/slidereyes" + getPicTwo() + ".jpg')";
});

function getPicTwo() {
    if (teller1 >= pictures2.length) {
        teller1 = 1;
    }
    else {
        teller1++;
    }
    return teller1;
}
/* - SLIDER TWO - */

/* - SLIDER THREE - */
var sliderholder3 = document.getElementById("sliderholder3");
sliderholder3.style.backgroundImage = "url('img/sliderchin1.jpg')";

sliderholder3.addEventListener("click", function () {
   sliderholder3.style.backgroundImage = "url('img/sliderchin" + getPicThree() + ".jpg')";
});

function getPicThree() {
    if (teller2 >= pictures3.length) {
        teller2 = 1;
    }
    else {
        teller2++;
    }
    return teller2;
}
/* - SLIDER THREE - */