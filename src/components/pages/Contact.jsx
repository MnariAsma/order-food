import React from 'react'
import { useState } from 'react'
import './Contact.css'
import About from './About'
export default function Contact() {
    
  const [nameAndLastName, setNameAndLastName]=useState("")
  const [email, setEmail]=useState("")
  const [message, setMessage]=useState("")
  const handleSubmit=async (e)=>{
    e.preventDefault();
    await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        nameAndLastName,
        email,
        message,
        date: new Date(Date.now()).toDateString(),
      }),
    });
    setNameAndLastName("");
    setEmail("");
    setMessage("");
  };
  
  return (
    <>
   
    <section id="Contact">
    <div className="leftCol titre">
        <h2><span>C</span>ontact</h2> 
        <p>AVEZ-VOUS UNE QUESTION ? UTILISEZ LE FORMULAIRE DE CONTACT CI-DESSOUS ET JE RÉPONDRAI À TOUTES VOS QUESTIONS, AVEC INTÉGRITÉ.</p>
    </div>
    <div className="contenu">
        
            <h3>Envoyer un message</h3>
            <form onSubmit={(e)=>{handleSubmit(e);}}>
            <div>
                <input type="text" placeholder="nom et prénom" onChange={(e) => setNameAndLastName(e.target.value)} value={nameAndLastName}/>
            </div>
            <div>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <textarea name="msg" id=""  placeholder="message" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div >
            <input type="submit" value="envoyer" className="bt"/>
            </div>
        </form>
       </div>
       
</section>
<About/>
</>
  )
}