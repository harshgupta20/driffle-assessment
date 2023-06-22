import React, { useState } from 'react'
import "../styles/Card.css";

//COMPONENTS
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const Card = ({title, desc, date, id}) => {

  //EDIT MODAL
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  // DELETE MODAL
  const [deleteOpen, setDeleteOpen] = useState(false);
  const deleteHandleOpen = () => setDeleteOpen(true);

 return (
    <>
      <div id="card-main">
        {/* // CARD DATA */}
        <div id="card-data">
          <h3 id="card-title" className='card-bg'>{title}</h3>
          <p id="card-desc" className='card-bg'>{desc}</p>
          <p id="card-date" className='card-bg'>Date : {date}</p>
        </div>

        {/* // CARD BUTTONS */}
        <div id="card-btn">
          <button id="card-btn-edit" className='card-btn-all' onClick={handleOpen}>&#9998; Edit</button>
          <button id="card-btn-delete" className='card-btn-all' onClick={deleteHandleOpen}>&#128465; Delete</button>
        </div>
      </div>

      {/* EDIT MODAL */}
      {
        open && <EditModal handleOpen={handleOpen} open={open} setOpen={setOpen} title={title} desc={desc} date={date} id={id} />
      }

      {/* DELETE MODAL */}
      {
        <DeleteModal deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} title={title} desc={desc} date={date} id={id} />
      }
    </>
  )
}

export default Card