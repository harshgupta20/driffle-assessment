import { Modal } from '@mui/material'
import "../styles/AddModal.css";

// DRIFFLE LOGO
import LOGO from "../assets/driffle-logo.png";
import { AppContext } from '../App';
import { useContext } from 'react';


const AddModal = ({ open, setOpen }) => {
  
  //CONTEXT
  const {update, setUpdate} = useContext(AppContext);
  
  //Modal Close Function
  const handleClose = () => setOpen(false);
  
  const AddDataInStorage = () => {
    const title = document.getElementById('add-modal-title').value;
    const desc = document.getElementById('add-modal-textarea').value;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const id = new Date().getTime();
    
    if (title && desc) {
      const data = { title, desc, date, time, id }
      const oldData = JSON.parse(localStorage.getItem('notesData'));
      if (oldData) {
        const newData = [...oldData, data];
        localStorage.setItem('notesData', JSON.stringify(newData));
      } else {
        localStorage.setItem('notesData', JSON.stringify([data]));
      }
      setUpdate(!update);
      handleClose();
    } else {
      alert('Please fill all the fields');
    }
  }




    
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div id="add-modal-main">
          <div id="add-modal-data">
            <h3 id="add-modal-heading"><img src={LOGO} style={{ width: "30px", backgroundColor: "#212121", marginRight: "20px" }} alt="" />Add Note</h3>
            <input type="text" name="title" placeholder='Title...' id="add-modal-title" />
            <textarea name="" cols="30" rows="10" id="add-modal-textarea" placeholder='Desciption...'></textarea>
            <button onClick={AddDataInStorage} id="add-modal-btn">+ Add Note</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddModal