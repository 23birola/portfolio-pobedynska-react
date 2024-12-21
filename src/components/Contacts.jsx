import Form from "./ContactForm";

export default function Contacts() {
  return (
     <section className='page-section' id='contacts'>
      <h2>Contact Me</h2>
      <ul className='contact-list info-wrapper'>
        <li>
          <a className='contact-link' type='tel' href='tel:+447774111111'>+44 7774 111 111</a>
        </li>
        <li>
          <a className='contact-link' type='email' href="mailto:23birola@gmail.com">23birola@gmail.com</a>
        </li>
        <li>
          <a className='contact-link' type='tel' target="_blank" rel="noopener noreferrer" href='https://github.com/23birola'>GitHub</a>
        </li>
        <li>
          <a className='contact-link' href="#">Twitter</a>
        </li>
        <li>
          <a className='contact-link' href="https://drive.google.com/file/d/1kXZ5krq-IVlFWTqyKVvMwkg3zgyz5H_l/view?usp=drive_link">
            <button type="button" className="btn btn-success" target="_blank" rel="noopener noreferrer">my Resume</button>
          </a>
        </li>
      </ul>
      <Form/>
    </section>
  )
}

