import React, { useState } from 'react'
import Head from 'next/head'
import FeedBackForm from '../components/FeedBackForm'
import SuccessPopup from '../components/SuccessPopup'
import * as FeedbackFormApi from '../utils/FeedbackFormApi'

export default function MainPage () {

  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Send form');
  const [senderName, setSenderName] = useState('');

  function handleSuccessPopupOpen () {
    if (!isSuccessPopupOpen) {
      setSuccessPopupOpen(true);
    } else {
      setSuccessPopupOpen(false);
    }
  }

  function feedbackFormSend(name, number) {
    setSubmitButtonText('Sending...');
    FeedbackFormApi.sendForm(name, number)
    .then(() => {
      setSenderName(name);
      handleSuccessPopupOpen();
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setSubmitButtonText('Send form');
    });
  }

  return (

    <section className='main'>

      <Head>
        <title>Main Page</title>
        <meta name="description" content="Описание главной страницы!" />
      </Head>

      <h1 className="main__title">Main Page</h1>

      <FeedBackForm
        onSendForm={feedbackFormSend}
        submitButtonText={submitButtonText}
      />

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={handleSuccessPopupOpen}
        name={senderName}
      />

    </section>
    
  )
}
