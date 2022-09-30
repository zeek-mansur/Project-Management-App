

import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import { timestamp } from '../../firebase/config'
import {useAuthContext} from '../../hooks/useAuthContext'

export default function ProjectComments() {

    const [newComment, setNewComment] = useState('')
        const handleSubmit = async (e)  => {

            e.preventDefault()

            const commentToAdd = {
                displayName: userEvent.displayName, 
                photoURL: userEvent.photoURL,
                content: newComment,
                createdAt: timestamp.fromDate(new Date()),
                id: Math.random()
            }
            console.log(commentToAdd)
        }
    
  return (
    <div className='project-comments'>
      <h4>Project Comments</h4>

      <form className='add-comments' onSubmit={handleSubmit}>
        <label>
            <span>Add new comment:</span>
            <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            ></textarea>
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
