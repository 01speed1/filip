let temporalValue=0;

let calculadora_button = document.getElementsByClassName("calculadora-button");
let calculadora_diplay_number = document.getElementById("calculadora-diplay-number") ;

let setDisplatNumber =  (value) => {

    temporalValue = ( temporalValue == 0 )?value: temporalValue+=value;

    calculadora_diplay_number.setAttribute('value', temporalValue) 
    calculadora_diplay_number.innerHTML = temporalValue
}

let getValueButton = (btn) =>  {
    if (btn.value == "clean" ) {temporalValue = 0; return 0; }
    if (!isNaN(btn.value)) { operate(btn.value, temporalValue ) } 
    else { return btn.value }
    
} 

for (let btn of calculadora_button ) {
    btn.addEventListener("click", () => { setDisplatNumber( getValueButton(btn) ) } )
}


const operate = ( simbol, value ) => {
    switch(simbol){
        case "+" :
            setDisplatNumber(temporalValue+=value);
            break;
        case "-" :
            setDisplatNumber( temporalValue-=value);
            break;
        case "*" :
            setDisplatNumber(temporalValue*=value);
            break;
        case "/" :
            setDisplatNumber( temporalValue/=value);
            break;
        default:
            alert("seleccione un operador")
    }
}
