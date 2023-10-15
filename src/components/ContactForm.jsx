import React, { useState } from 'react';

const ContactForm = () => {
    const [hadMessage, setHadMessage] = useState(false);
    const [message, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setHadMessage(true);
        // Kirim pesan ke server atau lakukan tindakan lain di sini
        console.log('Pesan yang dikirim:', message);
    }

    return (
        <div> 
            <form onSubmit={handleFormSubmit}>
            <label>
                Pesan:<br/>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </label><br/>
            <button type="submit">Kirim</button>
            </form><br/>
                    {hadMessage &&(
                        <>
                        <span>Pesan yang dikirim: </span>
                        <h3>{message}</h3>
                        </>
                    )}
        </div>
    );
}

export default ContactForm;