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


    const deleteDataStorage = () => {

        // index of the note to be deleted
        var dataIndex = 0;
        var count = 0;
        // Mapping the LocalStorage Array
        notesData.map((data, key) => {
            // Checking if the id of the data matches with the id of the note to be edited
            if (data.id === id) {
                dataIndex = count;
            }
            count++;
        })
        

        // Deleting the note from the notesData Array
        notesData.splice(dataIndex, 1);

        // Updating the LocalStorage
        localStorage.setItem('notesData', JSON.stringify(notesData));

        // Closing the Modal
        deleteHandleClose();

        // Updating the Context
        setUpdate(!update);
    }



    useEffect(() => {
        // Defining the notesData State
        setNotesData(JSON.parse(localStorage.getItem('notesData')));
    },[])


    return (
        <>
            <Modal
                open={deleteOpen}
                onClose={deleteHandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div id="add-modal-main">
                    <div id="add-modal-data">
                        <h3 id="add-modal-heading"><img src={LOGO} style={{ width: "30px", backgroundColor: "#212121", marginRight: "20px" }} alt="" />Confirm <span style={{color:"red"}}>Delete</span> ?</h3>
                        <i id="delete-modal-i">Once deleted then can't be restore</i>
                        <input type="text" value={title} name="title" placeholder='Title...' id="add-modal-title" />
                        <textarea value={desc} cols="30" rows="10" id="add-modal-textarea" placeholder='Desciption...'></textarea>
                        <button onClick={deleteDataStorage} id="add-modal-btn">Delete</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DeleteModal