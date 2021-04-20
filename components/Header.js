import Link from 'next/link';

export default function Header () {

    return (

        <section className='header'>

            <h1 className="header__title">Header</h1>

            <nav className="header__navigation">
                <Link href={'/'}>
                    <a className="header__links">Main page</a>
                </Link>
                <Link href={'/about-us'}>
                    <a className="header__links">About us page</a>
                </Link>
                <Link href={'/contacts'}>
                    <a className="header__links">Contacts</a>
                </Link>
            </nav>

        </section>

    )
}