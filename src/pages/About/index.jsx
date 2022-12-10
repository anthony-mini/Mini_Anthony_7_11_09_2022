import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner/about';
import AboutUs from '../../data/about-us.json';
import Collapse from '../../components/Collapse';

export default function About() {
  useEffect(() => {
    document.title = `À propos - Kasa`;
  });

  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner />
        <section className="collapse">
          {AboutUs.map((about, index) => (
            <Collapse
              key={about.title + index}
              title={about.title}
              description={about.description}
            />
          ))}
        </section>
      </main>
    </React.Fragment>
  );
}
