import React from 'react'
import axios from 'axios'
import './Form.css'

function Form() {
    // const axios = require('axios').default;
    // axios.get()

    const url = 'http://localhost:5000/'

    const onFormSubmit = () => {
        axios.get(`${url}`)
        console.log("pressed")
        console.log("hello")
    }

    return (


        <div>
            <form id="form">
                FORM <br />
                <label>label</label>
                <input></input><br />
                <button type="button" onClick={onFormSubmit}>Submit</button>
            </form>

        </div>
    );
}

export default Form