import React, { useState } from "react";


const ContactPage = (props) => {
  const apiRoute = "localhost"
  const [msg, setMsg] = useState({name:"",email:"",phone:"",message:""})

  const {reloadMessages} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      msg: msg
    };
    axios.post(`http://${apiRoute}:5000/send_email`, payload)
    .then((response) => {
      console.log(response.data);
      reloadMessages();
      setMsg({name:"",email:"",phone:"",message:""});
    })
    .catch((error) => {
      console.log(error);
    });
  };

    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <form className="bg-gray-800 text-white rounded-xl shadow-md p-10 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={msg.name} onChange={(e)=>setMsg({...msg, name:e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={msg.email} onChange={(e)=>setMsg({...msg, email:e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Your phone number"
              value={msg.phone} onChange={(e)=>setMsg({...msg, phone:e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="4"
              value={msg.message} onChange={(e)=>setMsg({...msg, message:e.target.value})}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={msg == ""} onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ContactPage;