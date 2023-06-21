import React, { useState } from 'react'
import "../styles/Card.css";

//COMPONENTS
import EditModal from './EditModal';

const Card = ({title, desc, date, id}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

 return (
    <>
      <div id="card-main">
        <div id="card-data">
          <h3 id="card-title" className='card-bg'>{title}</h3>
          <p id="card-desc" className='card-bg'>{desc}</p>
          <p id="card-date" className='card-bg'>Date : {date}</p>
        </div>
        <div id="card-btn">
          <button id="card-btn-edit" className='card-btn-all' onClick={handleOpen}>&#9998; Edit</button>
          <button id="card-btn-delete" className='card-btn-all'>&#128465; Delete</button>
        </div>
      </div>

      {/* EDIT MODAL */}
      <EditModal handleOpen={handleOpen} open={open} setOpen={setOpen} title={title} desc={desc} date={date} />
    </>
  )
}

export default Card