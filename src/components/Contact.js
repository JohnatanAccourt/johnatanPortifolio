import React, { useState } from 'react';
import '../styles/Contact.css';

import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import ErrorIcon from '@material-ui/icons/Error';
import ConfirmIcon from '@material-ui/icons/CheckCircleOutline';

import emailjs from 'emailjs-com';

export default function Contact(){
    const [modal, setModal] = useState({
        isShown: 'none',
        icon: 'success',
        color: 'green',
        messageTitle: 'Seu e-mail foi enviado',
        messageDesc: 'Em breve estarei vendo sua mensagem :)'
    })

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
            setModal(prevState => ({
                ...prevState.icon,
                isShown: 'flex',
                icon: 'success',
                color: 'green',
                messageTitle: 'Seu e-mail foi enviado',
                messageDesc: 'Em breve estarei vendo sua mensagem :)'
            }))
        }, (error) => {
            setModal(prevState => ({
                ...prevState.icon,
                isShown: 'flex',
                icon: 'error',
                color: 'red',
                messageTitle: 'Erro ao enviar E-mail',
                messageDesc: 'Verifique os campos e tente novamente'
            }))
        });

        e.target.reset();
    }

    function closeModal(){
        setModal(prevState => ({
            ...prevState.icon,
            isShown: 'none'
        }))
    }

    return(
        <section className="contact__container">
            <div className="projects__leftLines">
                <div className="projects__leftLine1"></div>
                <div className="projects__leftLine2"></div>
                
            </div>
            <div className="projects__rightLines">
                <div className="projects__rightLine1"></div>
                <div className="projects__rightLine2"></div>
            </div>

            <h4 className="contact__title">Entre em contato comigo</h4>

            <form className="contact__form" onSubmit={sendEmail}>
                <div className="contact__wrapperInput">
                    <PersonIcon style={{color: "#95C623", fontSize: '2em'}} />
                    <input className="contact__input" placeholder="Seu nome" type="text" name="from_name" maxLength={30} />
                </div>

                <div className="contact__wrapperInput">
                    <MailIcon style={{color: "#95C623", fontSize: '2em'}} />
                    <input className="contact__input" placeholder="Seu E-mail" type="email" name="email" maxLength={50} />
                </div>

                <textarea 
                    className="contact__textarea" 
                    placeholder="Envie uma mensagem..." 
                    cols="30" 
                    rows="10" 
                    name="message" 
                    maxLength={400} 
                />
                
                <input className="contact__submit" type="submit" value="Enviar Mensagem"/>
            </form>

            <div className="contact__messageBox" style={{backgroundColor: `${modal.color}`, display: `${modal.isShown}`}}>
                <buttom className="contact__close" onClick={closeModal}>x</buttom>
                {modal.icon === 'success' ?
                <ConfirmIcon style={{color: "white", fontSize: '3em', textAlign: 'center', margin: 0}} />
                :
                <ErrorIcon style={{color: "white", fontSize: '3em', textAlign: 'center', margin: 0}} />
                }
                <p className="contact__messageTitle">{modal.messageTitle}</p>
                <p className="contact__messageDesc">{modal.messageDesc}</p>
            </div>

        </section>
    )
}