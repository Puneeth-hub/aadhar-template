import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import './App.css'

function AadharCard() {
   const [name, setName] = useState('');
   const [aadharNumber, setAadharNumber] = useState('');
   const [image, setImage] = useState(null)
   const [city, setCity] = useState('');

const handleFileInput=(e)=>{
  const file = e.target.files[0]
  const reader = new FileReader();
  reader.onloadend=()=>{
    setImage(reader.result)
  }
  reader.readAsDataURL(file)
}



  
const handleFormSubmit = (event) => {
    event.preventDefault();

    html2canvas(document.querySelector("#aadhar-card")).then(canvas => {
      var a = document.createElement('a');
      a.href = canvas.toDataURL();
      a.download = 'aadhar-card.png';
      document.body.appendChild(a);
      a.click();
    });

   
  }

  
    return (
      
      <div className='main-container'>
        <h1>Identification</h1>
        <div className='input-elements'>
        <form onSubmit={handleFormSubmit} >
          
        <label>
          Name:
          <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)} className='input-box'/>
        </label><br/>
        <label>
          Number:
          <input type='text' name='aadharNumber' value={aadharNumber} onChange={(e)=>setAadharNumber(e.target.value)} className='input-box'/>
        </label><br/>
        <label>
          image:
          <input type='file' name='image' id='image' onChange={handleFileInput} className='input-box'/>
          
          
        </label><br/>
        <label>
          Address:
          <input type='text' name='city' value={city} onChange={(e)=>setCity(e.target.value)} className='input-box'/>
          
          
        </label><br/>
        <button type='submit' className='button'>Download Aadhar Card</button>
        
        </form>
        </div>
        
        <div id="aadhar-card">
          
        <p>{image && (
          <img src={image} alt='preview' className='image-c'/>
        )}</p>
        <div className='information'>
        <p>Name: {name}</p>
        <p>ID: {aadharNumber}</p>
        <diV>
          <p>City:{city}</p>
        </diV>
        </div>
        
     </div>
     </div>
    );
  }
export default AadharCard;