import React, { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [confirm, setConfirm] = useState();

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

    return (
        <div>
            {confirm &&
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

                <button type='button' onClick={() => setConfirm(true)}>Send</button>
            </form>
        </div>
    )
}

export default Form;