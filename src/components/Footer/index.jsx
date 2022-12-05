import Logo from './../../assets/logo-kasa.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}