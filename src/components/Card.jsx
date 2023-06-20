import React from 'react'
import "../styles/Card.css";

const Card = () => {
  return (
    <>
      <div id="card-main">
        <div id="card-data">
          <h3 id="card-title" className='card-bg'>My First Blog</h3>
          <p id="card-desc" className='card-bg'>orem ipsum dolor sit, amet consectetur adipisicing elit. Ab cum maiores aliquam error veniam debitis et quaerat, modi consequatur velit eos atque ipsam corrupti necessitatibus quibusdam assumenda distinctio similique quidem!</p>
          <p id="card-date" className='card-bg'>Date : 20-June-2023</p>
        </div>
        <div id="card-btn">
          <button id="card-btn-edit" className='card-btn-all'>Edit</button>
          <button id="card-btn-delete" className='card-btn-all'>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Card