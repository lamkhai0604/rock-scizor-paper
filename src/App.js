import React from 'react';
import './style.css';
import Box from './component/Box'

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};
function App() {
  return (
    <div className="App">

      <Box name="Player" color="red" winner={false} imgURL={choices.rock} />
      <Box name="Computer" color="orange" winner={true} imgURL={choices.paper} />


    </div>
  );
}










export default App;
