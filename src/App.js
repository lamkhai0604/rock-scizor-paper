import React, { useState } from "react";
import "./style.css";
import Box from "./component/Box";


export const items = {
  scissors: {
    name: "scissors",
    img: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    img: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    img:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};

export const getRandomChoice = () => {
  let choiceNames = Object.keys(items); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
  let choiceName = choiceNames[randomIndex];
  return items[choiceName];
};


export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};


// HOW TO MAKE A FUNCTION COMPONENT
function App() {
  //selectedItem can change depend on you, just use .set is method
  let [selectedItem, setSelectedItem] = useState({}); //use useState function to inittialize the selectedItem value
  const [computerChoice, setComputerChoice] = useState(getRandomChoice());
  const [playerChoice, setPlayerChoice] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  const [prompt, setGamePrompt] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);

  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = items[playerChoice];
    const newComputerChoice = items[compChoice];
    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory(gameHistory);
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
  };
  const DEFAULT_IMG =
    "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";
    
  function Box(props) {
    const won = props.title === props.previousWinner;
    let className;
    const hasPreviousGame =
      props.previousWinner === "Computer" || props.previousWinner === "You";
    if (hasPreviousGame) {
      className = won ? "winner" : "loser";
    }

    let prompt;
    if (won) {
      prompt = "Won";
      className = won ? "winner" : "loser";
    } else if (props.previousWinner === "Tie") {
      prompt = "Tie";
    } else if (props.previousWinner === null) {
      prompt = "Start";
    } else {
      prompt = "Lose";
    }

    return (
      <div className={`choice-card ${className}`}>
        <h1>{props.title}</h1>
        <img src={props.img || DEFAULT_IMG} alt={props.title} />
        <h3>{prompt}</h3>
      </div>
    );
  }


  return (
    <div>

      <Box
        title="You"
        img={playerChoice && playerChoice.img}
        previousWinner={previousWinner} />

      <h1>{prompt}</h1>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success btn-lg"
          onClick={() => onPlayerChoose("rock")}
        >
          Rock
  </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => onPlayerChoose("paper")}
        >
          Paper
  </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => onPlayerChoose("scissors")}
        >
          Scissors
  </button>
      </div>
      <Box
        title="Computer"
        img={computerChoice && computerChoice.img}
        previousWinner={previousWinner} />


      <div className="col-md-4 themed-grid-col">
        <h3>History</h3>
        <ul>
          {gameHistory.map(result => {
            return <li>{result}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}



// HOW TO DEFINE THE CLASS COMPONENT
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItem: {},
//       result: false
//     };
//   };


//   onPlay = item => {
//     console.log(item);
//     this.setState({ selectedItem: items[item], result: false });
//   };

//   render() {
//     console.log("asd", this.state.selectedItem);

//     return (
//       <div>
//         <Box
//           title="you"
//           img={this.state.selectedItem.img}
//           name={this.state.selectedItem.name}
//           win={this.state.result}
//         />
//         <h1>{prompt}</h1>
//         <div className="d-flex justify-content-center">
//         <button className="btn btn-success btn-lg mx-1" onClick={() => this.onPlay("Rock")}>Rock</button>
//         <button className="btn btn-success btn-lg mx-1" onClick={() => this.onPlay("Scissors")}>Scissors</button>
//         <button className="btn btn-success btn-lg mx-1" onClick={() => this.onPlay("Paper")}>Paper</button>
//         </div>
//         <Box
//           title="computer"
//           img="http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
//           name="scissors"
//           win={false}
//         />
//       </div>
//     );
//   }
// }

export default App;
