import React from 'react';

const Form = () => {
  return (
    <div>
      <h2 className="uppercase font-semibold text-yellow-800">LEAVE US A MESSAGE</h2>
      <form className="space-y-5 mt-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <input type="text" placeholder="First Name" className="w-full p-2" />
          </div>
          <div>
            <input type="text" placeholder="Last Name" className="w-full p-2" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <input type="text" placeholder="Phone" className="w-full p-2" />
          </div>
          <div>
            <input type="email" placeholder="Email" className="w-full p-2" />
          </div>
        </div>
        <div>
          <input type="text" placeholder="Subject" className="w-full p-2" />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2"
            cols="10"
            rows="5"></textarea>
        </div>
        <div>
          <button className="bg-yellow-500 text-white uppercase p-2 font-semibold">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
