import { Modal } from '@mui/material'
import "../styles/AddModal.css";

// DRIFFLE LOGO
import LOGO from "../assets/driffle-logo.png";


const AddModal = ({ open, setOpen }) => {

  const handleClose = () => setOpen(false);

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
            <button id="add-modal-btn">+ Add Note</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddModal