import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../styles/Contact.css'
const Contact = () => {
  const email = "s32314800@gmail.com";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied to clipboard");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6rpeo4e",
        "template_kxgufgi",
        formRef.current,
        "xarYMakT7vnz20bTq"
      )
      .then(
        (result) => {
          alert("Email sent successfully");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send email");
        }
      );
  };
  return (
    <>
      <div className="Contact-Container">
        <div className="row w-100">
          <div className="col-sm-6 mt-5"><div className='Head-Contact'>
            <h1>Contact Me</h1>
            <h4>Tell me about next project</h4>
            <button onClick={handleCopy} className='Gmail-btn'>
              Copy Email
            </button>
          </div>
          </div>
          <div className="col-sm-6">
            <div className="form">
              <form ref={formRef} onSubmit={sendEmail}>
                <h1 className="text-center pt-2">Lets <span className="text-color">Connect's</span></h1>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="Input-tags"
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="Input-tags "
                />
                <br />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="Input-tags text-area"
                />
                <br />
                <button type="submit" className="Submit-btn">Send Mail</button>
              </form>
            </div>
          </div>
        </div>
        <div className='row w-100'>
          <div className='col-sm-4 text-center mt-5'>
            <h5 className='mt-5'> <span className="text-color">Email</span>  </h5>
            <span>s32314800@gmail</span>
            <h5> <span className="text-color">Location</span>  </h5>
            <span>Mathura,UP(281005)</span>
          </div>
          <div className='col-sm-4 text-center mt-5'>
            <h5><span className="text-color">Social Media</span></h5>
            <Link to="https://www.linkedin.com/in/sachin-garg-37aa74252/" className='About-Links'>LinkedIn<MdArrowOutward /></Link> <br />
            <Link to="https://github.com/Sachin-Garg76" className='About-Links'> Github<MdArrowOutward /></Link> <br />
            <Link to="https://leetcode.com/u/Sachin_323/" className='About-Links'>Leetcode<MdArrowOutward /></Link> <br />
            <Link to="https://www.instagram.com/sachin.1806_" className='About-Links'>Insta<MdArrowOutward /></Link> <br />
          </div>
          <div className='col-sm-4 text-center mt-5'>
            <h5><span className="text-color">Write Me & We'll Talk</span></h5>
            <Link className='About-Links'>Whatsapp<MdArrowOutward /></Link> <br />
            <Link to="https://t.me/sachin654" className='About-Links'> Telegram<MdArrowOutward /></Link> <br />
            <Link className='About-Links'> Email<MdArrowOutward /></Link> <br />
          </div>
        </div>

        <h5 className="text-center mt-5">All Right Reserved By <span className="text-color">Sachin</span></h5>
        <h5 className="text-center mt-1">@2026</h5>
      </div>
    </>
  )
}

export default Contact
