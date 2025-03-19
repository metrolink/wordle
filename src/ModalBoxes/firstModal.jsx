import Modal from './modalDialog';

const Intro = ({ isOpen, onClose}) => {

    const handleClose = () => {
        onClose();
      };

    return (
      <Modal isOpen={isOpen} onClose={handleClose} buttonText='Start'>
        <h1>Welcome to wordle!</h1>
        <br/>
        <div>To play this game, you need a keyboard.</div>
        <p>The goal of the game is to guess a 5 letter word. Each key you type will count as one letter, and only a-z is allowed.</p>
        <p>When you have typed all 5 letters, and it is a valid word according to the english dictionary, you will get hints on what the hidden words is! <br/>
        If the box the letter is inside is grey, that means the letter <b>is not</b> part of the word.<br/>
        If the box is yellow, that means the letter <b>is</b> part of the word, but is in the wrong location <br/>
        If the bos is green, that means the letter <b>is both in the correct spot and part of the word</b></p>
        <p>Click start to start the game</p>
      </Modal>
    );
  };
  
  export default Intro