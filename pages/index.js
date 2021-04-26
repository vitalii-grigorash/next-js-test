import Head from 'next/head';

export default function MainPage () {

  return (

    <div className='main'>

      <Head>
        <title>Main Page</title>
        <meta name="description" content="Описание главной страницы!"/>
      </Head>

      <h1 className="main__title">Main Page</h1>
      
    </div>
  )
}
