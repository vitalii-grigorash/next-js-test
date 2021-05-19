import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {

    const { pathname } = useRouter();

    return (

        <section className='header'>

            <h1 className="header__title">Header</h1>

            <nav className="header__navigation">
                <Link href={'/'}>
                    <a className={`header__links ${pathname === '/' && 'header__links_active'}`}>Main page</a>
                </Link>
                <Link href={'/about-us'}>
                    <a className={`header__links ${pathname === '/about-us' && 'header__links_active'}`}>About us page</a>
                </Link>
                <Link href={'/contacts'}>
                    <a className={`header__links ${pathname === '/contacts' && 'header__links_active'}`}>Contacts Page</a>
                </Link>
            </nav>

        </section>

    )
}