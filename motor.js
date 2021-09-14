function Calcular() {
    
    var Altura = document.getElementById("altura").value;
    var Peso = document.getElementById("peso").value;

    var IMC = Peso/(Altura*Altura);

    if(IMC < 18.5){
        document.getElementById("result").innerHTML = "Abaixo do Peso"
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        document.getElementById("result").innerHTML = "Peso Normal"
    }
    else if (IMC >= 25 && IMC <= 29.9 ){
        document.getElementById("result").innerHTML = "Sobrepeso"
    }
    else if (IMC >= 30 && IMC <= 34.9 ){
        document.getElementById("result").innerHTML = "Obesidade Grau I"
    }
    else if (IMC >= 35 && IMC <= 39.9 ){
        document.getElementById("result").innerHTML = "Obesidade Grau II"
    }
    else{
        document.getElementById("result").innerHTML = "Obesidade Grau III ou Mórbida"
    }

}