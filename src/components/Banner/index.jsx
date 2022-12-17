export default function Banner() {
  // const pathname = window.location.pathname;

  // Récupérer l'URL complète de la page actuelle
  const currentUrl = window.location.href;

  // Permet de récupérer uniquement le chemin 'about-us' ou '', avec netlify.
  const urlParts = currentUrl.split('/');
  const pathname = urlParts[4];
  console.log(urlParts); // affichera 'about-us' ou ''
  console.log(pathname);

  return pathname === `about-us` ? (
    <section className="layout">
      <div className="layout__conteneur"></div>
    </section>
  ) : (
    <section className="banner">
      <div className="banner__conteneur">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  );
}
