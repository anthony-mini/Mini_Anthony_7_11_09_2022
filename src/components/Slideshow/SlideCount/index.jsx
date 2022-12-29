export default function SlideCount({ pictures, indexPicture }) {

  const arrayPictures = Object.keys(pictures);

  /**
   * Convertie l'objet pictures en un tableau avec la méthode Object.keys().
   * Obtiens une liste des clés de l'objet, avec des nombres entiers (`[1, 2, 3, 4, ...]`)
   *  */

  const width = window.innerWidth;

  return width >= 1024 ? (
    <p className="slidecount--numbers">
      {indexPicture + 1}/{arrayPictures.length}
    </p>
  ) : null;
}
