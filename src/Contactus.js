import React from 'react';

import styles from "./Contact.module.css";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Contactus = () => {
    
    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0bzf05m','template_gvv8za3', e.target,'OoqHqQmKrl4gHylsW')
        .then((result) => {
           if (result.status === 200) {
            toast.success("Danke, dass Sie uns kontaktiert haben")
           }
        }, (error) => {
            console.log(error.text);
        });
    }




    return (
        <div className={styles.container}>

            <div className={styles.container2}>
                <h3>Contact Us</h3>
                <form  onSubmit={submitHandler}>

                    <input type='text' placeholder='name' name='name' />
                    <input type='email' placeholder='email' name='email' />
                    <textarea placeholder='deine Nachricht' name='message' className={styles.text} />
                    <input type='submit' value="send" className={styles.buttonsend}/>


                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contactus;