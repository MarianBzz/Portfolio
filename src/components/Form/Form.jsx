import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form
        action="https://formsubmit.co/mbozzoletti@hotmail.com"
        method="POST"
      >
        <label>Your Name</label>
        <input type="text" name="nombre" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Subject</label>
        <input type="text" name="motivo" />
        <label>Message</label>
        <textarea
          rows="6"
          name="mensaje"
          placeholder="Type your message here"
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <input
          type="hidden"
          name="_next"
          value="https://portfoliomarianobozzoletti.vercel.app/"
        />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
};

export default Form;
