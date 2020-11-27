function Para_One() {
    var Inputs_Text = [];

    for (i=1; i<=6; i++){
        Inputs_Text.push(document.getElementById("Input_" + i).value);
    }
    document.getElementById("ShowPara_1").innerHTML = Inputs_Text.join(". ");
}
function Para_Two() {
    var Input_Text = [];

    for (j=7; j<=12; j++){
        Input_Text.push(document.getElementById("Input_" + j).value);
    }
    document.getElementById("ShowPara_2").innerHTML = Input_Text.join(". ");
}