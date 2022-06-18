// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import '../components/Contact.css'

const Contact = ({ data }) => {
  return (
    <div className="contact">
      <img src={data.photo} alt="gambar profil" />
      <div className="item">
        <h2>{data.name}</h2>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
