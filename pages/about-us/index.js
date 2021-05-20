import Head from 'next/head'
import { useRouter } from 'next/router'

export default function AboutUs () {

    const router = useRouter();

    function buttonClick() {
        router.push('/');
    }

    return (

        <section className='about-us'>

            <Head>
                <title>About Us Page</title>
                <meta name="description" content="Описание страницы About Us" />
            </Head>

            <h1 className="about-us__title">About Us Page</h1>

            <button className="about-us__button" onClick={buttonClick}>Go back to Main page</button>

        </section>
    )
}