function BOTAO(x) {
    document.getElementById("display").value += x;

}

function LIMPAR_TELA() {
    document.getElementById("display").value = "";
}

function CALCULAR() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value); 
    }
    catch (e) {
        display.value = "Erro";
    }
}
