let temporalValueDisplay    = 0
let nextValueDisplay        = null
let previusValueDisplay     = null
let temporalOperator        = null
let previusOperator         = null
let resultOperation         = 0

const add = () =>  Number( previusValueDisplay) + Number(nextValueDisplay)
const rest = () => Number( previusValueDisplay) - Number(nextValueDisplay)
const multiply = () =>   (Number( previusValueDisplay) * Number(nextValueDisplay))
const divide = () => {
    if ( Number(nextValueDisplay) == 0 ) { nextValueDisplay = 1  }
    return  ( Number( previusValueDisplay) / Number(nextValueDisplay) ) 
} 

//get interface values
let calculadora_button = document.getElementsByClassName("calculadora-button")
let calculadora_diplay_number = document.getElementById("calculadora-diplay-number")

//set triggers btns 
for (let btn of calculadora_button ) { btn.addEventListener("click", () => { mainActionBtn(btn.value) })}

//set value on inteface display 
//temporalValueDisplay = ( temporalValueDisplay == 0 )?newValueBtn: (temporalValueDisplay+=newValueBtn).toString()
const setValueInterfaceDisplay = valueToDisplay => { calculadora_diplay_number.innerHTML = valueToDisplay }

//numero o simbolo

const mainActionBtn = (newValueBtn) => {
    
    if (!isNaN(newValueBtn) ){ 
        newValueBtn = newValueBtn.toString()
        temporalValueDisplay = ( temporalValueDisplay == 0 )?newValueBtn: temporalValueDisplay+=newValueBtn
        setValueInterfaceDisplay(temporalValueDisplay)
    } else {
        previusOperator =  (newValueBtn!="=") ?previusOperator = newValueBtn : previusOperator

        if (newValueBtn == "clean") { clean(); return; }

        if (!previusValueDisplay){
            
            previusValueDisplay = temporalValueDisplay
            temporalValueDisplay = 0
            setValueInterfaceDisplay(previusValueDisplay)
            temporalOperator = newValueBtn
        } else {
            nextValueDisplay = temporalValueDisplay
            temporalValueDisplay = 0
            resultOperation =  execOperation(newValueBtn)
            setValueInterfaceDisplay( "= " + resultOperation)
            nextValueDisplay = 0 
            temporalOperator = null
            previusValueDisplay = resultOperation
            
        }

    }
}

const execOperation = (temporalOperator) => {
    switch (temporalOperator) {

        case "+":
            return add()
            
        case "-":
            return rest()
    
        case "*":
            return multiply()

        case "/":
            return divide()

        case "=":
            return execOperation(previusOperator);

        case "clean":
            clean()
            return 0

        default:
            return "ups.." 

    }
}

const clean = () => {
    nextValueDisplay = null
    previusValueDisplay = null
    temporalOperator = null
    temporalValueDisplay = 0
    setValueInterfaceDisplay(temporalValueDisplay)
}