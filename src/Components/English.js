import React from 'react'
import Course from './Course'
import english from './pdfs/ASSP.pdf'
import english2 from './pdfs/ASSP2.pdf'

const myItems={
  subject:'English',
  value:[english,english2]
}
export default function English() {
  return (
    <Course items={myItems}></Course>
  )
}
