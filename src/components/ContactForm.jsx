import { React, useState } from "react";
export default function Form() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!formData.userName || !formData.email) {
      alert('Fill out your name and email please!');
    } else {
      alert(`Hello ${formData.userName}. Thank you for your message!`);
    }
    
    setFormData({
      userName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h3>
        Hello. Write me a message!
      </h3>

      <form className="form">
        <div className="mb-3">
          <input type="text" className="form-control" id="name" placeholder="name"
          value={formData.userName}
          name="userName"
          onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="email" placeholder="name@example.com"
          value={formData.email}
          name="email"
          onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="text" rows="3"
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Hello"></textarea>
        </div>
        <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3" onClick={handleFormSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
}



