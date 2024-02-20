import { React, useState } from "react";
export default function Form() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    nameame: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === 'password') {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      alert('Fill out your first and last name please!');
    } else if (formData.password.length < 6) {
      alert(
        `Choose a more secure password ${formData.firstName} ${formData.lastName}`
      );
    } else {
      alert(`Hello ${formData.firstName} ${formData.lastName}`);
    }

    setFormData({
      firstName: '',
      lastName: '',
      password: '',
    });
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <p>
        Hello. Write me a message
      </p>
      <form className="form">
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <input
          value={formData.Name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="aaaaa@gmail.com"
        />
        <textarea
          value={formData.text}
          name="text"
          onChange={handleInputChange}
          type="text"
          placeholder="Hello"
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}



