import Head from 'next/head'
import FeedBackForm from '../components/FeedBackForm'

export default function Main () {

  return (

    <section className='main'>

      <Head>
        <title>Main Page</title>
        <meta name="description" content="Описание главной страницы!" />
      </Head>

      <h1 className="main__title">Main Page</h1>

      <FeedBackForm />

    </section>

  )
}
