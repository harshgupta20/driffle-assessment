import {  Modal } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

// STYLES
import "../styles/EditModal.css";

// DRIFFLE LOGO
import LOGO from "../assets/driffle-logo.png";
import { AppContext } from '../App';

const EditModal = ({open, setOpen, title, desc, date, id}) => {

  const [notesData, setNotesData] = useState();

  // CONTEXT
  const {update, setUpdate} = useContext(AppContext);

  const editDataInStorage = () => {
    // Mapping the LocalStorage Array
    notesData.map((data) => {
      // Checking if the id of the data matches with the id of the note to be edited
      if (data.id === id) {
        // If the id matches then the data is updated
        data.title = document.getElementById('edit-modal-title').value;
        data.desc = document.getElementById('edit-modal-textarea').value;
        data.date = new Date().toLocaleDateString();
        data.time = new Date().toLocaleTimeString();
      }
    })

    // Updating the LocalStorage
    localStorage.setItem('notesData', JSON.stringify(notesData));

    // Closing the Modal
    handleClose();

    // Updating the Context
    setUpdate(!update);
  }


  useEffect(() => {
    // Defining the notesData State
    setNotesData(JSON.parse(localStorage.getItem('notesData')));
  },[])

  console.log(notesData);

  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div id="edit-modal-main">
          <div id="edit-modal-data">
            <h3 id="edit-modal-heading"><img src={LOGO} style={{ width: "30px", backgroundColor: "#212121", marginRight: "20px" }} alt="" />edit Note</h3>
            <input type="text" name="title" placeholder={title} id="edit-modal-title" />
            <textarea name="" cols="30" rows="10" id="edit-modal-textarea" placeholder={desc}></textarea>
            <button onClick={editDataInStorage} id="edit-modal-btn">+ edit Note</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default EditModal