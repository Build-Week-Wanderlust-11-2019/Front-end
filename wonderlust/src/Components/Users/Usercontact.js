import React from 'react';
import styled from 'styled-components';


const StyledContactForm = styled.form`
border: 3px solid red
`


function Usercontact() {

    return (
        <StyledContactForm>
            <h4>Send some feedback for our app:</h4>
            <label htmlFor="Name">Name:</label>
            <input type="text" name="Name" placeholder="Type your name here" /><br />
            <label for="satisfaction">Please choose a level of satisfaction:</label><br />
            <select id="satisfaction">
                <option value=''>--Please choose a level of satisfaction--</option>
                <option value='very satisfied'>very satisfied</option>
                <option valye='satisfied'>satisfied</option>
                <option value='neutral'>neutral</option>
                <option value='disatisfied'>disatisfied</option>
                <option value='very disatisfied'>very disatisfied</option>
            </select><br/>
            <label htmlfor='body'>Add a description for feedback:</label><br/>
            <textarea name='body' placeholder='Type your description here' />
        </StyledContactForm>
    )
}


export default Usercontact;