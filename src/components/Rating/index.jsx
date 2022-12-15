import SharpStar from '../../assets/SharpStar.svg';
import ThinStar from '../../assets/ThinStar.svg';

export default function Rating({ rating }) {
  // Déclare et exporte la fonction Rating qui prend la propriété rating en paramètre

  const grades = [1, 2, 3, 4, 5]; // Déclare un tableau de cinq notes

  return (
    // Retourne un élément div qui contient les étoiles
    <div className="rating">
      {grades.map((score, index) =>
        // Pour chaque note dans le tableau, crée une étoile en fonction de la note spécifiée.
        // La méthode map() explore toutes la notes présentes dans le tableau.
        rating >= score ? (
          // Tant que la note spécifiée est supérieure ou égale à la note actuelle, affiche une étoile pleine
          <img
            key={index}
            className="rating--stars"
            src={SharpStar}
            alt="Sharp Star"
          />
        ) : (
          // Sinon, affiche une étoile vide
          <img
            key={index}
            src={ThinStar}
            className="rating--stars"
            alt="Thin Star"
          />
        )
      )}
    </div>
  );
}
