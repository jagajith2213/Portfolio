import './Form.css'
import React from 'react'

const Form:React.FC = () => {
    return(
        <div className='form'>
            <label>Your Name</label>
            <input type = "text"/>
            <label>E-Mail</label>
            <input type = "email"/>
            <label>Subject</label>
            <input type='text'/>
            <label>Message</label>
            <textarea rows={6}
            placeholder='Type Your Message Here'/>
            <button className='btn'>Submit</button>
        </div>
    )
}
export default Form;