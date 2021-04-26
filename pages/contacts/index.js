import Head from 'next/head';
import Router from 'next/router';

export default function Contacts () {

    function buttonClick () {
        Router.push('/');
    }

  return (

    <div className='contacts'>

      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="Описание страницы с контактами!"/>
      </Head>

      <h1 className="contacts__title">Contacts Page</h1>

      <button className="contacts__button" onClick={buttonClick}>Main page</button>
      
    </div>
  )
}