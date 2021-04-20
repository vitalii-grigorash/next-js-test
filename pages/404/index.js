import Head from 'next/head';
import Router from 'next/router';

export default function ErrorPage () {

    function buttonClick () {
      Router.push('/');
    }

  return (

    <div className='error'>

      <Head>
        <title>Error 404</title>
      </Head>

      <h1 className="error__title">Page Not Found</h1>

      <button className="error__button" onClick={buttonClick}>Main page</button>
      
    </div>
  )
}