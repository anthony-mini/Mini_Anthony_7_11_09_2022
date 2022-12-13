export default function SlideCount({ pictures, indexPicture }) {
  const arrayPictures = Object.keys(pictures);
  // Return [1,2,3,4,5...]
  console.log(arrayPictures);
  console.log('index +' + indexPicture);

  return (
    <>
      {arrayPictures.map((nbSlides, index) =>
        indexPicture >= nbSlides ? (
          <i key={index} className="fa-solid fa-circle"></i>
        ) : (
          <i key={index} className="fa-regular fa-circle"></i>
        )
      )}
    </>
  );
}
