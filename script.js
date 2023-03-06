function calcular(){
    var altura = document.getElementById("altura").value / 100
    var peso = document.getElementById("peso").value
    var imc = peso / altura ** 2;
    var resultado = ""
    if (imc < 18.5){
        resultado = "magro"
    }else if (imc < 24.9){
        resultado = "normal"
    }else if (imc < 29.9){
        resultado = "sobrepeso"
    }else if (imc < 39.9){
        resultado = "obesidade"
    }else if(imc > 39.9){
        resultado = "obesidade mórbida"
    }
    document.getElementById("resultado").value = "seu Imc é: " + imc.toFixed(2) + ", " + resultado;
}
function Clear(){
    var altura = document.getElementById("altura").value = ""
    var peso = document.getElementById("peso").value = ""
    var resultado = document.getElementById("resultado").value = ""
}
