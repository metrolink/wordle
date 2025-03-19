import Modal from './modalDialog';

const FailedAttempt = ({ isOpen, answer, onClose}) => {
    const handleClose = () => {
        onClose();
      };
    return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h1>Too bad!</h1>
        <br/>
        <div>You ran out of attempts! The answer was: <b><h2>{answer}</h2></b></div>
        <p>Please refresh or click try again to start again</p>
      </Modal>
    );
  };
  
  export default FailedAttempt