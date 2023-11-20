import React , { useState } from 'react'


    const Contactus = () => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic (e.g., send data to a server)
          console.log('Form submitted:', formData);
        };
        return (
          <div className="container mt-5">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Description"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        );
      };
      
 export default Contactus;

