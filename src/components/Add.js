import React, { useState } from "react";

import Modal from "react-modal";

import "./Add.css";

Modal.setAppElement("#root");

const Add = ({add}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const [myMovie, setMyMovie] = useState({

      name: '',
    
      posterUrl: "",
  
      date: "",

      rating: 0,
  
      description: "",

        
        
      })
    
      const handleChange = (e) => {
        setMyMovie({ ...myMovie, [e.target.name]: e.target.value });
      };
    
      function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    

  return (

    

    <div className="Adding">

        <button onClick={openModal} >Add another movie</button>

        <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2 className="Heading" >Add another movie</h2>

        <form>

          <label>Movie Name</label>

          <input

            type="text"

            name="name"

            required

            onChange={handleChange}

            />

            <label>Movie poster</label>

            <input
  
              type="url"
  
              name="posterUrl"
  
              required
              
              onChange={handleChange}
  
            />

            
          

          <label>Movie Rate</label>

          <input

            type="text"

            name="rating"

            required
            
            onChange={handleChange}

          />

          <label>Movie date (release year)</label>

          <input

            type="text"

            name="date"

            required
            
            onChange={handleChange}

          />

         

          <label>Movie details</label>

          <textarea

            type="text"

            name="description"

            required
            
            onChange={handleChange}

          />

        </form>

        <button

          className="Submitting"

          onClick={() => {

            add(myMovie); 
            
            closeModal();

           

          }}

        >

          Submit

        </button>

        <button className="Closing" onClick={closeModal} >

          Close

        </button>
        </Modal>
    </div>

    

);

};



export default Add;