import Logo from '../../assets/logo-kasa.svg';

export default function Loader() {
  return (
    <div className="content-loader">
        <img className='kasa-logo' src={ Logo } alt="Logo Kasa" />
      <div className="custom-loader"></div>
    </div>
  );
}
