export default function SlideCount({ pictures, indexPicture }) {
  const arrayPictures = Object.keys(pictures);
  // Return [1,2,3,4,5...]
  console.log(arrayPictures);
  console.log('index +' + indexPicture);

  return (
    <>
      {arrayPictures.map((nbSlides, index) =>
        indexPicture >= nbSlides ? (
          <div key={index}> . </div>
        ) : (
          <div key={index}> o </div>
        )
      )}
    </>
  );
}
