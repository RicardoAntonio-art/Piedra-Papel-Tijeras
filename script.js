//FUNCION QUE CREA NUMEROS ENTRE 1 Y 3
getComputerChoice = ( ) =>{ 
    return Math.floor( Math.random() *3 )+1;

};
//ESE NUMERO ALEATORIO LO ASIGNAMOS A UNA VARIABLE
let randomnumber = getComputerChoice();
let randomword;


//CON UN SWITCH "CONVERTIMOS" ESOS NUMEROS ALETORIOS EN CADENAS DE TEXTO
switch( randomnumber ){ 
    
    case 1:
        randomword = "piedra";    
    break;

    case 2:
        randomword ="papel";    
    break;

    case 3: 
        randomword = "tijera";    
    break;
}

//FUNCION QUE GUARDA LA ELECCION DEL JUGADOR
let answerHuman;
getHumanChoice = () => { 
     answerHuman = prompt("¿Piedra, Papel o Tijeras?");
     return answerHuman.toLowerCase();  //HACEMOS QUE LA OPCION HUMANA NO DISTINGA ENTRE
                                        //MAYUSCULAS O MINUSCULAS
}
//ESTE ES EL INICIO DE UNA SOLA RONDA
let ComputerScore = 0;
let HumanScore = 0;

/*
PlayGame () =>{ 
    
}
*/


PlayRound = (humanchoice, computerchoice) =>{ 
    console.log( "El humano escogio " + humanchoice + " y la maquina " + computerchoice);

    if( humanchoice === "piedra" && computerchoice === "papel"){         
        ComputerScore++;
        console.log("La maquina gana!");
        console.log("Puntuacion de la Maquina: " + ComputerScore);
        console.log("Puntuacion del humano: "+ HumanScore);

    } else if ( humanchoice === "papel" && computerchoice === "tijera"){
        ComputerScore++;
        console.log("La maquina gana! su puntuacion es de: " + ComputerScore);
        console.log("Puntuacion de la Maquina: " + ComputerScore);
    } else if ( humanchoice === "tijera" && computerchoice === "piedra"){ 
        ComputerScore++;
        console.log("La maquina gana! su puntuacion es de: " + ComputerScore);
        console.log("Puntuacion de la Maquina: " + ComputerScore);
    } else {
        HumanScore++;
        console.log("El humano gana! su puntuacion es de: " + HumanScore);
        console.log("Puntuacion de la Maquina: " + ComputerScore);
    }
}


const humanSelection = getHumanChoice();
const computerSelection = randomword;

PlayRound(humanSelection, computerSelection);

