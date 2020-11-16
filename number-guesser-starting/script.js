
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Paso 3

//Esta funcion crea un numero aleatorio entre 0 y 9 
const generateTarget = () => {
return Math.floor(Math.random() * 9);
};

//Determina que conjetura esta mas cerca del numero objetivo

function compareGuesses(resultadoHumano, resultadoComputadora, numObj) {
    if (Math.abs(resultadoHumano - numObj) <=  Math.abs(resultadoComputadora - numObj)) {
        return true;
    } if  (Math.abs(resultadoHumano - numObj) >=  Math.abs(resultadoComputadora - numObj)){
        return false;
    };
};
//aumenta correctamente el la puntucon del ganador despues de ada ronda 
function updateScore (ganador){
    if (ganador === 'human'){
        return humanScore++;
    } if (ganador === 'computer'){
        return computerScore++;
    }
};

//Se utiliza para actulizar el umero de rondas 
function advanceRound () {
return currentRoundNumber ++;
}  

generateTarget();
compareGuesses();
advanceRound();
updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1

