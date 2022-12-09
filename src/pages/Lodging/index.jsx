import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Lodgings from '../../data/lodgings.json';
import Collapse from '../../components/Collapse';

export default function Lodging(props) {
  // Get slot ID with `useParams` hook
  const { id } = useParams();
  const lodging = Lodgings.find((l) => l.id === id);

  useEffect(() => {
    if (lodging) {
      // if lodging is well found, I modify the title
      const title = lodging.title;
      document.title = title + '  - Kasa';
    }
  });

  console.log(id);

  return lodging ? (
    // If the lodging is found, we display this sheet
    <main>
      <div>
        <Collapse
          title="Description"
          key={lodging.description}
          description={lodging.description}
        />
        <Collapse className='name'
          title="Équipements"
          key={lodging.equipments}
          equipments={lodging.equipments}
        />
      </div>
    </main>
  ) : (
    // If the lodging is not found, the error page is displayed
    <Navigate replace to="/*" />
  );
}
