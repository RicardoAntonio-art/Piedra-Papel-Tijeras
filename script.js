//FUNCION QUE CREA NUMEROS ENTRE 1 Y 3
function getComputerChoice ( ) { 
    return Math.floor( Math.random() *3 )+1;
};
//CON UN SWITCH "CONVERTIMOS" ESOS NUMEROS ALETORIOS EN CADENAS DE TEXTO
function getComputerChoiceName(computerChoice) {
    switch (computerChoice) {
      case 1:
        return "piedra";
      case 2:
        return "papel";
      case 3:
        return "tijera";
    }
  }

//BLOQUE QUE GUARDA LA ELECCION DEL JUGADOR
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const cont = document.querySelector("#container");
const result1 = document.createElement("p");
const result2 = document.createElement("p");
const winner = document.createElement("h1");
const results = document.createElement("h1");
const selections = document.createElement("h2");


//EVENTOS EN LOS BOTONES
    btn1.addEventListener("click",  () => {   
          humanSelection = "piedra";
          PlayRound(humanSelection);                
    });   

    btn2.addEventListener("click",  () => {   
        humanSelection = "papel";
        PlayRound(humanSelection);
    });

  btn3.addEventListener("click",  () => {   
    humanSelection = "tijera";
    PlayRound(humanSelection);
    });

var humanSelection;


let ComputerScore = 0;
let HumanScore = 0;
PlayRound = (humanchoice, ) =>{ 
    const computerChoiceNumber = getComputerChoice();
    const computerChoice = getComputerChoiceName(computerChoiceNumber);
    selections.textContent = "El humano escogio " + humanchoice + " y la maquina " + computerChoice;   
    if (ComputerScore >= 5 || HumanScore >= 5) {
        // Determina el ganador 
        if (ComputerScore > HumanScore) {
            results.textContent = "La máquina gana la partida!";
        } else if (HumanScore > ComputerScore) {
            results.textContent = "El humano gana la partida!";
        } else {
            results.textContent = "¡Empate!";
        }
        // Desabilitamos los botones,
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        cont.appendChild(results);
        return; //Salimos de la funcion
    }

    if( humanchoice === "piedra" && computerChoice === "papel"){         
        ComputerScore++;
        winner.textContent = "La maquina gana!";
        result1.textContent = "Puntuacion de la Maquina: " + ComputerScore;
        result2.textContent = "Puntuacion del humano: "+ HumanScore;
        cont.appendChild(selections);
        cont.appendChild(result2);
        cont.appendChild(result1);
        cont.appendChild(winner);

    } else if ( humanchoice === "papel" && computerChoice === "tijera"){
        ComputerScore++;
        winner.textContent = "La maquina gana!";
        result1.textContent = "Puntuacion de la Maquina: " + ComputerScore;
        result2.textContent = "Puntuacion del humano: "+ HumanScore;
        cont.appendChild(selections);
        cont.appendChild(result2);
        cont.appendChild(result1);
        cont.appendChild(winner);

    } else if ( humanchoice === "tijera" && computerChoice === "piedra"){ 
        ComputerScore++;
        winner.textContent = "La maquina gana!";
        result1.textContent = "Puntuacion de la Maquina: " + ComputerScore;
        result2.textContent = "Puntuacion del humano: "+ HumanScore;
        cont.appendChild(selections);
        cont.appendChild(result2);
        cont.appendChild(result1);
        cont.appendChild(winner);

    }else if ( humanchoice === computerChoice){ 
        winner.textContent = "Es un empate";
        result1.textContent = "Puntuacion de la Maquina: " + ComputerScore;
        result2.textContent = "Puntuacion del humano: "+ HumanScore;
        cont.appendChild(selections);
        cont.appendChild(result2);
        cont.appendChild(result1);
        cont.appendChild(winner);
    }
     else {
        HumanScore++;
        winner.textContent = "El humano gana!"
        result2.textContent = "Puntuacion del Humano: " + HumanScore;
        result1.textContent = "Puntuacion de la Maquina: " + ComputerScore;
        cont.appendChild(selections);
        cont.appendChild(result2);
        cont.appendChild(result1);
        cont.appendChild(winner);
    }
}




                                   


