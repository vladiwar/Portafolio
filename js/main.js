const picture = (element) =>{
    let samurai = "./../img/kojiro_Tanaka.jpg";
    let vladi = "./../img/kojiro_Tanaka-jump.jpg";
    element.src = element.bln ? samurai : vladi;
    element.bln = !element.bln;
}