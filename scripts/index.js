infos = document.getElementById("inscription");


// affichage d'une alerte de bienvenue
var afficherInfos = (form) => {
    alert("Bonjour " + form.prenom.value + " "+ form.nom.value + ", votre inscription s'est bien déroulée ");
}
var tournerImage = () => {
    let img1 = document.getElementById("pick1").src;
    let img2 = document.getElementById("pick2").src;
    let img3 = document.getElementById("pick3").src;
    let img4 = document.getElementById("pick4").src;
    document.getElementById("pick2").src = img1;
    document.getElementById("pick3").src = img2;
    document.getElementById("pick4").src = img3;
    document.getElementById("pick1").src = img4;

}


var onClickSurOperateur = (op) => {
    operateur = op; 
    nb1 = +document.getElementById("afficher").value;
    console.log(nb1);
    document.getElementById("afficher").value = "";
}

let nb1 = 0;
let nb2 = 0; 
let operateur = "";

var onClickSurValider = () => {
    nb2 = +document.getElementById("afficher").value;
    if(operateur == "+") {
        document.getElementById("afficher").value = (nb1 + nb2);
    }
    else if(operateur == "-") {
        document.getElementById("afficher").value = (nb1 - nb2);
    }
    else if(operateur == "/") {
        document.getElementById("afficher").value = (nb1 / nb2);
    }
    else {
        document.getElementById("afficher").value = (nb1 * nb2);
    }
    setInterval(resetInput, 5000);
}

var resetInput = () => {

    document.getElementById("afficher").value = "";
}
var afficherNombres = (valeur) => {

    document.getElementById("afficher").value += valeur;
    console.log(document.getElementById("afficher").value);
}