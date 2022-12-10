export default function Rating(rating) {
  let stars = '';

  for (let i = 0; i < rating; i++) {
    console.log('★'); // affiche une étoile pleine
    //stars += '★';
    stars += `<i class="fa-sharp fa-solid fa-star-sharp"></i>`;
  }

  for (let i = rating; i < 5; i++) {
    console.log('☆'); // affiche une étoile vide
    //stars += '☆';
    stars += `<i class="fa-sharp fa-solid fa-star-sharp"></i>`;
  }

  return stars;
}
