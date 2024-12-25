import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="container">
        <h1>Feel Free To Contact</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30158.700406662752!2d72.84789083855273!3d19.114781253998057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b41dfb131%3A0xa668297563ddac31!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1721314479566!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="mymap"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form action="" className="g-fill">
        <input type="text" placeholder="USERNAME" className="fill" />
        <input type="email" placeholder="ENTER YOUR EMAIL" className="fill" />
        <textarea
          cols={60}
          rows={10}
          placeholder="ENTER YOUR MESSAGE"
          className="message"
        ></textarea>
        <input type="submit" value="SEND" className="btns" />
      </form>
    </>
  );
}

export default Contact;
