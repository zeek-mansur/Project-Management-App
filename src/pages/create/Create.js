import './Create.css'

import React, { useState } from 'react'

export default function Create() {
  // form field values

  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUser, setAssignedUser]= useState([])

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(name, details, dueDate)
  }

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input 
          required
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea 
          required
          type='text'
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input 
          required
          type='date'
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
          />
        </label>
        <label>
          <span> Project category:</span>

        </label>
        <label>
          <span> Assign to:</span>
          
        </label>
        <button className='btn'>Add project</button>
      </form>
    </div>
  )
}
