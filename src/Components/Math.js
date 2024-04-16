import React from 'react'
import Course from './Course'
import english from './pdfs/M1.pdf'
import english2 from './pdfs/M2.pdf'

const Items={
  subject:'Math',
  value:[english,english2]
}
export default function Math() {
  return (
    <Course items={Items}/>
  )
}
