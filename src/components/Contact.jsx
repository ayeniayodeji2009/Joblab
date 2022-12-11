import React from 'react';
import Navigation from './Navigation';
import ContactForm from './ContactForm'



export default function Contact (){
 return (
   <>
      <Navigation />
      <div className="basis-[50%] ">
                    <ContactForm />
                </div>
       <address>
            You can find us here:<br />
            GeeksforGeeks<br />
            5th & 6th Floor, Royal Kapsons, A- 118, <br />
            Sector- 136, Noida, Uttar Pradesh (201305)
        </address>
    </>
   )
}