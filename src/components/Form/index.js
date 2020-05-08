import React, { useState } from 'react';
import styled from "styled-components";

const StyledForm = styled.div`
    opacity: ${props => props.formOpen ? 1 : 0}
`;

const Form = (props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [confirm, setConfirm] = useState();
    const [error, setError] = useState();

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = () => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...form })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
    };

    const handleInput = e => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    const checkForm = () => {
        if(!form.name.match(/([\u00c0-\u01ffA-Za-z']{1,30})\w+/g) ||
        !form.email.match( /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/) ||
        form.phone.length !== 10 ||
        
        // original regex
        // /(?:\d{1}\s)?(?(\d{3}))?-?\s?(\d{3})-?\s?(\d{4})/

        // tried this regex as well and didn't work when non digits were introduced
        // !form.phone.match(/^[+]?[(]?[2-9]{1}\d{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im) ||
        form.message.length < 5
        ){
            setConfirm(false);
            return setError('Please make sure all the fields are filled out and valid!')
        }

        return setConfirm(true);
    }

    return (
        <StyledForm formOpen={props.formOpen}>
            {!error && confirm &&
                <div>
                    <p>Would you like to send your inquiry?</p>
                    
                    <button
                    onClick={handleSubmit}
                    >
                        Send!
                    </button>
                    
                    <button
                    onClick={() => setConfirm(false)}
                    >
                        Cancel
                    </button>
                </div>
            }
            <form>
                <label htmlFor='name'>Name:</label>
                <input
                disabled={confirm}
                name='name'
                value={form.name}
                onChange={handleInput}
                />

                <label htmlFor='email'>Email:</label>
                <input
                disabled={confirm}
                name='email'
                value={form.email}
                onChange={handleInput}
                />

                <label htmlFor='phone'>Phone Number:</label>
                <input
                disabled={confirm}
                name='phone'
                type='tel'
                value={form.phone}
                onChange={handleInput}
                />

                <label htmlFor='message'>Message to Brown Sales:</label>
                <textarea
                disabled={confirm}
                name='message'
                value={form.message}
                onChange={handleInput}
                />

                {error &&
                    <span>{error}</span>
                }

                <button type='button' onClick={checkForm}>Send</button>
            </form>
        </StyledForm>
    )
}

export default Form;