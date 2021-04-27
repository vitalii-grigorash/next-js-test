import React, {useState} from 'react';
import Head from 'next/head';
import FeedBackForm from '../components/FeedBackForm';
import SuccessPopup from '../components/SuccessPopup';

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

  function feedbackFormSend (name, number) {
    setSubmitButtonText('Sending...');
    console.log(name, number);
    setTimeout(() => {
      setSubmitButtonText('Send form');
      setSenderName(name);
      handleSuccessPopupOpen();
    }, 2000);
  }

  return (

    <section className='main'>

      <Head>
        <title>Main Page</title>
        <meta name="description" content="Описание главной страницы!"/>
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
