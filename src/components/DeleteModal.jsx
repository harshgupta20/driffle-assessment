// MUI
import { Modal } from '@mui/material';

// STYLES
import '../styles/DeleteModal.css';

// DRIFFLE LOGO
import LOGO from "../assets/driffle-logo.png";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

const DeleteModal = ({deleteOpen, setDeleteOpen, title, desc, date, id}) => {

    const [notesData, setNotesData] = useState();

    //CONTEXT
    const { update, setUpdate } = useContext(AppContext);

    //Modal Close Function
    const deleteHandleClose = () => setDeleteOpen(false);
    
    
    // console.log(notesData);
    const deleteDataStorage = () => {
        
        const filteredData = notesData.filter((item) => {return item.id !== id});
        
        console.log("ye raha");
        console.log(filteredData);
        // Updating the LocalStorage
        localStorage.setItem('notesData', JSON.stringify(filteredData));
        setNotesData(filteredData);
        // Closing the Modal
        deleteHandleClose();

        // Updating the Context
        setUpdate(!update);
    }

    useEffect(() => {
        // Defining the notesData State
        setNotesData(JSON.parse(localStorage.getItem('notesData')));
    },[notesData])


    return (
        <>
            <Modal
                open={deleteOpen}
                onClose={deleteHandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div id="delete-modal-main">
                    <div id="delete-modal-data">
                        <h3 id="delete-modal-heading"><img src={LOGO} style={{ width: "30px", backgroundColor: "#212121", marginRight: "20px" }} alt="logo" />Confirm <span style={{color:"rgb(177, 60, 60)",  backgroundColor: "#212121",}}>Delete</span> ?</h3>
                        <i id="delete-modal-i">Once deleted then can't be restore <sup>*</sup></i>
                        <input type="text" value={title} name="title" placeholder='Title...' id="delete-modal-title" />
                        <textarea value={desc} cols="30" rows="10" id="delete-modal-textarea" placeholder='Desciption...'></textarea>
                        <button onClick={deleteDataStorage} id="delete-modal-btn">Delete</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DeleteModal