import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Contacts() {

  const router = useRouter();

  function buttonClick() {
    router.push('/');
  }

  return (

    <div className='contacts'>

      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="Описание страницы с контактами!" />
      </Head>

      <h1 className="contacts__title">Contacts Page</h1>

      <button className="contacts__button" onClick={buttonClick}>Go back to Main page</button>

    </div>
  )
}