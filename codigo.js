//Developed by Alisson

var tempo_para_lance = "3"; //digite o valor em segundos que seja menor que 15 e maior que 0, RECOMENDADO: 3

// Não mexe em nada daqui pra baixo
var last_t = "";
function startlopper(){
    var t1 = document.getElementById("L_ContDown_1_" + CodigoLeilao).textContent;
    var t2 = document.getElementById("L_ContDown_2_" + CodigoLeilao).textContent;
    if (t1 == "0" && t2 == "8"){
        if (last_t == t2)
            return;
        last_t = t2;
        console.log("Lance inciado!")
        ExecutarLance(CodigoLeilao);
    }
    setTimeout(startlopper, 100);
}
startlopper();
