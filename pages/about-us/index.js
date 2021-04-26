import Head from 'next/head';
import Router from 'next/router';

export default function AboutUs () {

    function buttonClick () {
        Router.push('/');
    }

    return (

        <section className='about-us'>

            <Head>
                <title>About Us Page</title>
                <meta name="description" content="Описание страницы About Us"/>
            </Head>

            <h1 className="about-us__title">About Us Page</h1>

            <button className="about-us__button" onClick={buttonClick}>Main page</button>

        </section>
    )
}