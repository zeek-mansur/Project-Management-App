
import { useParams } from 'react-router-dom'
// styles
import './Project.css'

import React from 'react'
import { useDocument } from '../../hooks/useDocument'
import ProjectSumary from './ProjectSumary'
import ProjectComments from './ProjectComments'

export default function Project() {

  const { id } = useParams()
  const {error, document } = useDocument('projects', id)

  if (error) {

    return <div className='error'>{error}</div>
  }
  if (!document) {

    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='project-details'>
      <ProjectSumary project = {document}/>
      <ProjectComments project={document} />
    </div>
  )
}
