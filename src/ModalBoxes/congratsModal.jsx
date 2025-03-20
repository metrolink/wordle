import Modal from './modalDialog';

const Congrats = ({ isOpen, answer, onClose}) => {

    const handleClose = () => {
        onClose();
      };

    return (
      <Modal isOpen={isOpen} onClose={handleClose} buttonText='start again'>
        <h1>Congratulations!</h1>
        <br/>
        <div>You guessed correctly! The answer was: <b><h2>{answer}</h2></b></div>
        <p>Please refresh or click start again to start again</p>
      </Modal>
    );
  };
  
  export default Congrats