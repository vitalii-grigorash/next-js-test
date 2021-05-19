import Head from 'next/head'
import { useRouter } from 'next/router'

export default function ErrorPage() {

  const router = useRouter();

  function buttonClick() {
    router.push('/');
  }

  return (

    <div className='error'>

      <Head>
        <title>Error 404</title>
        <meta name="description" content="Ошибка 404: Страница не найдена" />
      </Head>

      <h1 className="error__title">Page Not Found</h1>

      <button className="error__button" onClick={buttonClick}>Go to Main page</button>

    </div>
  )
}