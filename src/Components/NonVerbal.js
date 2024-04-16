import React from 'react'
import NV1 from './pdfs/NV1.pdf'
import NV2 from './pdfs/NV1.pdf'


export default function NonVerbal() {
  return (
    <div className='container'>

        <h1>A complete list of 11 Plus Non-Verbal Reasoning Practice Papers</h1>
        <p>Below is the most complete and up-to-date list of all free 11 Plus Non-Verbal Reasoning practice papers available on the internet. All of these 11+ Non-Verbal Reasoning practice papers are in pdf format and we have provided the answers where possible.</p>
        
        <div>
            <h1>11 Plus Non-Verbal Reasoning Practice Papers – Exam Boards</h1>
            <h2>GL 11+</h2>
            <ol>
                <li><a href={NV1} target='__blank'>GL 11+ NVR Familiarisation Paper 1</a></li>
                <li><a href={NV2} target='__blank'>GL 11+ NVR Familiarisation Paper 2</a></li>
                <li><a href="/">GL 11+ NVR Familiarisation Paper 3</a></li>
                <li><a href="/">GL 11+ NVR Familiarisation Papers – Mark Scheme</a></li>
            </ol>
        </div>
        <div>
            <h1>11 Plus Non-Verbal Reasoning Practice Papers – Publishers</h1>
            <h2>Bond 11+</h2>
            <ol>
                <li><a href="/">Bond 11 Plus NVR Sample Paper</a></li>
                <li><a href="/">Bond 11 Plus Non-Verbal Reasoning Practice Paper </a></li>
                <li><a href="/">Bond 11 Plus Non-Verbal Reasoning Practice Paper – Mark Scheme</a></li>
            </ol>

            <h2>CGP 11+</h2>
            <ol>
                <li><a href="/">CGP 11+ Non-Verbal Reasoning Paper for CEM </a></li>
                <li><a href="/">CGP 11+ Non-Verbal Reasoning Paper for CEM – Mark Scheme</a></li>
                <li><a href="/">CGP 11+ Non-Verbal Reasoning Paper for GL </a></li>
                <li><a href="/">CGP 11+ Non-Verbal Reasoning Paper for GL – Mark Scheme</a></li>
            </ol>
        </div>
    </div>
  )
}
