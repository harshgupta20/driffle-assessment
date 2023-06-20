import React, { useState } from 'react'
import "../styles/Card.css";

//COMPONENTS
import EditModal from './EditModal';

const Card = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const data = {
    title: "My First Blog",
    desc: "lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab cum maiores aliquam error veniam debitis et quaerat, modi consequatur velit eos atque ipsam corrupti necessitatibus quibusdam assumenda distinctio similique quidem!",
    date: "20-june-2023"
  }

  return (
    <>
      <div id="card-main">
        <div id="card-data">
          <h3 id="card-title" className='card-bg'>{data.title}</h3>
          <p id="card-desc" className='card-bg'>{data.desc}</p>
          <p id="card-date" className='card-bg'>Date : {data.date}</p>
        </div>
        <div id="card-btn">
          <button id="card-btn-edit" className='card-btn-all' onClick={handleOpen}>Edit</button>
          <button id="card-btn-delete" className='card-btn-all'>Delete</button>
        </div>
      </div>

      {/* EDIT MODAL */}
      <EditModal handleOpen={handleOpen} open={open} setOpen={setOpen} title={data.title} desc={data.desc} date={data.date} />
    </>
  )
}

export default Card