window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}

//var kepek = ["images/_DSC3561.jpeg", "images/_DSC3573.jpeg", "images/_DSC1668.jpeg"];
//var cimek = ["1. kép címe", "2. kép címe", "3. kép címe"];

var kep1 = {
    eleresiut: "images/1.jpg",
    cim: "1. kép címe",
    leiras: "1. kép leírása"
};

var kep2 = {
    eleresiut: "images/2.jpg",
    cim: "2. kép címe",
    leiras: "3. kép leírása"
};

var kep3 = {
    eleresiut: "images/3.jpg",
    cim: "3. kép címe",
    leiras: "3. kép leírása"
};

var kepTomb = [kep1, kep2, kep3];

function init() {
    for (var i = 0; i < kepTomb.length; i++) {
        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
        $("article")[0].innerHTML += elem;
    }


    console.log(kepTomb);
    for (var i = 0; i < $("article img").length; i++) {
        $("article img")[i].src = kepTomb[i].eleresiut;
        $("article h3")[i].innerHTML = kepTomb[i].cim;
        $("article p")[i].innerHTML = kepTomb[i].leiras;
//        $("article img")[i].src = kepek[i];
//        $("article h3")[i].innerHTML = cimek[i];

    }
//    $("article img")[1].src="images/_DSC3573.jpeg";
//    $("article img")[2].src="images/_DSC1668.jpeg";

    for (var i = 0; i < kepTomb.length; i++) {
        $("article div img")[i].addEventListener("click", betolt);

    }
    document.getElementById("bal").addEventListener("click", bal);
    document.getElementById("jobb").addEventListener("click", jobb);

}
var index = 0;

function bal() {
    $("section div img")[0].src = kepTomb[index].eleresiut;
    $("section div h3")[0].innerHTML = kepTomb[index].cim;
    $("section div p")[0].innerHTML = kepTomb[index].leiras;

    index--;
    if (index < 0) {
        index = kepTomb.length - 1;
    }
}

function jobb() {
    $("section div img")[0].src = kepTomb[index].eleresiut;
    $("section div h3")[0].innerHTML = kepTomb[index].cim;
    $("section div p")[0].innerHTML = kepTomb[index].leiras;
    index++;
    if (index === kepTomb.length) {
        index = 0;
    }
}

function betolt() {
    var index = this.id;//hanyadik kep
//    console.log(kepTomb[index].eleresiut);
//    console.log(kepTomb[index].cim);
//    console.log(kepTomb[index].leiras);
    $("section div img")[0].src = kepTomb[index].eleresiut;
    $("section div h3")[0].innerHTML = kepTomb[index].cim;
    $("section div p")[0].innerHTML = kepTomb[index].leiras;
}

