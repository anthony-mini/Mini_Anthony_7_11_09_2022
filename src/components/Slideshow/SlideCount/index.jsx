export default function SlideCount({ pictures, indexPicture }) {
  // La fonction retourne une suite de balises <i> remplies avec des symboles de cercle en fonction de la valeur de indexPicture.

  const arrayPictures = Object.keys(pictures);
  /**
   * Convertie l'objet pictures en un tableau avec la méthode Object.keys().
   * Obtiens une liste des clés de l'objet, avec des nombres entiers (`[1, 2, 3, 4, ...]`)
   *  */

  const width = window.innerWidth;

  return width < 1024 ? (
    // Si la largeur de la fenêtre est inférieur à 1024px, on affiche un bullet point
    <div className="slidecount">
      {arrayPictures.map((nbSlides, index) =>
        indexPicture >= nbSlides ? (
          // Si indexPicture est supérieur ou égal au nombre de slides (c'est-à-dire l'élément actuel du tableau), la balise sera remplie d'un cercle plein
          <i key={index} className="fa-solid fa-circle"></i>
        ) : (
          // Sinon, elle sera remplie d'un cercle vide
          <i key={index} className="fa-regular fa-circle"></i>
        )
      )}
    </div>
  ) : (
    // Sinon, si la largeur de la fenêtre est supérieure ou égale à 1024, la fonction retourne un élément <p> avec le numéro de l'image actuel par rapport aux nombres total d'images.
    <p className="slidecount--numbers">
      {indexPicture + 1}/{arrayPictures.length}
    </p>
  );
}
