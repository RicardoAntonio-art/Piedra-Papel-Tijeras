//FUNCION QUE CREA NUMEROS ENTRE 1 Y 3
getComputerChoice = ( ) =>{ 
    return Math.floor( Math.random() *3 )+1;

};
//ESE NUMERO ALEATORIO LO ASIGNAMOS A UNA VARIABLE
let randomnumber = getComputerChoice();
let computerChoice;


//CON UN SWITCH "CONVERTIMOS" ESOS NUMEROS ALETORIOS EN CADENAS DE TEXTO
switch( randomnumber ){ 
    
    case 1:
        computerChoice = "piedra";    
    break;

    case 2:
        computerChoice ="papel";    
    break;

    case 3: 
        computerChoice = "tijera";    
    break;
}

//BLOQUE QUE GUARDA LA ELECCION DEL JUGADOR

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");



    btn1.addEventListener("click",  () => {   
          humanSelection = "piedra";
          PlayRound(humanSelection, computerSelection);
    });   

    btn2.addEventListener("click",  () => {   
        humanSelection = "papel";
        PlayRound(humanSelection, computerSelection);
  });

  btn3.addEventListener("click",  () => {   
    humanSelection = "tijera";
    PlayRound(humanSelection, computerSelection);
});
/*
    btn2.addEventListener("click", () => {   
        humanSelection = btn2.textContent; 
        console.log(getHumanChoice);       
    }); 

    btn3.addEventListener("click", () => {   
        humanSelection = btn3.textContent; 
        console.log(getHumanChoice );      
    }); 
*/





var humanSelection;
const computerSelection = computerChoice;


//ESTE ES EL INICIO DE UNA SOLA RONDA

let ComputerScore = 0;
let HumanScore = 0;
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
        console.log("Puntuacion del humano: " + ComputerScore);
    } else if ( humanchoice === "tijera" && computerchoice === "piedra"){ 
        ComputerScore++;
        console.log("La maquina gana! su puntuacion es de: " + ComputerScore);
        console.log("Puntuacion del humano: " + HumanScore);
    }else if ( humanchoice === computerchoice){ 
        console.log("Es un empate");
    }
     else {
        HumanScore++;
        console.log("El humano gana! su puntuacion es de: " + HumanScore);
        console.log("Puntuacion de la Maquina: " + ComputerScore);
    }
}

/*
/*
PlayGame = ()=> {
   
    
}

PlayGame();
PlayGame();
PlayGame();
PlayGame();
PlayGame();

//COMPARAMOS LAS PUNTUACIONES FINALES
if( ComputerScore > HumanScore ){ 
    console.log("La maquina gana la partida!");
} else if ( HumanScore > ComputerScore){
    console.log("El Humano Gano la partida");
}else{ 
    console.log("FUE UN EMPATE");
}





*/                                     


