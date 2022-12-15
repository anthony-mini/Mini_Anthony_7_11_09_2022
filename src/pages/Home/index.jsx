import React, { useEffect, useState } from 'react';
import Lodgings from '../../data/lodgings.json';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Thumbnail from '../../components/Thumbnail';
import Loader from '../../components/Loader';

export default function Home() {
  useEffect(() => {
    document.title = `Page d'accueil - Kasa`;
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Délai de 3 secondes avant de mettre à jour isLoading
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {
        <React.Fragment>
          <Header />
          <main>
            <Banner />
            <section className="thumbnail">
              {Lodgings.map((lodging) => (
                <Thumbnail
                  key={lodging.id}
                  cover={lodging.cover}
                  title={lodging.title}
                  link={lodging.id}
                />
              ))}
            </section>
          </main>
        </React.Fragment>
      }
    </>
  );
}
