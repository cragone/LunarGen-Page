import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';



const EmailJsComponent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rl5i3um', 'template_w4f0g76', form.current, {
                publicKey: 'YYZUhzsnJS-wbqKu1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    alert("Successfully Sent!")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-800 relative">
            <div className="card bordered bg-gray-600 h-1/3 w-1/3">
                <div className="card-body">
                    <h2 className="card-title text-black">Contact Us</h2>
                    <form className="form-control" ref={form} onSubmit={sendEmail}>
                        <label className="label label-text text-black">Name</label>
                        <input type="text" className="input input-bordered text-black bg-gray-200" name="user_name" />
                        <label className="label label-text text-black">Email</label>
                        <input type="email" className="input input-bordered text-black bg-gray-200" name="user_email" />
                        <label className="label label-text text-black">Message</label>
                        <textarea name="message" className="input input-bordered text-black bg-gray-200" />
                        <input type="submit" value="Send" className="btn btn-black mt-4 hover:bg-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmailJsComponent; 