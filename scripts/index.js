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