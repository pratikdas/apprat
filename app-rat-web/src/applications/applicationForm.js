import { useState } from "react";

export default function ApplicationForm() {

  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [selectedOption, setSelectedOption] = useState("option1");
  const  handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
};

  return (
    <form onSubmit={handleSubmit}>
        <div className="row g-3">
           <label htmlFor="name">Name:</label>
           <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        </div>
        <div className="row g-3">
            <label htmlFor="email">Email:</label>
            <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div className="row col-12">
            <label htmlFor="message">Message:</label>
            <textarea class="form-control" id="message" name="message" value={formData.message} onChange={handleChange}/>
        </div>
        <div  className="row col-12">
            <label>
                    Select Application Type:
                        <select  form-control value={selectedOption} onChange={handleDropdownChange}>
                        <option  value="option1">Option 1</option>
                        <option  value="option2">Option 2</option>
                        <option  value="option3">Option 3</option>
                    </select>
            </label>
        </div>
      <p>Selected option: {selectedOption}</p>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}